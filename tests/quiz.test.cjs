const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

// DOM mínimo para comprobar la lógica real sin dependencias ni peticiones de red.
class Element {
    constructor() {
        this.children = []; this.attributes = {}; this.style = {}; this.listeners = {};
        this.textContent = ''; this.value = ''; this._className = ''; this.queries = new Map();
        this.classList = {
            contains: name => this._className.split(' ').includes(name),
            toggle: (name, force) => {
                const values = new Set(this._className.split(' ').filter(Boolean));
                const add = force === undefined ? !values.has(name) : force;
                if (add) values.add(name); else values.delete(name);
                this._className = [...values].join(' '); return add;
            },
            add: (...names) => names.forEach(name => this.classList.toggle(name, true)),
            remove: (...names) => names.forEach(name => this.classList.toggle(name, false))
        };
    }
    get className() { return this._className; }
    set className(value) { this._className = value; }
    get innerHTML() { return this._innerHTML || ''; }
    set innerHTML(value) { this._innerHTML = value; this.children = []; }
    appendChild(child) { this.children.push(child); }
    setAttribute(name, value) { this.attributes[name] = value; }
    removeAttribute(name) { delete this.attributes[name]; }
    addEventListener(name, handler) { this.listeners[name] = handler; }
    querySelector(selector) {
        const child = this.children.find(node => node.classList.contains(selector.slice(1)));
        if (child) return child;
        if (!this.queries.has(selector)) this.queries.set(selector, new Element());
        return this.queries.get(selector);
    }
    closest(selector) { return this.querySelector(selector); }
    scrollIntoView() {}
}

function app(course = 'iv', storage = new Map(), clock = {now: 1000000}) {
    const nodes = new Map();
    const element = id => {
        if (!nodes.has(id)) nodes.set(id, new Element());
        return nodes.get(id);
    };
    const document = {
        body: new Element(), addEventListener() {},
        getElementById: element, querySelector: element,
        querySelectorAll: () => element('options-list').children,
        createElement: () => new Element()
    };
    const intervals = new Map(); let nextInterval = 0;
    class ClockDate extends Date { static now() { return clock.now; } }
    const context = vm.createContext({
        window: {location: {search: course === 'iv' ? '?course=iv' : ''}}, URLSearchParams,
        console, document, Date: ClockDate, alert() {}, confirm: () => true,
        setTimeout() {}, setInterval: callback => { intervals.set(++nextInterval, callback); return nextInterval; },
        clearInterval: id => intervals.delete(id),
        localStorage: {getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key)}
    });
    const root = path.resolve(__dirname, '..');
    for (const filename of ['tef_iv_questions.js', 'tef_iv_extra_questions.js', 'index.js']) {
        vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, {filename});
    }
    const run = code => vm.runInContext(code, context);
    run('triggerConfetti = () => {};');
    return {run, json: code => JSON.parse(run(`JSON.stringify(${code})`)), nodes, storage, clock, intervals};
}

test('archivos y aplicación: 38 anteriores + 30 nuevas = 68, sin datos ocultos', () => {
    const a = app();
    assert.equal(a.run('QUIZ_DATABASE.length'), 68);
    assert.deepEqual(a.json(`['official','extra'].map(pool => {state.pool=pool; return getActiveDatabase().length})`), [38,30]);
    assert.equal(a.run("state.mode='exam'; getActiveDatabase().length"), 68);
    assert.equal(a.run('new Set(QUIZ_DATABASE.map(q => q.id)).size'), 68);
});

test('procedencia por convocatoria y distinción entre test original, adaptación y creación', () => {
    const a = app();
    assert.deepEqual(a.json(`window.TEF_IV_QUIZ_DATABASE.reduce((m,q) => {m[q.exam_year]=(m[q.exam_year]||0)+1; return m}, {})`),
        {'2021–2022':10,'2023':9,'2022–2023':7,'2018':7,'2017':5});
    assert.equal(a.run("QUIZ_DATABASE.filter(q => q.origin==='exam').length"),10);
    assert.equal(a.run("QUIZ_DATABASE.filter(q => q.origin==='adapted-exam' && q.source_reference.includes('adaptación')).length"),28);
    assert.ok(a.run("window.TEF_IV_EXTRA_QUIZ_DATABASE.every(q => q.origin==='new' && !q.exam_year && q.source_reference.includes('no procede de un examen'))"));
});

