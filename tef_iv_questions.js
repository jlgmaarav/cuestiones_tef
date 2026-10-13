// Banco definitivo de TEF IV. Páginas PDF contadas desde 1, incluida la portada.
// Procedencia y referencias de cada cuestión verificadas en los materiales originales.
window.TEF_IV_QUIZ_DATABASE = [
    {
        "id": "N1",
        "text": "Los cristalitos (chips) termoluminiscentes de la práctica P1 tienen un espesor de 1 mm. La luz que emiten al calentarlos tras ser irradiados con la misma cantidad de partículas alfa y fotones gamma de la misma energía:",
        "options": [
            "Se deberá casi exclusivamente a las gammas.",
            "Se deberá casi exclusivamente a las alfas.",
            "Se deberá en la misma proporción a alfas y gammas."
        ],
        "correct_index": 1,
        "matched_page": 1,
        "source_file": "Exámenes.pdf",
        "justification": "El guion de dosimetría termoluminiscente propone comparar la señal de los chips tras irradiarlos con alfas y gammas, y señala que las alfas producen una intensidad mucho mayor que las gammas. Por eso la respuesta correcta es que la emisión se debe casi exclusivamente a las alfas.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "1",
        "source_reference": "Curso 2021–2022 · cuestión 1 · PDF p. 1 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.2",
                "pdf_pages": [
                    33,
                    34
                ]
            }
        ]
    },
    {
        "id": "N11",
        "text": "Para observar al microscopio las trazas en los plásticos CR39:",
        "options": [
            "Primero se preparan introduciéndolos en NaOH y después se irradian.",
            "Primero se irradian y después se introducen en NaOH.",
            "Se irradian estando introducidos en NaOH."
        ],
        "correct_index": 1,
        "matched_page": 1,
        "source_file": "Exámenes.pdf",
        "justification": "La radiación alfa daña las cadenas del CR39 y deja una trayectoria latente. Después, el NaOH ataca químicamente esa zona dañada y ensancha la traza hasta hacerla visible al microscopio.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "11",
        "source_reference": "Curso 2021–2022 · cuestión 11 · PDF p. 1 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.1.1",
                "pdf_pages": [
                    19,
                    20
                ]
            }
        ]
    },
    {
        "id": "N3",
        "text": "La intensidad de corriente con la aguja de 226Ra en la cámara de ionización en P3 se debe a:",
        "options": [
            "Partículas alfa del 226Ra y sus descendientes.",
            "Partículas beta del núcleo de 226Ra solamente.",
            "Radiación beta y gamma solamente."
        ],
        "correct_index": 0,
        "matched_page": 1,
        "source_file": "Exámenes.pdf",
        "justification": "Las desintegraciones del 226Ra y de los núcleos descendientes emiten partículas alfa. Al atravesar el gas de la cámara, esas partículas lo ionizan y generan la corriente medida.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "3",
        "source_reference": "Curso 2021–2022 · cuestión 3 · PDF p. 1 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §§3.2.1 y 3.2.3",
                "pdf_pages": [
                    76,
                    81,
                    82
                ]
            }
        ]
    },
    {
        "id": "N33",
        "text": "Si en P3 obtenemos una semivida mayor que la verdadera para el gas Radón 220 (Torón), ¿cuál podría ser una posible explicación?",
        "options": [
            "Que en la recta de ajuste tengamos medidas a tiempos largos donde prácticamente solo existe fondo.",
            "Que en la variación temporal de la corriente eléctrica influya la vida media del 232Th.",
            "Que en la variación temporal de la corriente eléctrica influya la vida media del descendiente 216Po, cuya semivida es de 0,14 segundos."
        ],
        "correct_index": 0,
        "matched_page": 2,
        "source_file": "Exámenes.pdf",
        "justification": "A tiempos largos, la señal del torón es pequeña y la corriente de fondo deja de ser despreciable. Si se ajusta sin corregir ese fondo, los últimos puntos quedan por encima de la exponencial ideal, la pendiente resulta menos pronunciada y la semivida calculada aumenta.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "33",
        "source_reference": "Curso 2021–2022 · cuestión 33 · PDF p. 2 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.2.4; introducción, §I.2.1",
                "pdf_pages": [
                    84,
                    85,
                    86,
                    5
                ]
            }
        ]
    },
    {
        "id": "N4",
        "text": "Con un detector Geiger contamos los impulsos de una fuente que emite betas y gammas, ambas de 0,7 MeV. Para separar cuántos impulsos corresponden a cada tipo de radiación, interponemos un material. ¿Cuál es el más adecuado?",
        "options": [
            "Papel de plástico de 1 micra.",
            "Lámina de aluminio de 1 mm.",
            "Lámina de aluminio de 1 micra."
        ],
        "correct_index": 1,
        "matched_page": 2,
        "source_file": "Exámenes.pdf",
        "justification": "La tabla 4.1 da un alcance máximo de 0,78 mm en aluminio para betas de 0,7 MeV. Entre las opciones, 1 mm de aluminio detiene las betas y transmite la mayor parte de las gammas. Para cuantificar ambas contribuciones habría que corregir el fondo, las eficiencias respectivas y la atenuación gamma de la lámina; la resta de cuentas brutas solo es una aproximación.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "4",
        "source_reference": "Curso 2021–2022 · cuestión 4 · PDF p. 2 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.9, tabla 4.1",
                "pdf_pages": [
                    104,
                    105
                ]
            }
        ]
    },
    {
        "id": "N44",
        "text": "Se pretende identificar dos emisores beta con un detector Geiger:",
        "options": [
            "Es imposible, puesto que sus impulsos tienen igual amplitud.",
            "Es posible utilizando láminas absorbentes.",
            "Es posible analizando el espectro suministrado por el detector."
        ],
        "correct_index": 1,
        "matched_page": 2,
        "source_file": "Exámenes.pdf",
        "justification": "El Geiger no mide la energía de cada beta a partir de la amplitud del impulso: los impulsos quedan limitados por la descarga del detector. En cambio, la atenuación al interponer espesores crecientes de material depende del alcance de las betas y permite distinguir emisores con espectros distintos.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "44",
        "source_reference": "Curso 2021–2022 · cuestión 44 · PDF p. 2 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §§4.2 y 4.9",
                "pdf_pages": [
                    91,
                    104,
                    106,
                    107
                ]
            }
        ]
    },
    {
        "id": "N5",
        "text": "El canal del borde Compton de un espectro gamma corresponde a:",
        "options": [
            "La energía cinética máxima del electrón emitido en una dispersión Compton.",
            "La energía del fotón retrodispersado.",
            "La energía del fotón dispersado a 90 grados."
        ],
        "correct_index": 0,
        "matched_page": 2,
        "source_file": "Exámenes.pdf",
        "justification": "El borde Compton corresponde al caso en que el fotón se retrodispersa y transfiere al electrón la energía cinética máxima posible.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "5",
        "source_reference": "Curso 2021–2022 · cuestión 5 · PDF p. 2 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción, ecuaciones (5.1) y (5.2)",
                "pdf_pages": [
                    117,
                    118
                ]
            }
        ]
    },
    {
        "id": "N55",
        "text": "En P5 observamos los dos picos del 60Co y el pico de su suma, bastante menos intenso. Si rodeamos la fuente de 60Co con el mismo tipo de detector, pero de tamaño muy grande (puede considerarse infinito), el espectro mostraría:",
        "options": [
            "Una distribución Compton sin fotopicos.",
            "El pico suma, pero no los picos de ambos fotones por separado.",
            "Los picos de los dos fotones, pero no el pico suma."
        ],
        "correct_index": 1,
        "matched_page": 2,
        "source_file": "Exámenes.pdf",
        "justification": "El 60Co emite dos fotones en cascada casi simultáneamente. En un detector que rodea por completo la fuente, ambos entran y depositan su energía en el mismo intervalo de integración; el impulso corresponde a la suma de sus energías y desaparecen los fotopicos individuales.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "55",
        "source_reference": "Curso 2021–2022 · cuestión 55 · PDF pp. 2–3 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.4",
                "pdf_pages": [
                    124,
                    125
                ]
            }
        ]
    },
    {
        "id": "N6",
        "text": "Para el emisor de positrones 22Na, los fotones de aniquilación de 0,511 MeV:",
        "options": [
            "Se producen en el cristal detector.",
            "Se producen en los materiales que rodean al detector.",
            "Se producen en los materiales de la propia fuente."
        ],
        "correct_index": 2,
        "matched_page": 3,
        "source_file": "Exámenes.pdf",
        "justification": "La clave oficial da la opción c. En el montaje de la práctica, la fuente y su encapsulado frenan los positrones y allí ocurre su aniquilación con electrones. Los dos fotones de 0,511 MeV salen aproximadamente en sentidos opuestos. No es una afirmación universal: si un positrón escapase del encapsulado, podría aniquilarse en otro material.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "6",
        "source_reference": "Curso 2021–2022 · cuestión 6 · PDF p. 3 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.4",
                "pdf_pages": [
                    125,
                    126
                ]
            }
        ]
    },
    {
        "id": "N66",
        "text": "¿Qué habría que hacer para que los picos del espectro de la pechblenda y los del uranio metálico coincidan en intensidades relativas, es decir, para que ambos espectros sean iguales?",
        "options": [
            "Compactar el mineral para que la actividad por unidad de masa sea mayor.",
            "Medir los espectros después de un tiempo del orden de miles de años.",
            "Medir sin interrupción acumulando cuentas durante varios meses."
        ],
        "correct_index": 1,
        "matched_page": 3,
        "source_file": "Exámenes.pdf",
        "justification": "La clave oficial da la opción b: esperar la regeneración de descendientes, en vez de acumular cuentas o compactar la muestra. El guion menciona unos 5000 años al discutir el 226Ra, pero esa cifra NO es un tiempo universal de recuperación de toda la cadena del uranio. Depende de qué descendientes se retiraron, de los intermediarios de larga semivida (como el 230Th de la figura 6.18), de las cantidades iniciales y de que el sistema permanezca cerrado, sin pérdidas de radón. La comparación espectral también exige controlar composición isotópica, geometría, autoabsorción y eficiencia.",
        "bank": "official",
        "origin": "exam",
        "exam_year": "2021–2022",
        "exam_question": "66",
        "source_reference": "Curso 2021–2022 · cuestión 66 · PDF p. 3 · clave oficial: PDF p. 4",
        "answer_status": "official-key",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, §6.5.2 y figura 6.18",
                "pdf_pages": [
                    147,
                    148,
                    150
                ]
            }
        ]
    },
    {
        "id": "N_Ex_23_01",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "1",
        "text": "Al calentar un LiF:Mg,Ti irradiado con una rampa fija, ¿por qué la intensidad termoluminiscente presenta máximos?",
        "options": [
            "La probabilidad de escape crece con T y la población de trampas ocupadas disminuye.",
            "La población de trampas ocupadas crece con T y su probabilidad de escape disminuye.",
            "Cada máximo corresponde al aumento de la actividad de la fuente durante la lectura."
        ],
        "correct_index": 0,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 1 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.2",
                "pdf_pages": [
                    33,
                    34
                ]
            }
        ],
        "justification": "La intensidad es proporcional a la población atrapada por la probabilidad de escape. El factor térmico aumenta, pero las trampas se vacían: su producto pasa por un máximo. Diferentes profundidades de trampa pueden originar varios máximos; no cambia la actividad de la fuente."
    },
    {
        "id": "N_Ex_23_03",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "3",
        "text": "En la región Geiger y con el mismo tubo, ¿por qué aumenta la amplitud del impulso al aumentar la tensión?",
        "options": [
            "Aumenta la energía depositada por cada beta aunque la fuente permanezca igual.",
            "Se necesita más carga espacial para apantallar el campo inicial y extinguir la descarga.",
            "Se conserva la carga recolectada y solo aumenta el número de impulsos por segundo."
        ],
        "correct_index": 1,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 3 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §§4.2 y 4.7",
                "pdf_pages": [
                    91,
                    100
                ]
            }
        ],
        "justification": "La descarga termina al apantallarse el campo por la carga espacial. A mayor tensión inicial se acumula más carga antes de extinguirla. La amplitud depende del tubo y de su tensión, sin ser proporcional a la ionización primaria."
    },
    {
        "id": "N_Ex_23_04",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "4",
        "text": "¿Qué secuencia describe la formación del impulso eléctrico en el detector NaI(Tl) de la práctica?",
        "options": [
            "Depósito de energía, pares electrón-hueco recogidos directamente y carga del condensador sin PMT.",
            "Ionización del gas, avalancha apantallada y carga del condensador sin conversión a luz.",
            "Depósito de energía, luz de centelleo, fotoelectrones, multiplicación en dínodos y carga del condensador."
        ],
        "correct_index": 2,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 4 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción",
                "pdf_pages": [
                    114
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.4.1",
                "pdf_pages": [
                    14,
                    15
                ]
            }
        ],
        "justification": "El cristal produce luz, el fotocátodo la convierte en electrones y los dínodos multiplican su número. La carga de salida forma un impulso; en régimen lineal su amplitud informa de la energía depositada. La recogida directa de pares describe un semiconductor y la avalancha gaseosa un Geiger."
    },
    {
        "id": "N_Ex_23_05",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "5",
        "text": "¿A qué radiación se deben las trazas reveladas en el CR39 irradiado con 241Am en P1?",
        "options": [
            "A las alfas, que dejan daños localizados en las cadenas del plástico.",
            "A las gammas, que dejan el mismo tipo de traza densa que las alfas.",
            "A electrones del NaOH, que crean las trazas durante el revelado."
        ],
        "correct_index": 0,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 5 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.1.1",
                "pdf_pages": [
                    19,
                    20
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, irradiación y control",
                "pdf_pages": [
                    22,
                    24
                ]
            }
        ],
        "justification": "Las alfas dañan intensamente una zona estrecha del CR39. El ataque químico posterior la ensancha. El control irradiado interponiendo el plástico que detiene alfas no muestra esas trazas, aunque recibe gammas."
    },
    {
        "id": "N_Ex_23_06",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "6",
        "text": "¿Qué se registra con el contador en la medida de la semivida del 137mBa separado del minigenerador?",
        "options": [
            "Amplitudes de impulsos gamma del Geiger, cuya media se ajusta exponencialmente.",
            "Cuentas acumuladas de impulsos gamma, cuya diferencia por intervalo se corrige por fondo.",
            "Cuentas acumuladas de betas del 137Cs que permanece en el minigenerador."
        ],
        "correct_index": 1,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 6 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §§3.1.1 y 3.1.9",
                "pdf_pages": [
                    62,
                    71,
                    72,
                    73,
                    74
                ]
            }
        ],
        "justification": "El contador no se reinicia entre lecturas: se anotan cuentas acumuladas cada 30 s. Se obtienen diferencias, se resta el fondo de 30 s y se ajusta su logaritmo frente al tiempo. La radiación útil proviene de la desexcitación gamma del bario separado; las cuentas detectadas son proporcionales a la actividad con geometría y eficiencia constantes."
    },
    {
        "id": "N_Ex_23_07",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "7",
        "text": "¿Por qué la comparación entre pechblenda antigua y uranio recién purificado evidencia la ruptura del equilibrio secular?",
        "options": [
            "La purificación desplaza las energías de transición de los mismos descendientes hacia otros canales.",
            "La purificación reduce por igual todos los picos sin modificar las proporciones entre los emisores.",
            "La purificación retira descendientes y faltan sus picos, presentes en el mineral si conserva la cadena."
        ],
        "correct_index": 2,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 7 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, §6.5.2",
                "pdf_pages": [
                    147,
                    148,
                    150
                ]
            }
        ],
        "justification": "La pechblenda puede conservar los descendientes en equilibrio; el uranio purificado carece inicialmente de los elementos retirados. Cambia el conjunto de emisores, no sus energías de transición. La restauración depende de la cadena y de sus condiciones iniciales; los 5000 años citados en el guion no constituyen una regla universal."
    },
    {
        "id": "N_Ex_23_08",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "8",
        "text": "¿Qué magnitud de un fotopico mide las cuentas registradas de absorción completa durante la adquisición?",
        "options": [
            "Su área neta, restando el continuo de fondo bajo el pico.",
            "Su altura máxima, independientemente de la anchura del pico.",
            "Su posición central, independientemente del tiempo de adquisición."
        ],
        "correct_index": 0,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 8 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción y §§5.2–5.3",
                "pdf_pages": [
                    114,
                    122,
                    123
                ]
            }
        ],
        "justification": "El área neta suma las cuentas atribuidas al fotopico. La altura solo da las cuentas del canal máximo y también cambia con la anchura o resolución y el tamaño de canal. El área dividida por el tiempo vivo da una tasa; para inferir emisión de la fuente deben considerarse eficiencia de fotopico, geometría y probabilidad de emisión. La adaptación precisa el término «intensidad» del enunciado original."
    },
    {
        "id": "N_Ex_23_09",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "9",
        "text": "¿Por qué se aplica NaOH al CR39 después de irradiarlo?",
        "options": [
            "Para disolver todo el plástico a igual velocidad y conservar el daño microscópico.",
            "Para disolver más deprisa el material dañado y hacer visibles las trazas.",
            "Para aumentar la ionización de las alfas durante una irradiación posterior."
        ],
        "correct_index": 1,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 9 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.1.1",
                "pdf_pages": [
                    19,
                    20
                ]
            }
        ],
        "justification": "El NaOH es una base y actúa como agente de revelado. Ataca preferentemente las zonas cuyos enlaces fueron dañados por las alfas y forma conos observables; la secuencia es irradiación y después revelado, no a la inversa."
    },
    {
        "id": "N_Ex_23_10",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2023",
        "exam_question": "10",
        "text": "En el ajuste del logaritmo de las cuentas de 137mBa, corregidas por fondo y en intervalos iguales, la pendiente es m < 0. ¿Por qué T₁/₂ = −ln(2)/m?",
        "options": [
            "Porque m = −1/λ y la actividad se reduce a la mitad cuando t/λ = ln(2).",
            "Porque m = λ y el signo menos compensa el uso de una semivida negativa.",
            "Porque m = −λ y la actividad se reduce a la mitad cuando λt = ln(2)."
        ],
        "correct_index": 2,
        "matched_page": 1,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2023 · cuestión 10 · adaptación de desarrollo a test · PDF pp. 1",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.9",
                "pdf_pages": [
                    73,
                    74
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.2.1",
                "pdf_pages": [
                    5
                ]
            }
        ],
        "justification": "El modelo es C(t) = C₀ exp(−λt). Por tanto ln C = ln C₀ − λt, m = −λ y exp(−λT₁/₂) = 1/2. Así T₁/₂ = ln(2)/λ = −ln(2)/m. El denominador debe tener unidades de inverso de tiempo. El ajuste está en §3.1.9, no en §3.1.8."
    },
    {
        "id": "N_Ex_22_01",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2022–2023",
        "exam_question": "1",
        "text": "Tras irradiar CR39 con 241Am y revelarlo con NaOH caliente, ¿qué origina las trazas observadas al microscopio?",
        "options": [
            "La ionización de las alfas, que rompe enlaces y deja zonas de ataque químico preferente.",
            "El calentamiento, que crea trazas en la misma cantidad en un CR39 no irradiado.",
            "La corrosión uniforme por NaOH, que revela la trayectoria de cada fotón gamma."
        ],
        "correct_index": 0,
        "matched_page": 2,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2022–2023 · cuestión 1 · adaptación de desarrollo a test · PDF pp. 2",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.1.1",
                "pdf_pages": [
                    19,
                    20
                ]
            }
        ],
        "justification": "El enunciado escaneado dice «ácido», pero el reactivo de P1 es NaOH, una base. Se corrige ese término al adaptar la pregunta. Las alfas producen daños localizados; el revelado los hace visibles. Las respuestas añadidas en la recopilación son anotaciones, no una clave oficial."
    },
    {
        "id": "N_Ex_22_02",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2022–2023",
        "exam_question": "2",
        "text": "Con el mismo gas y geometría, ¿de qué depende principalmente la amplitud de una descarga en la región Geiger?",
        "options": [
            "De la energía depositada, con proporcionalidad como en un contador proporcional.",
            "De la tensión aplicada, que fija la carga de apantallamiento de la descarga.",
            "De la actividad de la fuente, aunque el voltaje y el tubo no cambien."
        ],
        "correct_index": 1,
        "matched_page": 2,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2022–2023 · cuestión 2 · adaptación de desarrollo a test · PDF pp. 2",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §§4.1–4.2 y 4.7",
                "pdf_pages": [
                    90,
                    91,
                    100
                ]
            }
        ],
        "justification": "En la región Geiger se pierde la proporcionalidad entre carga final e ionización primaria. La carga espacial extingue la descarga y depende de la tensión, dimensiones y gas del tubo. Cambiar la actividad cambia principalmente el ritmo de impulsos, no la amplitud individual."
    },
    {
        "id": "N_Ex_22_03",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2022–2023",
        "exam_question": "3",
        "text": "Para medir la semivida del 137mBa con el Geiger, ¿qué datos se ajustan frente al tiempo?",
        "options": [
            "El logaritmo de las cuentas acumuladas desde el comienzo, sin obtener diferencias.",
            "El promedio de amplitudes de los impulsos, restando el voltaje del fondo electrónico.",
            "El logaritmo de las diferencias de cuentas acumuladas, restando el fondo de cada intervalo igual."
        ],
        "correct_index": 2,
        "matched_page": 2,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2022–2023 · cuestión 3 · adaptación de desarrollo a test · PDF pp. 2",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §§3.1.7 y 3.1.9",
                "pdf_pages": [
                    68,
                    71,
                    72,
                    73,
                    74
                ]
            }
        ],
        "justification": "Las cuentas acumuladas siempre aumentan y no siguen una exponencial decreciente. Sus diferencias en intervalos iguales estiman la radiación detectada por intervalo. Tras restar el fondo, ln(Δ corregida) tiene pendiente −λ; la amplitud Geiger no proporciona la actividad."
    },
    {
        "id": "N_Ex_22_04",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2022–2023",
        "exam_question": "4",
        "text": "En la situación descrita por las anotaciones de 2022–2023, un pico común de pechblenda tiene la mitad de área neta que el de uranio tras medir el mismo tiempo. Si las tasas permanecen constantes y no cambia el montaje, ¿cómo igualar sus cuentas?",
        "options": [
            "Duplicando el tiempo de adquisición de la pechblenda.",
            "Duplicando el tiempo de adquisición del uranio.",
            "Igualando únicamente las energías centrales mediante la calibración."
        ],
        "correct_index": 0,
        "matched_page": 2,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2022–2023 · cuestión 4 · adaptación de desarrollo a test · PDF pp. 2",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, §6.5.2",
                "pdf_pages": [
                    147,
                    148,
                    150
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.3",
                "pdf_pages": [
                    123
                ]
            }
        ],
        "justification": "Es una situación particular de las anotaciones, no una jerarquía universal de intensidades entre materiales. Con tasa constante, área neta = tasa × tiempo; duplicar el tiempo de la señal menor iguala ese pico. No restaura el equilibrio secular ni hace iguales todos los picos: las actividades, composiciones y eficiencias pueden diferir. El factor dos es una condición explícita añadida para convertir el desarrollo en un test inequívoco."
    },
    {
        "id": "N_Ex_22_05",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2022–2023",
        "exam_question": "5",
        "text": "La pregunta de 2022–2023 habla de «intensidad o altura» de un pico gamma. En un espectro de cuentas por canal, ¿qué expresa exactamente la altura sobre el continuo?",
        "options": [
            "El total de cuentas netas del fotopico; su anchura solo fija la energía del fotón.",
            "Las cuentas netas del canal máximo; el total del fotopico se obtiene integrando su área neta.",
            "La tasa de emisión de la fuente; el tiempo vivo y la eficiencia no intervienen."
        ],
        "correct_index": 1,
        "matched_page": 3,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2022–2023 · cuestión 5 · adaptación de desarrollo a test · PDF pp. 3",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción y §§5.2–5.3",
                "pdf_pages": [
                    114,
                    122,
                    123
                ]
            }
        ],
        "justification": "La altura es una ordenada de un canal y no la suma de todos los canales del pico. Para un pico aproximadamente gaussiano de área fija, estrecharlo aumenta su altura. La comparación de emisión exige área neta, tiempo vivo y eficiencia, además de geometría. Se corrige expresamente la identificación de altura con número total de fotones que aparece en la anotación de la recopilación."
    },
    {
        "id": "N_Ex_22_06",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2022–2023",
        "exam_question": "6",
        "text": "¿Por qué una fuente alfa incorporada por inhalación o ingestión puede causar un daño local importante, aunque las alfas penetren poco?",
        "options": [
            "Porque dentro del cuerpo su alcance pasa a ser mayor que el de las gammas.",
            "Porque dentro del cuerpo dejan de ionizar y toda su energía se convierte en calor uniforme.",
            "Porque depositan mucha energía en una distancia pequeña dentro del tejido próximo."
        ],
        "correct_index": 2,
        "matched_page": 3,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2022–2023 · cuestión 6 · adaptación de desarrollo a test · PDF pp. 3",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.3.1",
                "pdf_pages": [
                    8,
                    9
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.3",
                "pdf_pages": [
                    41,
                    42
                ]
            }
        ],
        "justification": "La baja penetración externa no elimina el daño de un emisor interno: la ionización intensa concentra la energía en el entorno inmediato. La distinción entre irradiación externa e incorporación conserva el contenido del desarrollo; las alfas no aumentan por ello su alcance."
    },
    {
        "id": "N_Ex_22_07",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2022–2023",
        "exam_question": "7",
        "text": "¿Qué diferencia entre el plástico dañado y el intacto permite revelar las trazas con NaOH?",
        "options": [
            "La velocidad de ataque químico es mayor en la zona dañada por las alfas.",
            "La velocidad de ataque químico es menor en la zona dañada por las alfas.",
            "La velocidad de ataque es idéntica, pero el daño emite luz de centelleo."
        ],
        "correct_index": 0,
        "matched_page": 3,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2022–2023 · cuestión 7 · adaptación de desarrollo a test · PDF pp. 3",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.1.1",
                "pdf_pages": [
                    19,
                    20
                ]
            }
        ],
        "justification": "El agente corrosivo elimina más rápidamente el material cuyos enlaces han sido alterados. Esa selectividad ensancha la zona dañada hasta formar conos visibles. No se trata de centelleo ni de un ataque homogéneo."
    },
    {
        "id": "N_Ex_18_01",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2018",
        "exam_question": "P1",
        "text": "¿Qué procedimiento permite observar y medir las trazas alfa en CR39 de P1?",
        "options": [
            "Revelar con NaOH, irradiar y medir la amplitud de los impulsos del plástico.",
            "Irradiar, revelar con NaOH y medir al microscopio usando una calibración de longitud.",
            "Irradiar y deducir el diámetro directamente del número de píxeles sin calibración."
        ],
        "correct_index": 1,
        "matched_page": 4,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2018 · cuestión P1 · adaptación de desarrollo a test · PDF pp. 4",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §§1.1.1 y 1.1.10–1.1.11",
                "pdf_pages": [
                    19,
                    20,
                    30,
                    31
                ]
            }
        ],
        "justification": "El daño latente de las alfas se ensancha mediante revelado. La imagen microscópica se convierte de píxeles a micras con el patrón del mismo objetivo. El CR39 es un detector pasivo y no produce los impulsos de un espectrómetro."
    },
    {
        "id": "N_Ex_18_03",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2018",
        "exam_question": "P3",
        "text": "Tras extraer el bario del minigenerador 137Cs–137mBa, ¿cómo se sigue la recuperación del equilibrio secular en el propio minigenerador?",
        "options": [
            "Contando las betas del bario extraído; la tasa aumenta hasta la actividad del cesio.",
            "Midiendo la amplitud de impulsos Geiger; aumenta al crecer el número de núcleos.",
            "Contando las gammas del nuevo 137mBa; la tasa aumenta hacia una meseta."
        ],
        "correct_index": 2,
        "matched_page": 4,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2018 · cuestión P3 · adaptación de desarrollo a test · PDF pp. 4",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §§3.1.1 y 3.1.10",
                "pdf_pages": [
                    62,
                    64,
                    74,
                    75
                ]
            }
        ],
        "justification": "El 137Cs queda en el minigenerador y sigue produciendo 137mBa. Su actividad crece como 1 − exp(−λ₂t), partiendo de la fracción residual de bario. Las betas del cesio quedan absorbidas; se cuentan gammas. El bario separado en el vaso, en cambio, decae y se usa para medir su semivida."
    },
    {
        "id": "N_Ex_18_04",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2018",
        "exam_question": "P4 (alcance)",
        "text": "En la gráfica de ln[cuentas/tiempo] frente al espesor másico de Al para 36Cl, ¿cómo se estima el alcance máximo beta?",
        "options": [
            "Por el cruce del tramo descendente ajustado con la meseta del fondo.",
            "Por el espesor para el que la tasa se reduce a la mitad de su valor inicial.",
            "Por la pendiente de ln[cuentas acumuladas] frente al tiempo sin absorbente."
        ],
        "correct_index": 0,
        "matched_page": 4,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2018 · cuestión P4 (alcance) · adaptación de desarrollo a test · PDF pp. 4",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.9",
                "pdf_pages": [
                    104,
                    105,
                    106,
                    107
                ]
            }
        ],
        "justification": "El guion ajusta dos rectas: la caída de señal y la región aproximadamente constante del fondo. Su intersección estima el alcance máximo. El espesor hemirreductor es una magnitud distinta. Si se cambian los tiempos, se comparan tasas, no cuentas brutas."
    },
    {
        "id": "N_Ex_18_05",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2018",
        "exam_question": "P5 (picos)",
        "text": "En un detector con producción de pares para gammas de 3 MeV, ¿dónde aparecen absorción completa, escape simple y escape doble?",
        "options": [
            "En 3,000; 0,511 y 1,022 MeV, respectivamente.",
            "En 3,000; 2,489 y 1,978 MeV, respectivamente.",
            "En 3,000; 2,746 y 2,489 MeV, respectivamente."
        ],
        "correct_index": 1,
        "matched_page": 4,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2018 · cuestión P5 (picos) · adaptación de desarrollo a test · PDF pp. 4",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción y §5.6",
                "pdf_pages": [
                    118,
                    129
                ]
            }
        ],
        "justification": "La energía registrada disminuye en 0,511 MeV por cada fotón de aniquilación que escapa. Si las partículas cargadas se frenan dentro del cristal, escapar uno da 3 − 0,511 = 2,489 MeV y escapar ambos da 3 − 1,022 = 1,978 MeV. Los nombres designan picos del espectro, no tres energías emitidas por la fuente."
    },
    {
        "id": "N_Ex_18_06",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2018",
        "exam_question": "P5 (detector)",
        "text": "Además del NaI(Tl), ¿qué elementos realizan la conversión de luz en carga amplificada?",
        "options": [
            "Los dos electrodos que recogen directamente los huecos del NaI(Tl).",
            "El gas extintor y el alambre central de una descarga Geiger.",
            "El fotocátodo y los dínodos del tubo fotomultiplicador."
        ],
        "correct_index": 2,
        "matched_page": 4,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2018 · cuestión P5 (detector) · adaptación de desarrollo a test · PDF pp. 4",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción",
                "pdf_pages": [
                    114
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.4.1",
                "pdf_pages": [
                    14,
                    15
                ]
            }
        ],
        "justification": "El fotocátodo emite electrones por la luz de centelleo y los dínodos multiplican su número. La carga final produce el impulso. El centelleador no se lee como un semiconductor de recogida directa y el PMT no es un Geiger."
    },
    {
        "id": "N_Ex_18_07",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2018",
        "exam_question": "P6 (funcionamiento)",
        "text": "¿Qué mecanismo permite al CZT obtener un espectro gamma de alturas de impulsos?",
        "options": [
            "La recogida de pares electrón-hueco, cuya cantidad depende de la energía depositada.",
            "La lectura de luz de centelleo mediante los dínodos incorporados en el CZT.",
            "La descarga gaseosa de amplitud independiente de la energía que llega al cristal."
        ],
        "correct_index": 0,
        "matched_page": 4,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2018 · cuestión P6 (funcionamiento) · adaptación de desarrollo a test · PDF pp. 4",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, introducción",
                "pdf_pages": [
                    131,
                    132
                ]
            }
        ],
        "justification": "La radiación crea portadores en el semiconductor y el campo eléctrico permite recoger la carga. Con electrónica lineal y recogida comparable, amplitud y energía depositada son proporcionales. Un multicanal clasifica los impulsos y la calibración convierte canal en energía."
    },
    {
        "id": "N_Ex_18_08",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2018",
        "exam_question": "P6 (resolución)",
        "text": "¿Qué definición de resolución energética permite comparar dos detectores en el mismo fotopico?",
        "options": [
            "Área neta dividida por el tiempo; una tasa mayor indica mejor resolución.",
            "FWHM dividida por la energía central; un cociente menor indica mejor resolución.",
            "Altura máxima dividida por el área neta; una fracción menor indica mejor resolución."
        ],
        "correct_index": 1,
        "matched_page": 4,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2018 · cuestión P6 (resolución) · adaptación de desarrollo a test · PDF pp. 4",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.2",
                "pdf_pages": [
                    122
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, §6.3",
                "pdf_pages": [
                    144,
                    145
                ]
            }
        ],
        "justification": "La resolución relativa es 100 FWHM/E₀ en porcentaje. Deben usarse anchura y centro en unidades consistentes; si E = ac + b con b no despreciable no basta FWHM en canales/canal central. El área por tiempo mide tasa, no capacidad de separar energías próximas."
    },
    {
        "id": "N_Ex_17_01",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2017",
        "exam_question": "P1",
        "text": "¿Cómo almacena y lee la irradiación un dosímetro termoluminiscente?",
        "options": [
            "Almacena fotones gamma sin absorberlos y los libera durante el calentamiento.",
            "Almacena corriente en los electrodos y la amplifica mediante una descarga gaseosa.",
            "Almacena electrones en trampas y emite luz al liberarlos durante el calentamiento."
        ],
        "correct_index": 2,
        "matched_page": 5,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2017 · cuestión P1 · adaptación de desarrollo a test · PDF pp. 5",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.2",
                "pdf_pages": [
                    33,
                    34
                ]
            }
        ],
        "justification": "La ionización deja electrones atrapados en defectos del cristal. Al calentarlo, salen y pueden recombinarse con emisión luminosa. Es una lectura diferida de un detector pasivo, que vacía las trampas ocupadas."
    },
    {
        "id": "N_Ex_17_03",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2017",
        "exam_question": "P3",
        "text": "Para un padre mucho más longevo que su hijo, con producción del hijo en cada desintegración y sistema cerrado, ¿qué caracteriza el equilibrio secular?",
        "options": [
            "Actividades aproximadamente iguales, aunque los números de núcleos sean muy distintos.",
            "Números de núcleos iguales, aunque sus constantes de desintegración sean distintas.",
            "Actividades aproximadamente iguales inmediatamente después de retirar todos los hijos."
        ],
        "correct_index": 0,
        "matched_page": 5,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2017 · cuestión P3 · adaptación de desarrollo a test · PDF pp. 5",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.1, ecuación (3.8)",
                "pdf_pages": [
                    63,
                    64
                ]
            }
        ],
        "justification": "Tras suficientes semividas del hijo, su producción compensa su decaimiento: λ₁N₁ ≈ λ₂N₂. Como λ₁ ≪ λ₂, hay muchos menos hijos que padres. Al retirar los hijos se rompe el equilibrio; la aproximación exige retención de los productos y una rama de producción especificada."
    },
    {
        "id": "N_Ex_17_04",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2017",
        "exam_question": "P4",
        "text": "¿Por qué un Geiger a tensión fija no distingue energías beta mediante la amplitud de sus impulsos?",
        "options": [
            "Toda beta, cualquiera que sea su energía, produce exactamente un electrón primario.",
            "La descarga termina por apantallamiento y pierde la proporcionalidad con la ionización primaria.",
            "La carga final es proporcional a la energía, pero el umbral del contador iguala las amplitudes."
        ],
        "correct_index": 1,
        "matched_page": 5,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2017 · cuestión P4 · adaptación de desarrollo a test · PDF pp. 5",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §§4.2 y 4.7",
                "pdf_pages": [
                    91,
                    100
                ]
            }
        ],
        "justification": "La avalancha se extiende hasta que la carga espacial reduce el campo. La amplitud final depende principalmente de las condiciones del tubo y la tensión, no del número inicial de electrones. Se pueden comparar atenuaciones con absorbentes, pero no usar el Geiger como espectrómetro de amplitudes."
    },
    {
        "id": "N_Ex_17_05",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2017",
        "exam_question": "P5",
        "text": "En régimen lineal, ¿a qué es proporcional la amplitud de un impulso de centelleo?",
        "options": [
            "Siempre a la energía emitida por la fuente, aunque parte escape del detector.",
            "A la actividad total de la fuente, que determina la carga de cada impulso individual.",
            "A la energía depositada, que determina luz, fotoelectrones y carga final."
        ],
        "correct_index": 2,
        "matched_page": 5,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2017 · cuestión P5 · adaptación de desarrollo a test · PDF pp. 5",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción",
                "pdf_pages": [
                    114
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.5",
                "pdf_pages": [
                    16,
                    17
                ]
            }
        ],
        "justification": "El cristal convierte energía depositada en luz y el PMT en carga. Si un fotón secundario escapa, la energía depositada es menor que la incidente. La actividad determina la frecuencia de sucesos y no la energía depositada por cada uno."
    },
    {
        "id": "N_Ex_17_06",
        "bank": "official",
        "origin": "adapted-exam",
        "exam_year": "2017",
        "exam_question": "P5–P6",
        "text": "Para un gamma de 3 MeV que crea un par, con electrones y positrón frenados dentro del cristal, ¿qué causa los picos de escape?",
        "options": [
            "La fuga de uno o dos fotones de aniquilación de 0,511 MeV.",
            "La fuga de uno o dos fotones de 1,5 MeV producidos al compartir la energía inicial.",
            "La fuga de luz de centelleo con energía fija de 0,511 MeV por cara del cristal."
        ],
        "correct_index": 0,
        "matched_page": 5,
        "source_file": "2023, 2022, 2021, 2018, 2017.pdf",
        "source_reference": "Examen 2017 · cuestión P5–P6 · adaptación de desarrollo a test · PDF pp. 5",
        "answer_status": "reasoned-from-guides",
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, introducción y §5.6",
                "pdf_pages": [
                    118,
                    129
                ]
            }
        ],
        "justification": "Al aniquilarse el positrón frenado se producen dos fotones de 0,511 MeV. Escapar uno o ambos resta esa energía al depósito, generando picos a 2,489 o 1,978 MeV. La fuga de luz altera la recogida óptica, pero no genera esos déficits fijos de energía gamma."
    }
];
