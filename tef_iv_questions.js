/*
 * Examen de Física Nuclear de TEF IV (curso 2021-2022).
 * Preguntas y clave contrastadas con Exámenes.pdf / Prueba21-22.pdf.
 * Las justificaciones se han contrastado con los Guiones de prácticas de Física Nuclear.
 */
window.TEF_IV_QUIZ_DATABASE = [
    {
        id: 'N1',
        text: 'Los cristalitos (chips) termoluminiscentes de la práctica P1 tienen un espesor de 1 mm. La luz que emiten al calentarlos tras ser irradiados con la misma cantidad de partículas alfa y fotones gamma de la misma energía:',
        options: [
            'Se deberá casi exclusivamente a las gammas.',
            'Se deberá casi exclusivamente a las alfas.',
            'Se deberá en la misma proporción a alfas y gammas.'
        ],
        correct_index: 1,
        matched_page: 1,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'El guion de dosimetría termoluminiscente propone comparar la señal de los chips tras irradiarlos con alfas y gammas, y señala que las alfas producen una intensidad mucho mayor que las gammas. Por eso la respuesta correcta es que la emisión se debe casi exclusivamente a las alfas. (Guion de prácticas, P1, §1.2).'
    },
    {
        id: 'N11',
        text: 'Para observar al microscopio las trazas en los plásticos CR39:',
        options: [
            'Primero se preparan introduciéndolos en NaOH y después se irradian.',
            'Primero se irradian y después se introducen en NaOH.',
            'Se irradian estando introducidos en NaOH.'
        ],
        correct_index: 1,
        matched_page: 1,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'La radiación alfa daña las cadenas del CR39 y deja una trayectoria latente. Después, el NaOH ataca químicamente esa zona dañada y ensancha la traza hasta hacerla visible al microscopio. (Guion de prácticas, P1, §1.1.1).'
    },
    {
        id: 'N3',
        text: 'La intensidad de corriente con la aguja de 226Ra en la cámara de ionización en P3 se debe a:',
        options: [
            'Partículas alfa del 226Ra y sus descendientes.',
            'Partículas beta del núcleo de 226Ra solamente.',
            'Radiación beta y gamma solamente.'
        ],
        correct_index: 0,
        matched_page: 1,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'Las desintegraciones del 226Ra y de los núcleos descendientes emiten partículas alfa. Al atravesar el gas de la cámara, esas partículas lo ionizan y generan la corriente medida. (Guion de prácticas, P3, §3.2).'
    },
    {
        id: 'N33',
        text: 'Si en P3 obtenemos una semivida mayor que la verdadera para el gas Radón 220 (Torón), ¿cuál podría ser una posible explicación?',
        options: [
            'Que en la recta de ajuste tengamos medidas a tiempos largos donde prácticamente solo existe fondo.',
            'Que en la variación temporal de la corriente eléctrica influya la vida media del 232Th.',
            'Que en la variación temporal de la corriente eléctrica influya la vida media del descendiente 216Po, cuya semivida es de 0,14 segundos.'
        ],
        correct_index: 0,
        matched_page: 2,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'A tiempos largos, la señal del torón es pequeña y la corriente de fondo deja de ser despreciable. Si se ajusta sin corregir ese fondo, los últimos puntos quedan por encima de la exponencial ideal, la pendiente resulta menos pronunciada y la semivida calculada aumenta. (Guion de prácticas, P3, §3.2).'
    },
    {
        id: 'N4',
        text: 'Con un detector Geiger contamos los impulsos de una fuente que emite betas y gammas, ambas de 0,7 MeV. Para separar cuántos impulsos corresponden a cada tipo de radiación, interponemos un material. ¿Cuál es el más adecuado?',
        options: [
            'Papel de plástico de 1 micra.',
            'Lámina de aluminio de 1 mm.',
            'Lámina de aluminio de 1 micra.'
        ],
        correct_index: 1,
        matched_page: 2,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'Una beta de 0,7 MeV tiene un alcance máximo del orden de 0,8 mm en aluminio. Una lámina de 1 mm puede detener la mayoría de esas betas, mientras que los fotones gamma son mucho más penetrantes y atraviesan la lámina en gran medida. (Guion de prácticas, P4, tabla 4.1).'
    },
    {
        id: 'N44',
        text: 'Se pretende identificar dos emisores beta con un detector Geiger:',
        options: [
            'Es imposible, puesto que sus impulsos tienen igual amplitud.',
            'Es posible utilizando láminas absorbentes.',
            'Es posible analizando el espectro suministrado por el detector.'
        ],
        correct_index: 1,
        matched_page: 2,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'El Geiger no mide la energía de cada beta a partir de la amplitud del impulso: los impulsos quedan limitados por la descarga del detector. En cambio, la atenuación al interponer espesores crecientes de material depende del alcance de las betas y permite distinguir emisores con espectros distintos. (Guion de prácticas, P4, §4.2).'
    },
    {
        id: 'N5',
        text: 'El canal del borde Compton de un espectro gamma corresponde a:',
        options: [
            'La energía cinética máxima del electrón emitido en una dispersión Compton.',
            'La energía del fotón retrodispersado.',
            'La energía del fotón dispersado a 90 grados.'
        ],
        correct_index: 0,
        matched_page: 2,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'El borde Compton corresponde al caso en que el fotón se retrodispersa y transfiere al electrón la energía cinética máxima posible. (Guion de prácticas, P5, §5.1).'
    },
    {
        id: 'N55',
        text: 'En P5 observamos los dos picos del 60Co y el pico de su suma, bastante menos intenso. Si rodeamos la fuente de 60Co con el mismo tipo de detector, pero de tamaño muy grande (puede considerarse infinito), el espectro mostraría:',
        options: [
            'Una distribución Compton sin fotopicos.',
            'El pico suma, pero no los picos de ambos fotones por separado.',
            'Los picos de los dos fotones, pero no el pico suma.'
        ],
        correct_index: 1,
        matched_page: 3,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'El 60Co emite dos fotones en cascada casi simultáneamente. En un detector que rodea por completo la fuente, ambos entran y depositan su energía en el mismo intervalo de integración; el impulso corresponde a la suma de sus energías y desaparecen los fotopicos individuales. (Guion de prácticas, P5, §5.4).'
    },
    {
        id: 'N6',
        text: 'Para el emisor de positrones 22Na, los fotones de aniquilación de 0,511 MeV:',
        options: [
            'Se producen en el cristal detector.',
            'Se producen en los materiales que rodean al detector.',
            'Se producen en los materiales de la propia fuente.'
        ],
        correct_index: 2,
        matched_page: 3,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'El positrón emitido por el 22Na pierde energía y se frena en la propia fuente. Allí se aniquila con un electrón y produce dos fotones de 0,511 MeV que salen en sentidos opuestos. (Guion de prácticas, P5, §5.4 y P6, §6.1).'
    },
    {
        id: 'N66',
        text: '¿Qué habría que hacer para que los picos del espectro de la pechblenda y los del uranio metálico coincidan en intensidades relativas, es decir, para que ambos espectros sean iguales?',
        options: [
            'Compactar el mineral para que la actividad por unidad de masa sea mayor.',
            'Medir los espectros después de un tiempo del orden de miles de años.',
            'Medir sin interrupción acumulando cuentas durante varios meses.'
        ],
        correct_index: 1,
        matched_page: 3,
        source_file: 'Exámenes.pdf (2021-2022)',
        justification: 'La separación química deja el uranio metálico sin buena parte de sus descendientes radiactivos, mientras que la pechblenda está en equilibrio secular. Los descendientes vuelven a acumularse con el tiempo; el guion estima que hacen falta unos 5000 años para que el espectro del uranio se parezca al de la pechblenda. (Guion de prácticas, P6, §6.5.2).'
    }
];