test('las diez respuestas originales coinciden con la clave oficial de la página 4', () => {
    const a = app();
    assert.deepEqual(a.json(`Object.fromEntries(QUIZ_DATABASE.filter(q=>q.origin==='exam').map(q=>[q.id,q.correct_index]))`),
        {N1:1,N11:1,N3:0,N33:0,N4:1,N44:1,N5:0,N55:1,N6:2,N66:1});
});

test('P2 y los 16 registros obsoletos están ausentes físicamente; se mantienen alfas de P1 y P3', () => {
    const a = app();
    const questions = a.json('QUIZ_DATABASE');
    const excluded = ['N2','N22','N_Ex_23_02','N_Ex_22_08','N_Ex_18_02','N_Ex_17_02','N_Ex_N_39','N_Ex_N_40'];
    assert.ok(questions.every(q => !excluded.includes(q.id) && !q.id.startsWith('N_Ex_N_')));
    assert.ok(questions.every(q => !/Rutherford|cámara de niebla|espectrometría alfa|frenado de alfas|práctica 2/i.test(q.text + q.options.join(' '))));
    assert.ok(questions.some(q => q.text.includes('CR39')));
    assert.ok(questions.some(q => /termoluminisc/i.test(q.text)));
    assert.ok(questions.some(q => q.id === 'N3'));
});

test('referencias completas y páginas válidas; nuevas con respuesta única y posición distribuida', () => {
    const a = app(); const questions = a.json('QUIZ_DATABASE');
    const pages = {'Guiones de prácticas de Física Nuclear.pdf':155,'Física Cuántica - Tema 5 - Núcleos y átomos.pdf':15};
    for (const q of questions) {
        assert.ok(Number.isInteger(q.correct_index) && q.correct_index >= 0 && q.correct_index < q.options.length, q.id);
        assert.equal(new Set(q.options).size,q.options.length,q.id);
        assert.ok(q.justification && q.references.length,q.id);
        for (const r of q.references) {
            assert.ok(pages[r.document] && r.section && r.pdf_pages.length,q.id);
            assert.ok(r.pdf_pages.every(p => Number.isInteger(p) && p >= 1 && p <= pages[r.document]),q.id);
            if (r.document.startsWith('Guiones')) assert.ok(r.pdf_pages.every(p => p < 43 || p > 60),q.id);
        }
    }
    assert.deepEqual(a.json('window.TEF_IV_EXTRA_QUIZ_DATABASE.reduce((m,q)=>(m[q.correct_index]++,m),[0,0,0,0])'),[8,7,8,7]);
    assert.equal(questions.filter(q=>q.figure).length,4);
});

test('100 barajados conservan IDs, opciones, referencias y respuesta válida sin modificar el banco', () => {
    const a = app(); const original = a.json('QUIZ_DATABASE');
    let reordered = false;
    for (let round=0; round<100; round++) {
        const shuffled = a.json('prepareQuestions(QUIZ_DATABASE)');
        assert.equal(shuffled.length,68);
        assert.equal(new Set(shuffled.map(q=>q.id)).size,68);
        reordered ||= shuffled.some((q,index)=>q.id!==original[index].id);
        for (const q of shuffled) {
            const before = original.find(item=>item.id===q.id);
            assert.equal(q.options[q.correct_index],before.options[before.correct_index],q.id);
            assert.deepEqual([...q.options].sort(),[...before.options].sort(),q.id);
            assert.deepEqual(q.references,before.references,q.id);
        }
    }
    assert.ok(reordered);
    assert.deepEqual(a.json('QUIZ_DATABASE'),original);
});

