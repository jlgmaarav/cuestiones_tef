/*
 * Preguntas adaptadas a tipo test a partir de los exámenes de desarrollo
 * de TEF IV de 2023, 2022-2023, 2018 y 2017.
 * Respuestas contrastadas con los Guiones de prácticas de Física Nuclear.
 */
window.TEF_IV_EXTRA_QUIZ_DATABASE = [
    {
        id: 'N_Ex_23_01', text: '¿Por qué la curva de intensidad termoluminiscente suele presentar uno o varios máximos al calentar un dosímetro irradiado?',
        options: ['La probabilidad de liberar electrones atrapados aumenta con la temperatura, pero el número que queda atrapado va disminuyendo; distintos tipos de trampa pueden producir varios picos.', 'La actividad de la fuente radiactiva aumenta y disminuye periódicamente durante el calentamiento.', 'Cada máximo corresponde a la fusión de una parte distinta del cristal de LiF.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'La luz aparece cuando los electrones salen de sus trampas. Al subir la temperatura aumenta la probabilidad de escape, mientras que la población atrapada se agota; el producto de ambos efectos presenta máximos. Trampas de distinta profundidad pueden dar más de un pico. (Guion, P1, §1.2).'
    },
    {
        id: 'N_Ex_23_03', text: '¿Por qué aumenta la amplitud de un impulso de un detector Geiger al aumentar la tensión aplicada?',
        options: ['Aumenta la multiplicación de electrones secundarios de la avalancha antes de que la carga recolectada apantalle el campo y extinga la descarga.', 'La fuente emite más partículas radiactivas por segundo al acercarle una tensión mayor.', 'La energía de cada partícula se convierte directamente en un impulso proporcional, como en un detector semiconductor.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'En la región Geiger, la descarga se extingue cuando la carga espacial apantalla el campo. Al aumentar la tensión se necesita más carga para apantallarlo, y la amplitud del impulso crece. (Guion, P4, §§4.1–4.2 y 4.7).'
    },
    {
        id: 'N_Ex_23_04', text: '¿Cómo se forma el impulso eléctrico de un detector de centelleo NaI(Tl)?',
        options: ['La radiación produce luz en el cristal; esta luz libera fotoelectrones en el fotocátodo, el fotomultiplicador los multiplica y la carga genera un impulso.', 'La radiación calienta directamente un alambre, cuya expansión mecánica se registra como tensión.', 'El fotón gamma ioniza el aire exterior y los iones cargan directamente el multicanal.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'El cristal transforma parte de la energía depositada en fotones de luz. El fotocátodo del PMT los convierte en fotoelectrones, que se multiplican; la carga recogida produce el impulso cuya amplitud es proporcional a la energía depositada. (Guion, P5, introducción).'
    },
    {
        id: 'N_Ex_23_05', text: '¿Qué partículas producen las trazas que se observan en el CR39 tras irradiarlo con la fuente de americio y revelarlo?',
        options: ['Partículas alfa, que dañan las cadenas moleculares del plástico.', 'Fotones gamma, que dejan una trayectoria continua visible a simple vista.', 'Neutrones térmicos, que se convierten en burbujas al calentar el CR39.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'Las partículas alfa ionizan intensamente el CR39 y rompen enlaces de sus cadenas moleculares, dejando una zona dañada que después se revela químicamente. (Guion, P1, §1.1.1).'
    },
    {
        id: 'N_Ex_23_06', text: '¿Qué se registra para medir la semivida del 137mBa en la práctica del minigenerador?',
        options: ['Las cuentas de los fotones gamma del 137mBa en intervalos sucesivos; las diferencias corregidas por el fondo son proporcionales a su actividad.', 'La masa del bario que queda en el minigenerador después de cada intervalo.', 'La corriente de partículas alfa emitidas directamente por el 137Cs.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'El 137mBa emite un fotón gamma de 0,662 MeV. Se cuentan los impulsos con un detector Geiger en intervalos fijos, se corrige el fondo y se ajusta el logaritmo de las diferencias frente al tiempo para obtener la pendiente de decaimiento. (Guion, P3, §3.1).'
    },
    {
        id: 'N_Ex_23_07', text: '¿Qué significa el equilibrio secular que se observa al comparar pechblenda y uranio puro?',
        options: ['Cuando el padre vive mucho más que el hijo, tras suficiente tiempo las actividades del padre y del hijo se igualan; la pechblenda conserva sus descendientes, pero el uranio recién purificado aún no.', 'El uranio puro y la pechblenda tienen siempre la misma composición isotópica y el mismo espectro.', 'El equilibrio se alcanza cuando dejan de desintegrarse tanto el núcleo padre como sus descendientes.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'En equilibrio secular, la actividad del núcleo hijo iguala a la del padre de vida mucho más larga. La separación química rompe el equilibrio en el uranio puro; los descendientes vuelven a acumularse con el tiempo. (Guion, P3, §3.1 y P6, §6.5.2).'
    },
    {
        id: 'N_Ex_23_08', text: 'En un espectro gamma, ¿qué representa la intensidad de un fotopico?',
        options: ['El número de fotones de esa energía que absorbe el detector durante el tiempo de medida.', 'La energía cinética máxima del electrón Compton.', 'La semivida del isótopo que emite el fotón.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'La altura o el área del fotopico se relaciona con el número de fotones de esa energía que el detector registra durante la medida; la energía se lee en la posición del pico. (Guion, P5, §§5.1–5.2).'
    },
    {
        id: 'N_Ex_23_09', text: '¿Para qué se aplica NaOH al CR39 en la práctica de trazas?',
        options: ['Para atacar más rápidamente las zonas dañadas por las alfas y ensancharlas hasta hacerlas visibles al microscopio.', 'Para neutralizar la carga eléctrica de los fotones gamma antes de irradiar el plástico.', 'Para endurecer la superficie y evitar que se formen trayectorias dentro del material.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'El NaOH realiza un revelado químico: disuelve con mayor rapidez el plástico dañado por la partícula alfa que el material intacto, formando trazas visibles. (Guion, P1, §1.1.1).'
    },
    {
        id: 'N_Ex_23_10', text: 'En el ajuste de ln(I) frente al tiempo se obtiene una pendiente m negativa. ¿Por qué se escribe T₁/₂ = −ln(2)/m?',
        options: ['Porque la constante de desintegración es λ = −m y la semivida positiva vale ln(2)/λ.', 'Porque la semivida es negativa y el signo menos indica que el tiempo transcurre hacia atrás.', 'Porque ln(2) debe cambiar de signo al tomar el logaritmo de una corriente.'],
        correct_index: 0, matched_page: 1, source_file: 'Recopilación 2017–2023 · Examen 2023',
        justification: 'La actividad decae como exp(−λt), por lo que la pendiente del logaritmo es m = −λ. Así, T₁/₂ = ln(2)/λ = −ln(2)/m, que es positiva porque m es negativa. (Guion, P3, §3.1.8).'
    },
    {
        id: 'N_Ex_22_01', text: '¿A qué se deben las trazas que se observan en el CR39 al microscopio después de irradiarlo y tratarlo con ácido y calor?',
        options: ['A las partículas alfa de la fuente de americio, que dejan zonas dañadas y muy ionizadas en el plástico.', 'A los fotones gamma, que perforan canales macroscópicos rectos en el CR39.', 'A partículas beta que funden por completo el plástico a lo largo de su recorrido.'],
        correct_index: 0, matched_page: 2, source_file: 'Recopilación 2017–2023 · Examen 2022-2023',
        justification: 'La respuesta escrita en la recopilación identifica las alfas de la fuente de americio. Su elevada capacidad de ionización daña el plástico y el revelado posterior hace visible la trayectoria. (Guion, P1, §1.1.1).'
    },
    {
        id: 'N_Ex_22_02', text: '¿De qué depende principalmente la amplitud del impulso de un detector Geiger?',
        options: ['De la tensión aplicada y de la descarga Geiger, no de forma proporcional a la ionización primaria de la partícula.', 'Únicamente de la energía inicial de la partícula, igual que en un espectrómetro gamma.', 'Del color de la radiación que entra en el tubo.'],
        correct_index: 0, matched_page: 2, source_file: 'Recopilación 2017–2023 · Examen 2022-2023',
        justification: 'La amplitud aumenta con la tensión, pero en la región Geiger deja de ser proporcional a la ionización primaria: la carga de la descarga apantalla el campo y la extingue. (Guion, P4, §§4.1–4.2 y 4.7).'
    },
    {
        id: 'N_Ex_22_03', text: '¿Qué medida se sigue con un detector Geiger para obtener la semivida del 137mBa?',
        options: ['El número de cuentas gamma en intervalos iguales de tiempo; se usan las diferencias corregidas por fondo y su variación exponencial.', 'El número de partículas alfa detectadas en intervalos de tiempo cada vez más largos.', 'La temperatura del minigenerador mientras el bario se transforma en cesio.'],
        correct_index: 0, matched_page: 2, source_file: 'Recopilación 2017–2023 · Examen 2022-2023',
        justification: 'El detector cuenta las gammas de 0,662 MeV emitidas por el 137mBa. Las diferencias entre cuentas sucesivas, corregidas por el fondo, son proporcionales a la actividad y permiten hallar la semivida mediante un ajuste exponencial. (Guion, P3, §3.1).'
    },
    {
        id: 'N_Ex_22_04', text: 'Si se quieren igualar las alturas de los picos de la pechblenda y del uranio puro en una comparación concreta, ¿qué ajuste de medida propone la respuesta del examen?',
        options: ['Medir la pechblenda durante más tiempo.', 'Medir el uranio puro durante más tiempo.', 'Compactar la pechblenda para cambiar sus energías gamma.'],
        correct_index: 0, matched_page: 2, source_file: 'Recopilación 2017–2023 · Examen 2022-2023',
        justification: 'La respuesta del examen indica que, para el mismo tiempo de medida, los picos del uranio puro tenían más intensidad, así que se propone medir la pechblenda durante más tiempo. Para igualar además la composición relativa de los espectros hay que esperar miles de años a que se regeneren los descendientes. (Guion, P6, §6.5.2).'
    },
    {
        id: 'N_Ex_22_05', text: '¿Qué información da la altura de un pico en un espectro gamma?',
        options: ['Cuántos fotones de esa energía ha absorbido el detector durante el intervalo de medida.', 'La energía total almacenada en el núcleo antes de desintegrarse.', 'La cantidad de electrones secundarios producidos por cada fotón, independientemente del tiempo de medida.'],
        correct_index: 0, matched_page: 3, source_file: 'Recopilación 2017–2023 · Examen 2022-2023',
        justification: 'La altura del pico se relaciona con el número de fotones de esa energía registrados en un tiempo concreto; la posición del pico, en cambio, corresponde a la energía. (Guion, P5, §§5.1–5.2).'
    },
    {
        id: 'N_Ex_22_06', text: '¿En qué situación puede ser especialmente peligrosa la radiación alfa para una persona?',
        options: ['Si el material emisor se inhala o ingiere: las alfas penetran poco desde fuera, pero ionizan intensamente el tejido cercano.', 'Solo cuando atraviesa una pared gruesa antes de alcanzar la piel.', 'Nunca: las partículas alfa no interactúan con la materia biológica.'],
        correct_index: 0, matched_page: 3, source_file: 'Recopilación 2017–2023 · Examen 2022-2023',
        justification: 'Las partículas alfa tienen poco poder de penetración, pero producen una ionización intensa. Por ello el riesgo aumenta si una fuente alfa entra en el cuerpo por inhalación o ingestión. (Guion, introducción, §I.1).'
    },
    {
        id: 'N_Ex_22_07', text: '¿Por qué se trata con NaOH el CR39 irradiado?',
        options: ['Para revelar las trazas: el agente corrosivo elimina más rápido las zonas alteradas por la radiación.', 'Para convertir las partículas alfa en fotones gamma antes de observar el plástico.', 'Para quitar toda la superficie del plástico a una velocidad uniforme.'],
        correct_index: 0, matched_page: 3, source_file: 'Recopilación 2017–2023 · Examen 2022-2023',
        justification: 'Las alfas rompen enlaces en el plástico. El NaOH ataca más deprisa la zona dañada que la no dañada, lo que hace crecer y revelar las trazas. (Guion, P1, §1.1.1).'
    },
    {
        id: 'N_Ex_18_01', text: '¿Cómo se hacen visibles y se miden las trazas de las alfas del 241Am en un detector CR39?',
        options: ['Las alfas dejan zonas dañadas; el NaOH las revela y el microscopio permite observar y medir las trazas.', 'El CR39 convierte cada fotón gamma en una chispa que se mide con un osciloscopio.', 'Se mide la masa del plástico antes y después de cada desintegración.'],
        correct_index: 0, matched_page: 4, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2018',
        justification: 'El paso de las alfas daña el CR39. Tras el ataque químico selectivo con NaOH, las trazas ensanchadas se observan y miden con un microscopio. (Guion, P1, §1.1.1).'
    },
    {
        id: 'N_Ex_18_03', text: 'En la práctica del minigenerador 137Cs–137mBa, ¿qué radiación cuenta el detector Geiger para seguir la desintegración del 137mBa?',
        options: ['Fotones gamma de 0,662 MeV emitidos por el 137mBa.', 'Partículas alfa emitidas por el 137Cs.', 'Neutrones liberados cuando el bario alcanza su estado fundamental.'],
        correct_index: 0, matched_page: 4, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2018',
        justification: 'El 137mBa se desexcita al 137Ba fundamental emitiendo un fotón gamma de 0,662 MeV, que se registra con el detector Geiger. (Guion, P3, §3.1.1).'
    },
    {
        id: 'N_Ex_18_04', text: '¿Cómo se determina el alcance máximo de las partículas beta del 36Cl en aluminio?',
        options: ['Se mide el contaje al aumentar el espesor másico de aluminio y se localiza dónde la señal de la fuente cae hasta el fondo.', 'Se mide la longitud de las trazas alfa en CR39 y se convierte directamente a milímetros de aluminio.', 'Se aumenta la tensión del detector hasta que desaparecen los impulsos beta.'],
        correct_index: 0, matched_page: 4, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2018',
        justification: 'Se interponen espesores crecientes de aluminio y se representa el contaje frente al espesor másico. El alcance se identifica cerca del punto donde la señal queda reducida al nivel del fondo. (Guion, P4, §4.9).'
    },
    {
        id: 'N_Ex_18_05', text: '¿Qué tres fotopicos puede producir en un detector NaI(Tl) un fotón gamma de 3 MeV si ocurre producción de pares?',
        options: ['El fotopico de 3 MeV, el pico de escape simple a 2,489 MeV y el de escape doble a 1,978 MeV.', 'Tres picos a 0,511 MeV, 1,022 MeV y 3 MeV, sin relación con el escape de fotones.', 'Un único fotopico de 1,5 MeV, porque el detector divide siempre la energía por dos.'],
        correct_index: 0, matched_page: 4, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2018',
        justification: 'Un fotón de 3 MeV puede crear un par electrón-positrón. Si ambos fotones de aniquilación quedan en el cristal aparece el fotopico total; si escapa uno se resta 0,511 MeV y si escapan los dos se restan 1,022 MeV. (Guion, P5, §5.6).'
    },
    {
        id: 'N_Ex_18_06', text: 'Además del cristal de NaI(Tl), ¿qué componente del detector de centelleo convierte la luz en un impulso eléctrico?',
        options: ['El tubo fotomultiplicador: su fotocátodo produce fotoelectrones y sus etapas los multiplican.', 'Una cámara de ionización abierta que mide la humedad del cristal.', 'Un contador Geiger que transforma directamente cada fotón visible en una partícula alfa.'],
        correct_index: 0, matched_page: 4, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2018',
        justification: 'El detector NaI(Tl) incluye un tubo fotomultiplicador. El fotocátodo convierte la luz de centelleo en electrones y el PMT amplifica la carga para formar el impulso. (Guion, P5, introducción).'
    },
    {
        id: 'N_Ex_18_07', text: '¿Cómo produce un impulso eléctrico el cristal semiconductor CZT al absorber radiación gamma?',
        options: ['La radiación crea pares electrón-hueco; el campo eléctrico los desplaza a los electrodos y la carga inducida forma el impulso.', 'El cristal se funde localmente y la expansión térmica mueve un espejo.', 'El fotón gamma produce una descarga Geiger en el gas que rodea el cristal.'],
        correct_index: 0, matched_page: 4, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2018',
        justification: 'La energía depositada en el CZT crea portadores de carga. La alta tensión los recoge en los electrodos y la carga inducida genera un impulso cuya amplitud se relaciona con la energía depositada. (Guion, P6, introducción).'
    },
    {
        id: 'N_Ex_18_08', text: '¿Cómo se expresa la resolución energética de un detector gamma a partir de un fotopico?',
        options: ['Como la anchura a media altura del pico dividida por la energía del centro del pico.', 'Como el número total de fotones dividido por la semivida de la fuente.', 'Como la distancia entre el pico Compton y el fondo, en milímetros.'],
        correct_index: 0, matched_page: 4, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2018',
        justification: 'La resolución energética se calcula como la anchura del fotopico a media altura (FWHM) dividida por la energía central del pico, normalmente expresada en porcentaje. (Guion, P5, §5.2 y P6, §6.3).'
    },
    {
        id: 'N_Ex_17_01', text: '¿Qué representa la luz emitida por un dosímetro termoluminiscente al calentarlo después de irradiarlo?',
        options: ['La liberación de electrones atrapados por defectos del cristal, que emiten luz al volver a estados de menor energía.', 'La reflexión directa de los rayos gamma que siguen dentro del cristal.', 'La fusión del dosímetro por el calor del lector.'],
        correct_index: 0, matched_page: 5, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2017',
        justification: 'La radiación deja electrones en trampas asociadas a defectos del cristal. Al calentarlo, algunos escapan y emiten luz al pasar a estados de menor energía. (Guion, P1, §1.2).'
    },
    {
        id: 'N_Ex_17_03', text: '¿Cuándo se alcanza el equilibrio secular entre un núcleo padre y su núcleo hijo radiactivo?',
        options: ['Cuando la vida media del padre es mucho mayor que la del hijo y, tras varias vidas medias del hijo, ambas actividades se igualan.', 'Cuando el núcleo hijo deja de desintegrarse y el padre sigue activo.', 'Inmediatamente después de separar químicamente al hijo del padre.'],
        correct_index: 0, matched_page: 5, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2017',
        justification: 'Si el padre decae mucho más lentamente, el hijo se acumula hasta que su actividad iguala la del padre. La separación química rompe temporalmente ese equilibrio. (Guion, P3, §3.1 y P6, §6.5.2).'
    },
    {
        id: 'N_Ex_17_04', text: '¿Por qué los impulsos del detector Geiger son casi independientes de la ionización primaria de la radiación?',
        options: ['La descarga Geiger se extiende hasta que la carga espacial apantalla el campo y extingue la avalancha, perdiéndose la proporcionalidad con la ionización inicial.', 'El tubo mide con exactitud la energía y ajusta automáticamente todos los impulsos al mismo valor.', 'La radiación no ioniza el gas; los impulsos los genera únicamente la fuente de alimentación.'],
        correct_index: 0, matched_page: 5, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2017',
        justification: 'En la región Geiger, la multiplicación continúa hasta apantallar el campo eléctrico. El tamaño final del impulso deja de ser proporcional al número inicial de pares de iones. (Guion, P4, §4.2 y §4.7).'
    },
    {
        id: 'N_Ex_17_05', text: 'En un detector de centelleo, ¿qué relación se busca entre la amplitud del impulso y la radiación gamma?',
        options: ['Que sea proporcional a la energía que el fotón gamma deposita en el cristal.', 'Que sea proporcional a la masa del detector, sin depender de la energía depositada.', 'Que permanezca siempre constante para cualquier radiación y cualquier tensión.'],
        correct_index: 0, matched_page: 5, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2017',
        justification: 'La luz producida en el cristal, el número de fotoelectrones y la carga amplificada por el PMT dependen de la energía depositada. Por ello la amplitud del impulso permite construir el espectro energético. (Guion, P5, introducción).'
    },
    {
        id: 'N_Ex_17_06', text: 'En el espectro de un fotón gamma de 3 MeV, ¿qué origina los picos de escape simple y doble?',
        options: ['La producción de un par electrón-positrón y la fuga de uno o de los dos fotones de 0,511 MeV de la aniquilación.', 'La fuga de electrones del fotocátodo del PMT antes de que el gamma entre en el cristal.', 'La dispersión elástica del fotón en la lámina de oro de Rutherford.'],
        correct_index: 0, matched_page: 5, source_file: 'Recopilación 2017–2023 · Examen TEF IV 2017',
        justification: 'Por encima de 1,022 MeV puede producirse un par electrón-positrón. El positrón se aniquila y genera dos fotones de 0,511 MeV; si uno escapa aparece escape simple y si escapan ambos, escape doble. (Guion, P5, §5.6).'
    },
    {
        id: 'N_Ex_N_01', text: '¿En qué momento se libera la señal luminosa de un dosímetro termoluminiscente irradiado?',
        options: ['Al calentarlo, cuando los electrones atrapados reciben energía suficiente para escapar de sus trampas.', 'Durante la irradiación, como luz reflejada directamente por la fuente.', 'Al disolver el cristal, cuando sus átomos emiten partículas alfa.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P1, §1.2',
        justification: 'La irradiación deja electrones atrapados en defectos del cristal. El calentamiento permite que algunos escapen y, al volver a estados de menor energía, emitan luz.'
    },
    {
        id: 'N_Ex_N_02', text: '¿Por qué se observa el CR39 al microscopio después de irradiarlo y revelarlo químicamente?',
        options: ['Porque el ataque selectivo ensancha las zonas dañadas por las alfas y hace visibles sus trazas.', 'Porque el NaOH vuelve radiactivo todo el plástico y produce destellos.', 'Porque el calor convierte las trazas en burbujas independientes de la radiación.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P1, §1.1.1',
        justification: 'Las alfas alteran las cadenas moleculares del CR39. El NaOH ataca esas zonas más deprisa que el plástico intacto y amplía la traza hasta que puede observarse.'
    },
    {
        id: 'N_Ex_N_03', text: 'Tras separar químicamente el 137mBa del generador de 137Cs para medirlo, ¿qué tendencia se espera en sus cuentas gamma?',
        options: ['Disminuyen aproximadamente de forma exponencial porque el bario metastable separado se desintegra.', 'Aumentan sin límite porque el bario se transforma íntegramente en cesio en cada segundo.', 'Permanecen constantes porque el 137mBa no es radiactivo.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P3, §3.1',
        justification: 'La muestra de 137mBa separada del generador decae sin que se reponga el material padre. Por eso las cuentas de sus fotones gamma disminuyen aproximadamente de forma exponencial, una vez corregidas por el fondo.'
    },
    {
        id: 'N_Ex_N_04', text: 'En una gráfica de ln(Δ) frente al tiempo para medir la desintegración del 137mBa, ¿qué representa la pendiente?',
        options: ['El negativo de la constante de desintegración, m = −λ.', 'La actividad inicial, expresada en cuentas por segundo.', 'La semivida directamente, con unidades de segundos.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P3, §3.1.8',
        justification: 'Al corregir las cuentas por el fondo, Δ es proporcional a la actividad y sigue una exponencial. Al tomar logaritmos, ln(Δ) = constante − λt, así que la pendiente es −λ y T₁/₂ = −ln(2)/m.'
    },
    {
        id: 'N_Ex_N_05', text: 'Al calcular la semivida del torón con la corriente de la cámara de ionización, ¿qué conviene hacer con la señal de fondo?',
        options: ['Medirla y restarla a cada lectura antes de ajustar el decaimiento exponencial.', 'Sumarla a cada lectura para aumentar la pendiente de la recta.', 'Ignorarla aunque sea comparable con la corriente medida al final.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P3, §3.2.4',
        justification: 'La corriente de fondo no decae con el torón. Si no se resta, domina las lecturas tardías y aplana la recta de ln(I) frente al tiempo, sesgando la semivida.'
    },
    {
        id: 'N_Ex_N_06', text: '¿Por qué se usa una lámina de aluminio de espesor creciente al determinar el alcance de las partículas beta?',
        options: ['Para seguir cómo disminuye el contaje beta hasta aproximarse al fondo y localizar el alcance máximo.', 'Para aumentar la energía de las betas mediante aceleración electrostática.', 'Para convertir el espectro continuo beta en un único fotopico gamma.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P4, §4.9',
        justification: 'Las láminas absorben progresivamente las betas. Al representar la tasa de cuentas frente al espesor másico, el punto de transición entre el decaimiento y la señal de fondo permite estimar el alcance máximo.'
    },
    {
        id: 'N_Ex_N_07', text: '¿Por qué las partículas beta de una misma fuente no tienen todas la misma energía cinética?',
        options: ['Porque la energía disponible se reparte de forma variable entre la beta y el neutrino o antineutrino.', 'Porque cada beta atraviesa un espesor distinto de aluminio dentro del núcleo.', 'Porque el detector Geiger asigna al azar una energía a cada desintegración.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P4, §4.4',
        justification: 'En la desintegración beta, la energía disponible se comparte entre la partícula beta y el neutrino o antineutrino. Por eso se obtiene un espectro continuo con una energía máxima característica.'
    },
    {
        id: 'N_Ex_N_08', text: 'En el ajuste del alcance beta, ¿qué indica que las cuentas detrás de una lámina de aluminio son ya compatibles con el fondo?',
        options: ['Que la mayoría de las partículas beta ya no alcanza el detector a través de ese espesor.', 'Que el aluminio ha empezado a emitir la misma radiación beta que la fuente.', 'Que la actividad de la fuente se ha vuelto exactamente nula.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P4, §4.9',
        justification: 'Cuando la señal con la fuente y el absorbente se aproxima a la medida de fondo, el contaje adicional debido a la fuente es pequeño. Esa región ayuda a localizar el alcance máximo.'
    },
    {
        id: 'N_Ex_N_09', text: 'En un espectro gamma de NaI(Tl), ¿qué diferencia básica hay entre el fotopico y el continuo Compton?',
        options: ['En el fotopico se deposita prácticamente toda la energía del gamma; en el continuo Compton solo una parte.', 'El fotopico cuenta alfas y el continuo Compton cuenta neutrones.', 'El fotopico mide el tiempo de vuelo y el continuo, la semivida.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P5, §5.1',
        justification: 'El fotopico corresponde a sucesos en los que el detector absorbe toda la energía del fotón. En sucesos Compton, el fotón dispersado puede escapar y deja solo parte de su energía en el cristal.'
    },
    {
        id: 'N_Ex_N_10', text: '¿Qué condición puede producir un pico suma al medir el 60Co con un detector de centelleo?',
        options: ['Que los dos fotones gamma emitidos en cascada depositen su energía en el detector durante el mismo suceso registrado.', 'Que dos partículas beta atraviesen el detector en días distintos.', 'Que el detector sume el fondo medido antes y después de retirar la fuente.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P5, §5.4',
        justification: 'Los dos fotones del 60Co se emiten casi simultáneamente. Si ambos se absorben dentro del mismo intervalo de integración, sus energías se registran como un único impulso suma.'
    },
    {
        id: 'N_Ex_N_11', text: 'Dos detectores miden el mismo fotopico, pero uno tiene una anchura a media altura menor. ¿Qué se concluye?',
        options: ['El detector con el pico más estrecho tiene mejor resolución energética y distingue mejor energías próximas.', 'El detector con el pico más estrecho tiene necesariamente menor eficiencia para todas las energías.', 'Ambos tienen la misma resolución porque el centro del pico coincide.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P5, §5.2 y P6, §6.3',
        justification: 'La resolución energética es la anchura a media altura dividida por la energía del fotopico. A menor valor, más estrecho es el pico y mejor se separan energías cercanas.'
    },
    {
        id: 'N_Ex_N_12', text: '¿Para qué se miden fuentes patrón de energías gamma conocidas antes de analizar una muestra con el CZT?',
        options: ['Para relacionar los canales del analizador con la energía y poder asignar energía a los picos observados.', 'Para hacer que el cristal produzca más pares electrón-hueco en todas las medidas posteriores.', 'Para eliminar la radiación de fondo sin medirla.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.2',
        justification: 'La calibración determina la correspondencia entre canal y energía a partir de fotopicos conocidos. Con esa relación se pueden identificar las energías de los picos de una muestra.'
    },
    {
        id: 'N_Ex_N_13', text: 'En una medida del 60Co con CZT, ¿por qué puede ser más alto el fotopico de 1,17 MeV que el de 1,33 MeV aunque se emitan en igual cantidad?',
        options: ['Porque la probabilidad de interacción fotoeléctrica en el detector disminuye al aumentar la energía del fotón.', 'Porque el fotón de 1,17 MeV se emite el doble de veces en cada desintegración.', 'Porque el canal de mayor energía siempre se representa con menos cuentas por definición.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.2',
        justification: 'La intensidad de un fotopico depende tanto del número de fotones emitidos como de la probabilidad de que el detector absorba toda su energía. El guion explica la diferencia entre estos picos por la menor probabilidad de interacción fotoeléctrica a mayor energía.'
    },
    {
        id: 'N_Ex_N_14', text: 'Al interponer plomo entre una fuente de 137Cs y el CZT, ¿de dónde procede el pico de rayos X característicos del plomo?',
        options: ['De una vacante en una capa interna del átomo de plomo, rellenada por un electrón de una capa superior tras absorber un gamma.', 'De la desintegración beta del plomo creada por el detector.', 'De la conversión de los rayos X del CZT en fotones de 662 keV.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.4',
        justification: 'El fotón gamma puede expulsar un electrón de una capa interna mediante efecto fotoeléctrico. Al rellenarse la vacante se emiten rayos X característicos del elemento; para el plomo el guion indica un pico de unos 74 keV.'
    },
    {
        id: 'N_Ex_N_15', text: '¿Por qué el CZT puede funcionar a temperatura ambiente mientras que el germanio suele enfriarse durante la espectrometría?',
        options: ['El germanio tiene una banda prohibida menor y necesita reducir la generación térmica de portadores; el CZT puede trabajar a temperatura ambiente.', 'El CZT no produce portadores de carga y por eso no necesita refrigeración.', 'El germanio solo detecta partículas alfa y el CZT únicamente neutrones.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.1',
        justification: 'El germanio tiene una banda prohibida menor, por lo que la generación térmica de portadores puede producir ruido; se enfría, habitualmente con nitrógeno líquido. El CZT trabaja a temperatura ambiente.'
    },
    {
        id: 'N_Ex_N_16', text: 'Las fuentes gamma usadas para calibrar el CZT pueden emitir betas en sus desintegraciones. ¿Por qué se detectan principalmente fotones gamma fuera de la fuente?',
        options: ['Porque las fuentes están encapsuladas o blindadas para absorber las partículas beta.', 'Porque los fotones gamma transforman todas las betas en electrones de conducción.', 'Porque el CZT solo acepta señales de gamma por una selección automática de partículas.'],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.2',
        justification: 'Las fuentes patrón de rayos gamma están blindadas frente a las partículas beta, que quedan absorbidas antes de salir de la fuente; los fotones gamma sí llegan al detector.'
    }
];
