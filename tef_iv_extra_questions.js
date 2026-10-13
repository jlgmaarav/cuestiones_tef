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
        options: ["La luz se produce durante la irradiación; el calentamiento solo facilita la lectura de cargas libres, no de trampas.","Al calentar, aumenta la liberación de portadores atrapados; su recombinación luminiscente genera luz y el pico refleja el balance entre liberación y población restante.","El máximo aparece cuando el cristal alcanza su mayor temperatura, porque la señal es radiación térmica del material.","La curva reproduce la actividad de la fuente que irradió el dosímetro, de modo que el pico lo fija su semivida."],
        correct_index: 1, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P1, §1.2',
        justification: 'La irradiación deja electrones atrapados en defectos del cristal. El calentamiento permite que algunos escapen y, al volver a estados de menor energía, emitan luz.'
    },
    {
        id: 'N_Ex_N_02', text: '¿Por qué se observa el CR39 al microscopio después de irradiarlo y revelarlo químicamente?',
        options: ["El grabado elimina una capa uniforme; las trazas aparecen por variaciones de espesor inicial.","Las alfas dejan núcleos de helio visibles en el plástico, y el NaOH los disuelve.","La radiación vuelve fluorescente el CR39 y el grabado aumenta el brillo de las zonas irradiadas.","Las alfas producen daño molecular que el NaOH ataca más deprisa que el material intacto, ensanchando las trazas latentes hasta hacerlas observables."],
        correct_index: 3, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P1, §1.1.1',
        justification: 'Las alfas alteran las cadenas moleculares del CR39. El NaOH ataca esas zonas más deprisa que el plástico intacto y amplía la traza hasta que puede observarse.'
    },
    {
        id: 'N_Ex_N_03', text: 'Tras separar químicamente el 137mBa del generador de 137Cs para medirlo, ¿qué tendencia se espera en sus cuentas gamma?',
        options: ["Tras separar el bario, las cuentas netas por intervalos iguales decrecen aproximadamente de forma exponencial; se corrige el fondo para compararlas con la actividad.","Las cuentas brutas disminuyen linealmente porque cada intervalo elimina la misma cantidad de bario.","Las cuentas netas se mantienen constantes mientras quede ¹³⁷Cs en el generador, que repone inmediatamente todo el bario separado.","El número acumulado de cuentas sigue una exponencial decreciente incluso con intervalos distintos y sin sustraer el fondo."],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P3, §3.1',
        justification: 'La muestra de 137mBa separada del generador decae sin que se reponga el material padre. Por eso las cuentas de sus fotones gamma disminuyen aproximadamente de forma exponencial, una vez corregidas por el fondo.'
    },
    {
        id: 'N_Ex_N_04', text: 'En una gráfica de ln(Δ) frente al tiempo para medir la desintegración del 137mBa, ¿qué representa la pendiente?',
        options: ["La pendiente es +λ porque cae la actividad, y la semivida es ln 2/m.","La pendiente representa el fondo constante; λ se obtiene del valor de Δ inicial.","Si Δ es proporcional a actividad neta, ln(Δ)=constante−λt: la pendiente es −λ y T₁/₂=−ln2/m.","La pendiente es −T₁/₂; solo puede usarse cuando Δ son cuentas acumuladas."],
        correct_index: 2, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P3, §3.1.8',
        justification: 'Al corregir las cuentas por el fondo, Δ es proporcional a la actividad y sigue una exponencial. Al tomar logaritmos, ln(Δ) = constante − λt, así que la pendiente es −λ y T₁/₂ = −ln(2)/m.'
    },
    {
        id: 'N_Ex_N_05', text: 'Al calcular la semivida del torón con la corriente de la cámara de ionización, ¿qué conviene hacer con la señal de fondo?',
        options: ["Se suma la corriente de fondo para aislar el torón; el fondo aumenta la pendiente.","Se mide el fondo por separado y se resta antes del ajuste; si se omite, domina a tiempos largos, aplana la pendiente y suele sobreestimar T₁/₂.","Se resta el fondo solo de la primera lectura, porque luego su contribución relativa es constante.","Se incluye el fondo como punto adicional al final de ln(I) para que el ajuste lo compense."],
        correct_index: 1, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P3, §3.2.4',
        justification: 'La corriente de fondo no decae con el torón. Si no se resta, domina las lecturas tardías y aplana la recta de ln(I) frente al tiempo, sesgando la semivida.'
    },
    {
        id: 'N_Ex_N_06', text: '¿Por qué se usa una lámina de aluminio de espesor creciente al determinar el alcance de las partículas beta?',
        options: ["Se aumenta el espesor geométrico y se define el alcance cuando el contaje bruto llega exactamente a cero.","Una lámina separa betas por energía; cada aumento desplaza un fotopico.","Se registra el contaje neto frente al espesor másico; el alcance se estima cuando la contribución de la fuente deja de distinguirse del fondo.","Se calcula el alcance con una sola medida restando el fondo, sin variar el espesor."],
        correct_index: 2, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P4, §4.9',
        justification: 'Las láminas absorben progresivamente las betas. Al representar la tasa de cuentas frente al espesor másico, el punto de transición entre el decaimiento y la señal de fondo permite estimar el alcance máximo.'
    },
    {
        id: 'N_Ex_N_07', text: '¿Por qué las partículas beta de una misma fuente no tienen todas la misma energía cinética?',
        options: ["La energía se reparte de forma variable entre la beta, el neutrino o antineutrino y el retroceso nuclear; así surge un continuo hasta una energía máxima.","Cada beta sale con la misma energía, pero la resolución del detector produce el continuo observado.","El continuo aparece porque el número de electrones por desintegración varía, aunque cada electrón tenga energía fija.","La energía solo se comparte entre la beta y el núcleo hijo; la dirección de retroceso crea el continuo."],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P4, §4.4',
        justification: 'En la desintegración beta, la energía disponible se comparte entre la partícula beta y el neutrino o antineutrino. Por eso se obtiene un espectro continuo con una energía máxima característica.'
    },
    {
        id: 'N_Ex_N_08', text: 'En el ajuste del alcance beta, ¿qué indica que las cuentas detrás de una lámina de aluminio son ya compatibles con el fondo?',
        options: ["Que la fuente ya no se desintegra: si coincide con el fondo, su actividad física es cero.","Que el aluminio ha eliminado también los gammas y no llega radiación al detector.","Que la señal de fuente iguala el fondo con independencia del espesor y del tiempo de medida.","Que, con esa medida y su incertidumbre, la señal adicional no se distingue del fondo; no demuestra actividad exactamente nula."],
        correct_index: 3, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P4, §4.9',
        justification: 'Cuando la señal con la fuente y el absorbente se aproxima a la medida de fondo, el contaje adicional debido a la fuente es pequeño. Esa región ayuda a localizar el alcance máximo.'
    },
    {
        id: 'N_Ex_N_09', text: 'En un espectro gamma de NaI(Tl), ¿qué diferencia básica hay entre el fotopico y el continuo Compton?',
        options: ["El fotopico reúne sucesos donde el gamma transfiere solo parte de su energía; el continuo exige absorción total.","El fotopico corresponde a depósito prácticamente total; el continuo Compton aparece si el fotón dispersado escapa tras ceder parte de su energía.","El fotopico procede de electrones Compton y el continuo de fotones absorbidos fotoeléctricamente.","El borde Compton marca el máximo número de fotones que llegan, mientras el fotopico mide el fondo."],
        correct_index: 1, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P5, §5.1',
        justification: 'El fotopico corresponde a sucesos en los que el detector absorbe toda la energía del fotón. En sucesos Compton, el fotón dispersado puede escapar y deja solo parte de su energía en el cristal.'
    },
    {
        id: 'N_Ex_N_10', text: '¿Qué condición puede producir un pico suma al medir el 60Co con un detector de centelleo?',
        options: ["Se suman amplitudes de dos fotones independientes aunque lleguen muy separados en el tiempo.","Un fotón de la cascada se dispersa y el otro genera un pico a su energía; la suma es superposición de ambos en el espectro.","Si los dos gammas casi simultáneos depositan energía dentro del tiempo de integración, se registra un impulso cercano a la suma de energías.","El pico suma es una transición nuclear única emitida directamente con energía igual a ambas transiciones sumadas."],
        correct_index: 2, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P5, §5.4',
        justification: 'Los dos fotones del 60Co se emiten casi simultáneamente. Si ambos se absorben dentro del mismo intervalo de integración, sus energías se registran como un único impulso suma.'
    },
    {
        id: 'N_Ex_N_11', text: 'Dos detectores miden el mismo fotopico, pero uno tiene una anchura a media altura menor. ¿Qué se concluye?',
        options: ["Un FWHM/Ep menor indica un pico relativamente más estrecho y mejor resolución, pero no implica mayor eficiencia.","Un FWHM/Ep mayor indica mejor resolución porque cubre más energías alrededor del fotopico.","La anchura mide eficiencia: si es menor, necesariamente se detectan más fotones.","Con igual energía central, dos picos tienen la misma resolución aunque sus anchuras difieran."],
        correct_index: 0, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P5, §5.2 y P6, §6.3',
        justification: 'La resolución energética es la anchura a media altura dividida por la energía del fotopico. A menor valor, más estrecho es el pico y mejor se separan energías cercanas.'
    },
    {
        id: 'N_Ex_N_12', text: '¿Para qué se miden fuentes patrón de energías gamma conocidas antes de analizar una muestra con el CZT?',
        options: ["Para medir eficiencia absoluta; la posición de picos conocidos da directamente el número emitido.","Para determinar el fondo; la intensidad relativa de las fuentes fija el cero de energía.","Para medir el umbral de creación de pares y la banda prohibida del CZT.","Para calibrar canal frente a energía con fotopicos conocidos, normalmente E=aC+b; luego se asigna energía a picos de muestra."],
        correct_index: 3, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.2',
        justification: 'La calibración determina la correspondencia entre canal y energía a partir de fotopicos conocidos. Con esa relación se pueden identificar las energías de los picos de una muestra.'
    },
    {
        id: 'N_Ex_N_13', text: 'En una medida del 60Co con CZT, ¿por qué puede ser más alto el fotopico de 1,17 MeV que el de 1,33 MeV aunque se emitan en igual cantidad?',
        options: ["El fotón de 1,17 MeV siempre deposita más energía que el de 1,33 MeV, por lo que su pico es necesariamente más alto.","La altura puede depender de la probabilidad de absorción total y del ancho del pico; el guion relaciona la diferencia con mayor probabilidad fotoeléctrica a menor energía, pero la comparación rigurosa usa áreas y eficiencia.","El pico de 1,17 MeV es la suma de ambas líneas y el de 1,33 MeV una línea de escape.","La altura depende solo de la energía gamma, no de eficiencia, geometría, fondo ni resolución."],
        correct_index: 1, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.2',
        justification: 'La intensidad de un fotopico depende tanto del número de fotones emitidos como de la probabilidad de que el detector absorba toda su energía. El guion explica la diferencia entre estos picos por la menor probabilidad de interacción fotoeléctrica a mayor energía.'
    },
    {
        id: 'N_Ex_N_14', text: 'Al interponer plomo entre una fuente de 137Cs y el CZT, ¿de dónde procede el pico de rayos X característicos del plomo?',
        options: ["El plomo desplaza el gamma de ¹³⁷Cs a 74 keV por efecto Compton, independientemente de sus niveles electrónicos.","El cesio emite rayos X de plomo directamente, incluso sin plomo entre fuente y detector.","Un gamma puede expulsar un electrón de capa interna del plomo; al llenarse la vacante se emite un rayo X característico del elemento.","El CZT convierte cualquier gamma de 662 keV en una línea fija de 74 keV propia del detector."],
        correct_index: 2, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.4',
        justification: 'El fotón gamma puede expulsar un electrón de una capa interna mediante efecto fotoeléctrico. Al rellenarse la vacante se emiten rayos X característicos del elemento; para el plomo el guion indica un pico de unos 74 keV.'
    },
    {
        id: 'N_Ex_N_15', text: '¿Por qué el CZT puede funcionar a temperatura ambiente mientras que el germanio suele enfriarse durante la espectrometría?',
        options: ["El CZT tiene menor banda prohibida que el Ge, por eso produce menos portadores térmicos y requiere menos refrigeración.","El Ge no genera pares electrón-hueco a temperatura ambiente y el CZT detecta por centelleo.","Se enfría Ge para aumentar movilidad; en CZT la amplitud no depende de la energía depositada.","La banda prohibida del CZT es mayor, así que a temperatura ambiente produce menos portadores térmicos; el Ge, con banda menor, suele enfriarse."],
        correct_index: 3, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.1',
        justification: 'El germanio tiene una banda prohibida menor, por lo que la generación térmica de portadores puede producir ruido; se enfría, habitualmente con nitrógeno líquido. El CZT trabaja a temperatura ambiente.'
    },
    {
        id: 'N_Ex_N_16', text: 'Las fuentes gamma usadas para calibrar el CZT pueden emitir betas en sus desintegraciones. ¿Por qué se detectan principalmente fotones gamma fuera de la fuente?',
        options: ["Las betas se convierten en gammas en el encapsulado, por lo que ambas llegan con igual probabilidad.","Las betas son más penetrantes, pero el CZT solo registra fotones por estar polarizado.","La encapsulación absorbe buena parte de las betas, menos penetrantes, mientras una fracción mayor de gammas puede atravesarla y alcanzar el detector.","El CZT discrimina automáticamente betas por su masa, aunque lleguen sin atenuación."],
        correct_index: 2, matched_page: '', source_file: 'Nuevas · Guiones de prácticas', source_reference: 'P6, §6.2',
        justification: 'Las fuentes patrón de rayos gamma están blindadas frente a las partículas beta, que quedan absorbidas antes de salir de la fuente; los fotones gamma sí llegan al detector.'
    },
    {
        "id": "N_Ex_N_17",
        "text": "¿Qué comparación entre un Geiger, un NaI(Tl) y un CZT es correcta para radiación gamma?",
        "options": [
            "El Geiger cuenta descargas sin amplitud espectrométrica fiable; NaI(Tl) convierte energía en luz y CZT en carga, permitiendo espectros.",
            "El Geiger da el espectro por amplitud, mientras NaI(Tl) y CZT solo cuentan sucesos.",
            "Los tres generan impulsos proporcionales a energía, pero solo el Geiger requiere calibración.",
            "NaI(Tl) y CZT miden actividad únicamente; el Geiger distingue fotopico y continuo."
        ],
        "correct_index": 0,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de prácticas P4–P6; no pregunta literal",
        "justification": "La descarga Geiger no conserva proporcionalidad con la ionización inicial; el NaI(Tl) produce luz y el CZT carga que se relacionan con la energía depositada."
    },
    {
        "id": "N_Ex_N_18",
        "text": "Tienes cuentas acumuladas cada 30 s para ¹³⁷ᵐBa separado. ¿Qué análisis estima su semivida?",
        "options": [
            "Ajustar ln de las cuentas acumuladas brutas; la pendiente positiva da λ, sin medir fondo.",
            "Obtener las cuentas por intervalo, restar fondo y ajustar ln de la tasa neta frente al tiempo; m=−λ y T₁/₂=−ln2/m.",
            "Ajustar cuentas netas sin logaritmo; la pendiente lineal es la semivida.",
            "Comparar un intervalo inicial y uno final; su diferencia dividida por 30 s da λ."
        ],
        "correct_index": 1,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de exámenes y N_Ex_N_03–05; no literal",
        "justification": "Se restan el fondo y se ajusta el logaritmo de las cuentas netas por intervalos iguales. La pendiente es −λ; conviene excluir puntos tardíos dominados por el fondo."
    },
    {
        "id": "N_Ex_N_19",
        "text": "Un espectro desconocido tiene fotopico y continuo inferior. ¿Qué interpretación es correcta?",
        "options": [
            "El máximo de cuentas da la energía sin calibrar; el continuo corresponde a gammas emitidos con menor energía.",
            "Calibrar canales con fuentes patrón; el fotopico indica depósito total y el continuo Compton, depósito parcial si escapa el fotón dispersado.",
            "Calibrar solo con el borde Compton; el fotopico mide la energía cinética del electrón.",
            "La altura del pico da energía y actividad directamente, sin corregir fondo o eficiencia."
        ],
        "correct_index": 1,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de prácticas P5–P6; no literal",
        "justification": "La calibración convierte canales en energía. El fotopico corresponde a absorción total; Compton con escape deja un depósito menor. La actividad necesita correcciones adicionales."
    },
    {
        "id": "N_Ex_N_20",
        "text": "En un espectro de ⁶⁰Co aparecen picos de 1,17 y 1,33 MeV y otro próximo a 2,50 MeV. ¿Qué explica el tercero?",
        "options": [
            "Una transición única del núcleo emite directamente 2,50 MeV en cada desintegración.",
            "Los dos gammas casi simultáneos se absorben en el mismo detector dentro del tiempo de integración y forman un impulso suma.",
            "Es el borde Compton de 1,33 MeV desplazado por el pico de 1,17 MeV.",
            "Es necesariamente pile-up de fotones independientes, sin relación con la cascada."
        ],
        "correct_index": 1,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de examen 2021–22 y N_Ex_N_10; no literal",
        "justification": "Los gammas del ⁶⁰Co se emiten en cascada; si ambos se absorben dentro del intervalo de integración se registra su energía suma."
    },
    {
        "id": "N_Ex_N_21",
        "text": "¿Por qué pueden diferir los espectros gamma de pechblenda y uranio recién purificado?",
        "options": [
            "La purificación altera las energías de los niveles nucleares del uranio.",
            "La pechblenda puede conservar descendientes en equilibrio secular; la purificación los separa y cambia qué emisores contribuyen temporalmente.",
            "El uranio purificado deja de ser radiactivo hasta mezclarse de nuevo con pechblenda.",
            "El equilibrio secular iguala todas las energías gamma, por lo que los espectros deberían coincidir."
        ],
        "correct_index": 1,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de exámenes 2023, 2022–23 y 2021–22; no literal",
        "justification": "La purificación separa descendientes de la cadena. Estos pueden estar en equilibrio secular en la pechblenda y tardan en regenerarse en el uranio purificado."
    },
    {
        "id": "N_Ex_N_22",
        "text": "Un gamma de 3,00 MeV crea un par electrón-positrón. ¿Qué energías de escape pueden aparecer?",
        "options": [
            "2,489 MeV si escapa un fotón de aniquilación de 0,511 MeV y 1,978 MeV si escapan ambos; sin escape se registran 3,00 MeV.",
            "2,50 MeV si escapa uno y 2,00 MeV si escapan ambos, usando 0,50 MeV por fotón.",
            "1,978 MeV si escapa uno y 2,489 MeV si escapan ambos; cada escape aumenta el depósito.",
            "Solo aparece 3,00 MeV, pues los fotones de aniquilación siempre se absorben."
        ],
        "correct_index": 0,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de exámenes 2018 y 2017; no literal",
        "justification": "La aniquilación produce dos fotones de 0,511 MeV. Escapar uno resta 0,511 MeV; escapar ambos resta 1,022 MeV."
    },
    {
        "id": "N_Ex_N_23",
        "text": "¿Por qué la amplitud de un impulso Geiger no mide directamente la energía de cada partícula?",
        "options": [
            "La avalancha Geiger se desarrolla hasta que la carga espacial apantalla el campo y se pierde proporcionalidad con la ionización inicial.",
            "El Geiger no detecta ionización, sino la carga de la fuente.",
            "Solo mide energía para gammas; un espectrómetro mide la tasa de emisión.",
            "El voltaje fija una energía distinta para cada impulso y el espectrómetro usa el tiempo entre pulsos."
        ],
        "correct_index": 0,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de exámenes 2017–18 y 2021–22; no literal",
        "justification": "En régimen Geiger la amplitud queda gobernada por el desarrollo y extinción de la avalancha, no por la ionización primaria."
    },
    {
        "id": "N_Ex_N_24",
        "text": "¿Qué medidas distinguen mejor la resolución energética de la eficiencia de dos detectores?",
        "options": [
            "La altura máxima basta: menos cuentas implican peor resolución.",
            "FWHM/Ep caracteriza resolución; la fracción de sucesos detectados caracteriza eficiencia, controlando geometría y energía.",
            "La eficiencia se obtiene del ancho y la resolución del área neta.",
            "Un mismo canal central garantiza igual resolución y eficiencia."
        ],
        "correct_index": 1,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de N_Ex_N_11–13 y Guion P6; no literal",
        "justification": "FWHM/Ep cuantifica la resolución; eficiencia y resolución son magnitudes distintas y no se deducen una de otra."
    },
    {
        "id": "N_Ex_N_25",
        "text": "Un fotopico parece más alto en una fuente. ¿Qué comprobar antes de afirmar que emite más fotones?",
        "options": [
            "Comparar solo alturas: la calibración elimina geometría y eficiencia.",
            "Comparar áreas netas con igual tiempo y geometría, restar el fondo y considerar eficiencia dependiente de energía, autoabsorción y encapsulado.",
            "Comparar canales centrales: mayor energía implica más fotones.",
            "Usar la altura del continuo Compton como actividad sin normalizar el tiempo."
        ],
        "correct_index": 1,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis de exámenes 2023/2022–23 y Guiones P5–P6; no literal",
        "justification": "La altura también depende del ancho del pico. La comparación requiere áreas netas y condiciones controladas, además de correcciones de fondo y eficiencia."
    },
    {
        "id": "N_Ex_N_26",
        "text": "¿En qué se diferencian las señales de CR39 y de un dosímetro termoluminiscente?",
        "options": [
            "CR39 almacena cargas que se leen al calentarlo; el termoluminiscente revela daños con NaOH.",
            "Ambos generan impulsos proporcionales instantáneos, pero CR39 requiere fotomultiplicador.",
            "CR39 conserva daño localizado que un grabado revela como trazas; el termoluminiscente almacena portadores y emite luz al calentarlo.",
            "CR39 detecta principalmente gamma y el termoluminiscente solo neutrones."
        ],
        "correct_index": 2,
        "matched_page": "Propuesta propia",
        "source_file": "Propuesta propia · no oficial",
        "source_reference": "Síntesis propia de P1; no literal",
        "justification": "El CR39 revela químicamente el daño de las alfas; el termoluminiscente almacena carga en trampas y se lee por la luz al calentarlo."
    },
    {
        "id": "N_Ex_N_27",
        "text": "¿Qué diferencia a los rayos X de los rayos gamma si sus energías pueden solaparse?",
        "options": [
            "Los gamma siempre superan 100 keV; por debajo se llaman rayos X.",
            "Los X suelen originarse en procesos electrónicos y los gamma en transiciones nucleares; el origen, no una frontera fija de energía, los distingue.",
            "Los rayos X son fotones y los gamma partículas masivas.",
            "Los gamma solo siguen a desintegración alfa y los X a beta."
        ],
        "correct_index": 1,
        "matched_page": "3–4",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.1, PDF pp. 3–4",
        "justification": "La diferencia es el origen: procesos electrónicos frente a transiciones nucleares. Los rangos de energía se solapan."
    },
    {
        "id": "N_Ex_N_28",
        "text": "¿Qué significa dN/dt=−λN en una muestra radiactiva?",
        "options": [
            "Cada núcleo tiene un instante fijo de desintegración y el total disminuye linealmente.",
            "La tasa es proporcional a N; la ley es estadística y no predice cuándo se desintegra un núcleo concreto.",
            "λ es la fracción que desaparece en cualquier intervalo sin importar su duración.",
            "La actividad es constante y la probabilidad de cada núcleo crece con su edad."
        ],
        "correct_index": 1,
        "matched_page": "4–5",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.2.1, PDF pp. 4–5",
        "justification": "La tasa macroscópica es λN y la ley integrada es exponencial. λ es la probabilidad por unidad de tiempo para cada núcleo."
    },
    {
        "id": "N_Ex_N_29",
        "text": "¿Qué orden cualitativo de penetración suele observarse para α, β y γ en materia?",
        "options": [
            "Alfas ionizan intensamente y suelen tener poco alcance; beta es intermedia y los gammas pueden atravesar más material sin interactuar.",
            "Los gammas siempre depositan más energía por longitud que las alfas.",
            "Las betas penetran menos que las alfas porque su carga es menor.",
            "Las tres recorren distancias parecidas si tienen la misma energía."
        ],
        "correct_index": 0,
        "matched_page": "3–8",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§§ I.1–I.3, PDF pp. 3–8",
        "justification": "En términos generales las alfas tienen gran poder ionizante y poco alcance, las betas un alcance intermedio y los fotones son más penetrantes; depende de material y energía."
    },
    {
        "id": "N_Ex_N_30",
        "text": "¿Por qué la desintegración beta produce un continuo de energías?",
        "options": [
            "El detector no resuelve una colección de energías beta monoenergéticas.",
            "La energía se reparte de manera variable entre beta, neutrino o antineutrino y retroceso nuclear.",
            "La beta pierde una cantidad aleatoria en aire aunque todas nazcan con igual energía.",
            "La constante λ varía entre núcleos de una misma muestra."
        ],
        "correct_index": 1,
        "matched_page": "6–7",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.2.4, PDF pp. 6–7",
        "justification": "El reparto variable de energía entre beta, neutrino/antineutrino y núcleo de retroceso produce un continuo con energía máxima."
    },
    {
        "id": "N_Ex_N_31",
        "text": "¿Qué suceso contribuye al fotopico de un detector gamma?",
        "options": [
            "Compton con escape del fotón tras transferir parte de su energía.",
            "Absorción fotoeléctrica cuyos productos secundarios depositan prácticamente toda la energía del gamma.",
            "Dispersión elástica que conserva dirección y energía.",
            "Absorción solo de la energía de ligadura, con escape del resto como gamma."
        ],
        "correct_index": 1,
        "matched_page": "10–11",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§§ I.3.2 e I.5, PDF pp. 10–11 y 15–16",
        "justification": "El fotopico aparece cuando se registra prácticamente toda la energía del fotón; un gamma Compton que escapa produce depósito parcial."
    },
    {
        "id": "N_Ex_N_32",
        "text": "¿Qué umbral energético requiere la creación de un par electrón-positrón cerca de un núcleo?",
        "options": [
            "Más de 511 keV, energía de reposo de una sola partícula.",
            "Al menos 1,022 MeV para ambas energías de reposo; el exceso puede ser cinético.",
            "Menos de 1,022 MeV si el electrón atómico absorbe el momento.",
            "Exactamente 1,022 MeV; por encima domina siempre Compton."
        ],
        "correct_index": 1,
        "matched_page": "10",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.3.2, PDF p. 10",
        "justification": "Se necesitan 2mₑc²=1,022 MeV. El campo del núcleo permite conservar el momento y el exceso puede convertirse en energía cinética."
    },
    {
        "id": "N_Ex_N_33",
        "text": "En I(x)=I₀e^(−μx), ¿qué representa μ?",
        "options": [
            "La fracción absorbida por unidad de masa, con unidades de área/masa.",
            "La probabilidad de interacción por longitud; μ tiene unidades de longitud inversa y μ/ρ es másico.",
            "La energía media depositada por fotón, en MeV.",
            "El número de fotones dispersados por área, independiente del material."
        ],
        "correct_index": 1,
        "matched_page": "11",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.3.2, PDF p. 11",
        "justification": "El coeficiente lineal tiene unidades inversas de longitud; al dividirlo por densidad se obtiene el coeficiente másico."
    },
    {
        "id": "N_Ex_N_34",
        "text": "¿Cómo se detecta un neutrón que no ioniza directamente?",
        "options": [
            "Midiendo su trayectoria eléctrica entre electrodos.",
            "Registrando partículas cargadas o fotones producidos en una reacción nuclear inducida por el neutrón.",
            "Aumentando la tensión hasta que el neutrón ionice el gas por interacción coulombiana.",
            "Midiendo calentamiento aunque no interaccione con núcleos."
        ],
        "correct_index": 1,
        "matched_page": "12",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.3.3, PDF p. 12",
        "justification": "El neutrón se detecta indirectamente mediante productos secundarios que sí ionizan, como protones, alfas o fotones."
    },
    {
        "id": "N_Ex_N_35",
        "text": "¿Cuál es la secuencia típica de señal en un detector NaI(Tl)?",
        "options": [
            "El cristal emite luz; el fotocátodo produce fotoelectrones; los dínodos los multiplican y se forma un impulso.",
            "El cristal recoge pares electrón-hueco; el fotocátodo calibra la energía y los dínodos recogen iones.",
            "El gamma crea una alfa y el fotomultiplicador mide su recorrido.",
            "La luz pasa a rayos X y luego a electrones recogidos en cámara de gas."
        ],
        "correct_index": 0,
        "matched_page": "13–15",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.4.1, PDF pp. 13–15",
        "justification": "El centelleador convierte energía en luz; el fotocátodo la convierte en fotoelectrones y los dínodos los multiplican."
    },
    {
        "id": "N_Ex_N_36",
        "text": "Con estadística de Poisson, ¿cómo varía la incertidumbre relativa de una medida con N cuentas?",
        "options": [
            "Como 1/√N; reducirla a la mitad requiere cerca de cuatro veces más cuentas.",
            "Como 1/N; duplicar cuentas reduce la incertidumbre a la mitad.",
            "Es constante, independiente del número de eventos.",
            "Como √N; una medida larga empeora la precisión relativa."
        ],
        "correct_index": 0,
        "matched_page": "16",
        "source_file": "Guiones de prácticas de Física Nuclear · introducción teórica",
        "source_reference": "§ I.4.2, PDF p. 16",
        "justification": "La desviación típica es √N, luego la incertidumbre relativa es 1/√N. Para reducirla a la mitad se requieren aproximadamente cuatro veces las cuentas."
    },
    {
        "id": "N_Ex_N_37",
        "text": "¿Qué actividad corresponde a 1 Bq y cómo se compara con el curio?",
        "options": [
            "Una desintegración por segundo; 1 Ci equivale a 3,7×10¹⁰ Bq.",
            "Una desintegración por minuto; 1 Ci equivale a 3,7×10¹⁰ Bq.",
            "Un núcleo; el curio mide energía total emitida.",
            "Una semivida; el curio mide probabilidad por hora."
        ],
        "correct_index": 0,
        "matched_page": "2",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Actividad radiactiva, PDF p. 2",
        "justification": "El becquerel corresponde a una desintegración por segundo; el curio equivale a 3,7×10¹⁰ desintegraciones por segundo."
    },
    {
        "id": "N_Ex_N_38",
        "text": "¿Qué tendencia da λ=Ae^(−B/√E) para emisores alfa comparables?",
        "options": [
            "Al aumentar E, λ disminuye porque el exponente se hace más negativo.",
            "Al aumentar E, el exponente se hace menos negativo y λ puede crecer mucho; disminuye la semivida.",
            "λ no depende de E, solo de la masa del núcleo hijo.",
            "λ crece linealmente con E y la semivida se reduce exactamente a la mitad al duplicarla."
        ],
        "correct_index": 1,
        "matched_page": "4–6",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Geiger–Nuttall, PDF pp. 4 y 6",
        "justification": "A mayor E, −B/√E es menos negativo. λ aumenta rápidamente y la semivida puede cambiar muchos órdenes de magnitud."
    },
    {
        "id": "N_Ex_N_39",
        "text": "¿Qué revelaron las grandes desviaciones de partículas alfa en el experimento de Rutherford?",
        "options": [
            "La carga positiva está distribuida uniformemente por el átomo.",
            "Las alfas chocan muchas veces con electrones ligeros y giran gradualmente.",
            "Algunos retrocesos requieren un centro pequeño, masivo y cargado positivamente: el núcleo.",
            "El átomo no tiene estructura y las desviaciones son ruido."
        ],
        "correct_index": 2,
        "matched_page": "6–8",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Dispersión de Rutherford, PDF pp. 6–8",
        "justification": "Las desviaciones grandes e infrecuentes se explican por la repulsión coulombiana de un centro nuclear compacto que concentra la carga positiva y la masa."
    },
    {
        "id": "N_Ex_N_40",
        "text": "¿Qué significa el punto de retroceso r₁=2,88Z/E fm para una alfa incidente?",
        "options": [
            "La distancia donde la energía cinética se convierte en potencial coulombiano y la partícula se detiene antes de retroceder.",
            "El radio nuclear, independiente de E.",
            "La distancia mínima permitida por túnel dentro del núcleo.",
            "El alcance medio de la alfa en aire."
        ],
        "correct_index": 0,
        "matched_page": "7–8",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Punto de retroceso, PDF pp. 7–8",
        "justification": "Clásicamente la alfa alcanza su máxima aproximación cuando su energía cinética inicial se convierte en energía potencial coulombiana."
    },
    {
        "id": "N_Ex_N_41",
        "text": "¿Cómo permite el efecto túnel emitir una alfa con energía inferior a la barrera coulombiana?",
        "options": [
            "La alfa adquiere energía térmica y supera clásicamente la barrera.",
            "La función de onda tiene probabilidad no nula de transmitirse por la región clásicamente prohibida; λ combina transmisión y frecuencia de intentos.",
            "La barrera desaparece al neutralizarse el núcleo hijo.",
            "Un gamma convierte la energía cinética en potencial y abre un canal clásico."
        ],
        "correct_index": 1,
        "matched_page": "8–9",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Gamow y efecto túnel, PDF pp. 8–9",
        "justification": "La emisión se explica por transmisión cuántica a través de la barrera; la probabilidad de transmisión multiplicada por la frecuencia de intentos determina λ."
    },
    {
        "id": "N_Ex_N_42",
        "text": "¿Qué vínculo conecta la cuantización de Bohr con las ondas de de Broglie?",
        "options": [
            "mvr=nℏ implica que un número entero de longitudes de onda cabe en la circunferencia orbital.",
            "La cuantización exige λ menor que r, sin relación con momento angular.",
            "Los radios permitidos corresponden a electrones en reposo.",
            "De Broglie hace estables todas las órbitas clásicas con momento angular continuo."
        ],
        "correct_index": 0,
        "matched_page": "10",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Bohr y de Broglie, PDF p. 10",
        "justification": "Con λ=h/mv y mvr=nℏ se obtiene 2πr=nλ, condición de onda estacionaria alrededor de la órbita."
    },
    {
        "id": "N_Ex_N_43",
        "text": "¿Qué representa un orbital s?",
        "options": [
            "Una órbita circular de Bohr con radio definido.",
            "Una trayectoria elíptica que pasa por el núcleo.",
            "Un estado con l=0 y probabilidad esféricamente simétrica, sin trayectoria clásica definida.",
            "Un electrón inmóvil a distancia fija."
        ],
        "correct_index": 2,
        "matched_page": "10",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Orbitales s, PDF p. 10",
        "justification": "El orbital s tiene l=0 y simetría esférica de probabilidad; no describe una trayectoria clásica ni un electrón en reposo."
    },
    {
        "id": "N_Ex_N_44",
        "text": "¿Qué componentes aparecen en el espectro de rayos X de un tubo?",
        "options": [
            "Continuo de frenado y líneas características de transiciones electrónicas propias del material del ánodo.",
            "Solo líneas discretas fijadas por voltaje, independientes del ánodo.",
            "Continuo de transiciones nucleares y una línea en la energía inicial del electrón.",
            "Continuo Compton y líneas de aniquilación originadas en el cátodo."
        ],
        "correct_index": 0,
        "matched_page": "10–11",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Rayos X, PDF pp. 10–11",
        "justification": "El frenado produce continuo; el llenado de vacantes electrónicas internas produce líneas características del elemento del ánodo."
    },
    {
        "id": "N_Ex_N_45",
        "text": "Para un gamma de ¹³⁷Cs de 0,662 MeV, ¿qué representa el borde Compton cercano a 0,478 MeV?",
        "options": [
            "La energía mínima del fotón dispersado que escapa, con transferencia mínima al electrón.",
            "La máxima energía del electrón en retrodispersión de 180°, si escapa el fotón de unos 0,184 MeV.",
            "El umbral de creación de pares reducido por la masa del núcleo.",
            "La energía fotoeléctrica total menos la energía de ligadura."
        ],
        "correct_index": 1,
        "matched_page": "12–13",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Espectro gamma y borde Compton, PDF pp. 12–13",
        "justification": "En retrodispersión de 180° el gamma saliente tiene unos 0,184 MeV; la diferencia con 0,662 MeV (0,478 MeV) es la máxima energía depositada."
    },
    {
        "id": "N_Ex_N_46",
        "text": "¿Cómo produce un CZT un impulso cuya amplitud informa de la energía gamma depositada?",
        "options": [
            "El gamma crea pares electrón-hueco; el campo recoge carga y el impulso depende del número de pares.",
            "El cristal produce luz multiplicada en dínodos como un NaI(Tl).",
            "El detector cuenta fotones con amplitud fija; la energía sale del número de cuentas.",
            "El gamma ioniza un gas interno y la amplitud depende solo del tiempo de deriva."
        ],
        "correct_index": 0,
        "matched_page": "15",
        "source_file": "Física Cuántica - Tema 5 - Núcleos y átomos",
        "source_reference": "Detector semiconductor, PDF p. 15",
        "justification": "La radiación crea pares electrón-hueco y el campo eléctrico recoge la carga; el tamaño de la señal se relaciona con la energía depositada."
    }
];