test('sesiones v3/v4/v5 no se recuperan; payloads retirados, duplicados o de otro bloque tampoco', () => {
    const a = app();
    a.storage.set('lab_physics_tef_iv_quiz_state_official_v3',JSON.stringify({mode:'practice',questions:[{id:'N_Ex_N_39'}]}));
    a.storage.set('lab_physics_tef_iv_quiz_state_official_v4',JSON.stringify({mode:'practice',questions:[{id:'N_New_01'}]}));
    a.storage.set('lab_physics_tef_iv_quiz_state_official_v5',JSON.stringify({mode:'practice',questions:[{id:'N_Ex_22_04'}]}));
    a.storage.set('lab_physics_tef_iv_quiz_state_extra_v5',JSON.stringify({mode:'practice',questions:[{id:'N_New_01',text:'Calcular el diámetro numérico'}]}));
    a.storage.set('lab_physics_tef_iv_quiz_state_exam_v5',JSON.stringify({mode:'exam',questions:[{id:'N_New_28'}]}));
    assert.equal(a.run('loadStateFromLocalStorage()'),false);
    a.run("state.pool='extra';"); assert.equal(a.run('loadStateFromLocalStorage()'),false);
    a.run("state.mode='exam';"); assert.equal(a.run('loadStateFromLocalStorage()'),false);
    a.run("state.mode='practice'; state.pool='official';");
    a.run('resetQuiz();');
    const saved = JSON.parse(a.storage.get(a.run('getLocalStorageKey()')));
    const canonical = saved.questions[0];
    canonical.text = 'Contenido obsoleto'; canonical.justification = 'Explicación obsoleta'; canonical.correct_index = 99;
    saved.questions.push({...canonical},{id:'N_Ex_N_39'},a.json('window.TEF_IV_EXTRA_QUIZ_DATABASE[0]'));
    a.storage.set(a.run('getLocalStorageKey()'),JSON.stringify(saved));
    assert.equal(a.run('loadStateFromLocalStorage()'),true);
    assert.equal(a.run('state.questions.length'),38);
    assert.ok(a.run("state.questions.every(q=>q.bank==='official' && q.text!=='Contenido obsoleto' && q.justification!=='Explicación obsoleta' && q.correct_index<q.options.length)"));
});

test('si cambian opciones guardadas se usa el contenido actual y se invalida esa respuesta', () => {
    const a = app(); a.run('resetQuiz(); selectOption(0); verifyAnswer();');
    const saved=JSON.parse(a.storage.get(a.run('getLocalStorageKey()')));
    const id = saved.questions[0].id;
    saved.questions[0].options[0]='Opción retirada';
    a.storage.set(a.run('getLocalStorageKey()'),JSON.stringify(saved));
    a.run('loadStateFromLocalStorage();');
    assert.equal(a.run('state.questions[0].id'),id);
    assert.equal(a.run('state.userAnswers[0]'),null);
    assert.equal(a.run('state.verified[0]'),false);
    assert.ok(a.run("state.questions.every(q=>!q.options.includes('Opción retirada'))"));
});

test('cambiar bloques y modos conserva las tres sesiones independientes y sus respuestas', () => {
    const a=app(); a.run('initQuiz(); selectOption(1); verifyAnswer();');
    const first = a.run('state.questions[0].id');
    a.run("switchPool('extra'); selectOption(2); verifyAnswer();");
    const extra = a.run('state.questions[0].id');
    a.run("switchMode('exam'); selectOption(0);");
    const exam = a.run('state.questions[0].id');
    assert.equal(a.run('state.questions.length'),68);
    a.run("switchMode('practice');");
    assert.equal(a.run('state.questions[0].id'),extra);
    assert.equal(a.run('state.userAnswers[0]'),2);
    assert.equal(a.run('state.verified[0]'),true);
    a.run("switchPool('official');");
    assert.equal(a.run('state.questions[0].id'),first);
    assert.equal(a.run('state.userAnswers[0]'),1);
    a.run("switchMode('exam');");
    assert.equal(a.run('state.questions[0].id'),exam);
    assert.equal(a.run('state.userAnswers[0]'),0);
    assert.equal(a.run('state.questions.length'),68);
});

test('recargar un examen conserva orden, respuestas, plazo real y resultados terminados', () => {
    const a=app(); a.run("initQuiz(); switchMode('exam'); selectOption(state.questions[0].correct_index);");
    assert.equal(a.nodes.get('timer-val').textContent,'60:00');
    const order=a.json('state.questions.map(q=>q.id)');
    a.clock.now+=65000;
    const b=app('iv',a.storage,a.clock); b.run('initQuiz();');
    assert.deepEqual(b.json('state.questions.map(q=>q.id)'),order);
    assert.equal(b.run('state.examTimeElapsed'),65);
    assert.equal(b.nodes.get('timer-val').textContent,'58:55');
    assert.equal(b.run('state.userAnswers[0]===state.questions[0].correct_index'),true);
    b.run('submitExam();');
    assert.equal(b.nodes.get('results-score-text').textContent,'1 / 68');
    assert.equal(b.nodes.get('results-time-text').textContent,'01:05');
    const c=app('iv',a.storage,a.clock); c.run('initQuiz();');
    assert.equal(c.nodes.get('results-score-text').textContent,'1 / 68');
    assert.equal(c.nodes.get('results-time-text').textContent,'01:05');
    assert.equal(c.nodes.get('results-detail-opt').textContent,'1 de 68');
    assert.equal(c.intervals.size,0);
});

test('corrección de las 68 respuestas barajadas y entrega automática al agotarse el plazo', () => {
    const a=app(); a.run("initQuiz(); switchMode('exam'); state.userAnswers=state.questions.map(q=>q.correct_index); saveStateToLocalStorage();");
    a.clock.now+=1801000;
    const b=app('iv',a.storage,a.clock); b.run('initQuiz();');
    assert.equal(b.run('state.examSubmitted'),false);
    assert.equal(b.nodes.get('timer-val').textContent,'29:59');
    b.clock.now+=1800000;
    const c=app('iv',b.storage,b.clock); c.run('initQuiz();');
    assert.equal(c.run('state.examSubmitted'),true);
    assert.equal(c.nodes.get('results-score-text').textContent,'68 / 68');
    assert.equal(c.nodes.get('results-percent-text').textContent,'100%');
    assert.equal(c.nodes.get('results-time-text').textContent,'60:00');
    assert.equal(c.intervals.size,0);
    const d=app('iv',c.storage,c.clock); d.run('initQuiz();');
    assert.equal(d.nodes.get('results-time-text').textContent,'60:00');
});

test('los exámenes de media hora en curso se amplían una vez; los entregados conservan su tiempo', () => {
    const a=app(); a.run("initQuiz(); switchMode('exam'); selectOption(0);");
    const key=a.run('getLocalStorageKey()');
    const saved=JSON.parse(a.storage.get(key));
    delete saved.examTimeSeconds; // Las sesiones anteriores no guardaban esta propiedad.
    saved.examDeadline=a.clock.now+1800000;
    a.storage.set(key,JSON.stringify(saved));
    a.clock.now+=300000;
    const b=app('iv',a.storage,a.clock); b.run('initQuiz();');
    assert.equal(b.nodes.get('timer-val').textContent,'55:00');
    assert.equal(b.run('state.userAnswers[0]'),0);
    const deadline=b.run('state.examDeadline');
    assert.equal(JSON.parse(b.storage.get(key)).examTimeSeconds,3600);
    const c=app('iv',b.storage,b.clock); c.run('initQuiz();');
    assert.equal(c.run('state.examDeadline'),deadline);
    c.clock.now+=1800000;
    c.run('submitExam();');
    const d=app('iv',c.storage,c.clock); d.run('initQuiz();');
    assert.equal(d.nodes.get('results-time-text').textContent,'35:00');
    const completed=JSON.parse(d.storage.get(key));
    delete completed.examTimeSeconds;
    completed.examTimeElapsed=1800;
    completed.examDeadline=a.clock.now;
    d.storage.set(key,JSON.stringify(completed));
    const e=app('iv',d.storage,d.clock); e.run('initQuiz();');
    assert.equal(e.run('state.examSubmitted'),true);
    assert.equal(e.nodes.get('results-time-text').textContent,'30:00');
    assert.equal(e.run('state.examDeadline'),completed.examDeadline);
});

test('un examen TEF IV nunca se reduce al subconjunto de fallos guardado', () => {
    const a=app(); a.run("initQuiz(); switchMode('exam');");
    const saved=JSON.parse(a.storage.get(a.run('getLocalStorageKey()')));
    saved.onlyFailedMode=true; saved.questions=saved.questions.slice(0,2);
    a.storage.set(a.run('getLocalStorageKey()'),JSON.stringify(saved));
    a.run('loadStateFromLocalStorage();');
    assert.equal(a.run('state.questions.length'),68);
    assert.equal(a.run('state.onlyFailedMode'),false);
    a.run('resetQuiz(true);');
    assert.equal(a.run('state.questions.length'),68);
});

test('TEF III conserva íntegramente sus 101 preguntas, ambos bloques y la corrección', () => {
    const a=app('iii');
    const hash=crypto.createHash('sha256').update(a.run('JSON.stringify(TEF_III_QUIZ_DATABASE)')).digest('hex');
    assert.equal(hash,'ddf2225c80a786aa3db277401fbe255da8e5485e7296d1937ee890693138a23c');
    a.run('initQuiz();'); assert.equal(a.run('state.questions.length'),53);
    a.run('selectOption(state.questions[0].correct_index); verifyAnswer();');
    assert.equal(a.nodes.get('stat-correct').textContent,1);
    a.run("switchPool('extra');"); assert.equal(a.run('state.questions.length'),48);
    a.run("switchMode('exam');");
    assert.equal(a.nodes.get('timer-val').textContent,'30:00');
    a.run("state.userAnswers=state.questions.map(q=>q.correct_index); submitExam();");
    assert.equal(a.nodes.get('results-score-text').textContent,'48 / 48');
    assert.equal(a.run('getLocalStorageKey()'),'lab_physics_quiz_state_extra_v1');
});

test('las nuevas exigen interpretación sin cuentas; gráficas cualitativas accesibles sin tablas numéricas', () => {
    const a=app(); const questions=a.json('window.TEF_IV_EXTRA_QUIZ_DATABASE');
    assert.deepEqual(questions.reduce((m,q)=>(m[q.topic]=(m[q.topic]||0)+1,m),{}),
        {P1:5,P3:6,P4:4,P5:5,P6:2,Introducción:2,'Tema 5':6});
    for (const q of questions) {
        const visible=[q.text,...q.options].join(' ').replace(/\b(?:CR39|P[13456])\b/gu,'');
        assert.ok(!/\d|calcula|valor numérico|cuánto vale|cuál es el diámetro/iu.test(visible),q.id);
        if (q.figure) {
            assert.equal(q.figure.qualitative,true,q.id);
            assert.ok(q.figure.description.length>20,q.id);
            const rendered=a.run(`getQuestionFigure(QUIZ_DATABASE.find(q=>q.id===${JSON.stringify(q.id)}))`);
            assert.ok(rendered.includes('Esquema cualitativo, sin escala numérica.'),q.id);
            assert.ok(rendered.includes(q.figure.description),q.id);
            assert.ok(!/<table|<details|<text[^>]*>\d/iu.test(rendered),q.id);
            for (const series of q.figure.series) assert.ok(rendered.includes(series.label),q.id);
        }
    }
    const annotated=a.json("QUIZ_DATABASE.find(q=>q.id==='N_Ex_22_04')");
    assert.ok(!/mitad|duplicando|factor dos/iu.test(annotated.text+annotated.options.join(' ')));
});

test('elegir por longitud no aporta ventaja sistemática, tampoco eligiendo la más corta', () => {
    const a=app(); const questions=a.json('window.TEF_IV_EXTRA_QUIZ_DATABASE');
    const measures={characters: text=>[...text.normalize('NFC')].length, words: text=>text.trim().split(/\s+/u).length};
    for (const [name,measure] of Object.entries(measures)) {
        for (const extreme of [Math.max,Math.min]) {
            // El barajado hace equiprobables los empates; se calcula su nota esperada exacta.
            const expected=questions.reduce((sum,q)=>{
                const lengths=q.options.map(measure);
                const target=extreme(...lengths);
                return sum+(lengths[q.correct_index]===target ? 1/lengths.filter(length=>length===target).length : 0);
            },0);
            assert.ok(expected<=questions.length/4+1e-10,`${name}: ${extreme===Math.max?'más larga':'más corta'} espera ${expected}/30`);
        }
    }
    // Evita volver a dar solo a la correcta una segunda frase explicativa.
    for (const q of questions) {
        const sentences=q.options.map(option=>(option.match(/[.!?](?:\s|$)/gu)||[]).length);
        assert.ok(!(sentences[q.correct_index]>1 && sentences[q.correct_index]===Math.max(...sentences) && sentences.filter(n=>n===sentences[q.correct_index]).length===1),q.id);
    }
});
