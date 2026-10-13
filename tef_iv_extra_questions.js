// Banco de preguntas nuevas de TEF IV: explicación e interpretación conceptual.
// Referencias PDF desde 1, incluida la portada; no procede de exámenes.
window.TEF_IV_EXTRA_QUIZ_DATABASE = [
    {
        "id": "N_New_01",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "En P1, las partículas alfa dejan un daño latente en el CR39. ¿Por qué se trata después el detector con NaOH antes de observar las trazas al microscopio?",
        "options": [
            "El ataque químico atrapa las alfas que aún atraviesan el detector.",
            "El ataque químico convierte la energía almacenada en luz visible.",
            "El ataque químico agranda las zonas dañadas hasta hacerlas visibles.",
            "El ataque químico ioniza uniformemente toda la superficie expuesta."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 19,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.1.1: formación y revelado de trazas",
                "pdf_pages": [
                    19,
                    20
                ]
            }
        ],
        "justification": "El paso de una partícula muy ionizante altera localmente la estructura del polímero. El NaOH, que es una base, ataca con mayor rapidez esa región que el material intacto y abre una cavidad observable. La traza latente ya existía antes del revelado: no se crea una nueva irradiación ni se lee una emisión luminosa."
    },
    {
        "id": "N_New_02",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "Los detectores CR39 y termoluminiscentes de P1 se leen después de retirarlos de la fuente. ¿Qué permite conservar información de la irradiación durante ese intervalo?",
        "options": [
            "El CR39 conserva daño estructural y el termoluminiscente conserva portadores atrapados.",
            "El CR39 conserva portadores atrapados y el termoluminiscente conserva daño estructural.",
            "El CR39 conserva alfas retenidas y el termoluminiscente conserva fotones retenidos.",
            "El CR39 conserva una corriente eléctrica y el termoluminiscente conserva luz emitida."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 12,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I4: detectores pasivos",
                "pdf_pages": [
                    12
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.1.1 y §1.2",
                "pdf_pages": [
                    19,
                    33,
                    34
                ]
            }
        ],
        "justification": "Son detectores pasivos que almacenan efectos de la irradiación. En CR39 persiste el daño microscópico del polímero, revelado químicamente; en el material termoluminiscente quedan portadores en trampas hasta su liberación térmica. No almacenan las partículas incidentes ni una corriente o luz que continúe circulando."
    },
    {
        "id": "N_New_03",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "Dos CR39 se irradian y revelan en iguales condiciones con una fuente de americio. Entre la fuente y uno se interpone el plástico de P1, que detiene las alfas y deja pasar gammas. Solo el otro presenta trazas. ¿Qué demuestra ese control?",
        "options": [
            "Las gammas originan las trazas si alcanzan directamente el polímero.",
            "El plástico elimina la emisión gamma de la fuente durante la irradiación.",
            "La ausencia de trazas permite descartar que lleguen fotones al detector.",
            "Las alfas originan las trazas observadas en estas condiciones de revelado."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 22,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1: irradiación con y sin plástico; comparación de trazas",
                "pdf_pages": [
                    22,
                    24
                ]
            }
        ],
        "justification": "La intervención elimina la contribución alfa sin eliminar la gamma, y se mantienen la exposición y el revelado. Por tanto, atribuye las trazas observadas a las alfas. Un CR39 sin trazas no prueba ausencia de fotones: el control está diseñado precisamente para dejar pasar gammas."
    },
    {
        "id": "N_New_04",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "Al calentar a ritmo constante un detector termoluminiscente irradiado, la luz pasa por un máximo y después disminuye. Para un pico aislado y sin reposición de portadores, ¿por qué aparece esa forma?",
        "options": [
            "Se liberan más portadores, pero después deja de subir la temperatura.",
            "Aumenta la liberación térmica, pero acaba agotándose la población atrapada.",
            "Aumenta la energía de los fotones, pero acaba agotándose la fuente radiactiva.",
            "Aumenta la irradiación del detector, pero acaba saturándose su respuesta óptica."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 33,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.2: curva de emisión termoluminiscente",
                "pdf_pages": [
                    33,
                    34
                ]
            }
        ],
        "justification": "Al principio, el calentamiento facilita cada vez más la salida de portadores de las trampas y su recombinación luminosa. Más adelante quedan tan pocos portadores atrapados que la emisión disminuye aunque la temperatura siga subiendo. La competencia entre liberación y agotamiento explica el pico; no hace falta una fuente presente durante la lectura."
    },
    {
        "id": "N_New_05",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "Se completa la lectura térmica de un dosímetro de P1 y se repite el mismo ciclo sin irradiarlo de nuevo. ¿Por qué el segundo registro debería acercarse al de un detector sin irradiar?",
        "options": [
            "La primera lectura ha vaciado las trampas responsables de la señal.",
            "La primera lectura ha destruido los centros emisores del material.",
            "La primera lectura ha reducido permanentemente la sensibilidad óptica.",
            "La primera lectura ha reducido la actividad de la fuente utilizada."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 34,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.2: almacenamiento y lectura; repetición de lectura",
                "pdf_pages": [
                    34,
                    40
                ]
            }
        ],
        "justification": "La lectura es destructiva para la información almacenada: el calentamiento libera y recombina los portadores atrapados. Si el ciclo ha vaciado las trampas que originan el pico y no hay nueva irradiación, no puede repetirse la misma señal. Puede quedar emisión de fondo o residual; no se afirma que toda luz deba ser exactamente nula."
    },
    {
        "id": "N_New_06",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "En la medida de semivida del bario de P3, el contador acumula pulsos desde el inicio. ¿Por qué se restan lecturas consecutivas antes de estudiar la disminución de la actividad?",
        "options": [
            "La diferencia da las cuentas totales, que siguen creciendo durante la medida.",
            "La diferencia elimina el fondo, aunque este se acumule durante cada intervalo.",
            "La diferencia da las cuentas del intervalo, que siguen la actividad de la muestra.",
            "La diferencia corrige la eficiencia, aunque cambie la posición de la muestra."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 71,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.9: registro integral, cuentas por intervalo y ajuste",
                "pdf_pages": [
                    71,
                    72,
                    73,
                    74
                ]
            }
        ],
        "justification": "La lectura integral reúne todos los pulsos anteriores y no decrece con la actividad. Restar dos lecturas permite obtener los pulsos del intervalo entre ambas. Con intervalos iguales, fondo descontado y geometría fija, esas cuentas siguen el decaimiento. La resta entre lecturas no elimina por sí sola el fondo ni corrige la eficiencia."
    },
    {
        "id": "N_New_07",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "La figura compara dos rectas de ln(tasa neta) frente al tiempo, con la misma escala y condiciones de detección constantes. ¿Qué indica que la recta A descienda más deprisa que la B?",
        "options": [
            "La muestra A tiene menor constante de desintegración y mayor semivida.",
            "La muestra A tiene mayor constante de desintegración y menor semivida.",
            "La muestra A tiene mayor constante de desintegración y mayor semivida.",
            "La muestra A tiene menor constante de desintegración y menor semivida."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 73,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.9: pendiente del ajuste y semivida",
                "pdf_pages": [
                    73,
                    74
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I2.1: ley de desintegración",
                "pdf_pages": [
                    5
                ]
            }
        ],
        "justification": "En una desintegración exponencial, la pendiente de ln(tasa neta) es el opuesto de la constante de desintegración. Una pendiente más negativa corresponde a un decaimiento más rápido y a una semivida menor. La altura inicial de cada recta depende de la tasa inicial y no determina la semivida.",
        "figure": {
            "qualitative": true,
            "x_label": "Tiempo",
            "y_label": "ln(tasa neta)",
            "description": "Esquema: A y B parten del mismo nivel; A desciende con una pendiente más negativa que B.",
            "series": [
                {
                    "label": "A",
                    "points": [
                        [
                            0,
                            9
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            3,
                            3
                        ],
                        [
                            4,
                            1
                        ]
                    ]
                },
                {
                    "label": "B",
                    "points": [
                        [
                            0,
                            9
                        ],
                        [
                            1,
                            8
                        ],
                        [
                            2,
                            7
                        ],
                        [
                            3,
                            6
                        ],
                        [
                            4,
                            5
                        ]
                    ]
                }
            ]
        }
    },
    {
        "id": "N_New_08",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "En P3 se registran cuentas netas en intervalos de distinta duración. Suponiendo que la actividad cambia poco dentro de cada intervalo, ¿qué magnitud debe compararse para estudiar el decaimiento?",
        "options": [
            "Las cuentas netas acumuladas desde el inicio de la medida.",
            "Las cuentas netas sin considerar la duración del intervalo.",
            "Las cuentas de fondo por unidad de tiempo en cada intervalo.",
            "Las cuentas netas por unidad de tiempo en cada intervalo."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 71,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.9: elección de intervalos y tratamiento de cuentas",
                "pdf_pages": [
                    71,
                    72,
                    73
                ]
            }
        ],
        "justification": "Un intervalo más largo puede acumular más pulsos aunque la actividad sea menor. La tasa neta separa esa duración de la intensidad de la señal, siempre que se mantengan geometría y eficiencia. Si la actividad varía mucho dentro del intervalo, la tasa obtenida es un promedio temporal y el modelo de ajuste debe tenerlo en cuenta."
    },
    {
        "id": "N_New_09",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "En una medida de semivida del torón, la figura muestra el logaritmo de la corriente registrada. Se supone un decaimiento exponencial más un fondo constante no restado, que aplana la curva al final. Si se ajusta una sola recta incluyendo esa región, ¿cómo se altera la semivida estimada?",
        "options": [
            "Se subestima, porque el fondo hace más negativa la pendiente.",
            "Se conserva, porque el fondo solo cambia la ordenada inicial.",
            "Se sobreestima, porque el fondo hace menos negativa la pendiente.",
            "Se anula, porque el fondo elimina el decaimiento de la muestra."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 84,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.2.4: corriente del torón y ajuste de semivida",
                "pdf_pages": [
                    84,
                    85,
                    86
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I2.1: semivida y constante de desintegración",
                "pdf_pages": [
                    5
                ]
            }
        ],
        "justification": "La corriente total es la suma de una contribución exponencial y un fondo constante, según el supuesto de esta cuestión. Cuando la muestra decae, domina el fondo y el logaritmo tiende a una meseta. Un ajuste global que incluya esa región reduce la magnitud de la pendiente negativa; al inferir la semivida a partir de ella, resulta demasiado larga. La introducción del fondo en este ejemplo es una condición didáctica, no un dato de la tabla del guion. Se debe tratar ese fondo antes de linealizar o incluirlo en un ajuste apropiado; expresar todas las corrientes en una unidad fija solo modifica la ordenada del logaritmo.",
        "figure": {
            "qualitative": true,
            "x_label": "Tiempo",
            "y_label": "ln(corriente medida)",
            "description": "Esquema: al principio la señal desciende casi linealmente; al final se curva y tiende a una meseta por el fondo.",
            "series": [
                {
                    "label": "Señal sin restar fondo",
                    "points": [
                        [
                            0,
                            9
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            2,
                            5.2
                        ],
                        [
                            3,
                            3.8
                        ],
                        [
                            4,
                            3.1
                        ],
                        [
                            5,
                            2.8
                        ],
                        [
                            6,
                            2.7
                        ]
                    ]
                }
            ]
        }
    },
    {
        "id": "N_New_10",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "En la cámara de ionización de P3, la corriente aumenta al subir la tensión y luego llega a una meseta, como en la figura. Manteniendo fija la irradiación y sin multiplicación gaseosa, ¿qué caracteriza esa meseta?",
        "options": [
            "Se recogen prácticamente todas las cargas creadas por la radiación.",
            "Se inicia una descarga gaseosa que amplifica cada ionización primaria.",
            "Se crean más pares primarios al aumentar la energía del campo eléctrico.",
            "Se recombinan prácticamente todas las cargas antes de llegar al electrodo."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 81,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.2.3: curva corriente-tensión y saturación",
                "pdf_pages": [
                    81,
                    82,
                    83
                ]
            }
        ],
        "justification": "Con tensión baja, parte de los pares se recombina antes de recogerse. Al aumentar el campo, la colección mejora hasta recoger prácticamente toda la ionización primaria. En ese régimen la corriente depende de la irradiación y cambia poco con la tensión. La meseta no es la descarga de un Geiger ni implica multiplicación gaseosa.",
        "figure": {
            "qualitative": true,
            "x_label": "Tensión aplicada",
            "y_label": "Corriente",
            "description": "Esquema: la corriente aumenta con la tensión y después permanece en una meseta de saturación.",
            "series": [
                {
                    "label": "Cámara de ionización",
                    "points": [
                        [
                            0,
                            0
                        ],
                        [
                            1,
                            3
                        ],
                        [
                            2,
                            6
                        ],
                        [
                            3,
                            7.5
                        ],
                        [
                            4,
                            8
                        ],
                        [
                            5,
                            8
                        ],
                        [
                            6,
                            8
                        ]
                    ]
                }
            ]
        }
    },
    {
        "id": "N_New_11",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "Después de extraer el bario del generador de P3, la actividad del eluido disminuye, mientras el generador recupera bario. ¿Por qué tienen evoluciones distintas?",
        "options": [
            "El cesio pasa al eluido y deja de producir nuevos núcleos dentro del generador.",
            "El cesio permanece en el generador y sigue produciendo nuevos núcleos de bario.",
            "El bario del eluido se transforma de nuevo en cesio y vuelve al generador.",
            "El eluyente activa el bario del generador mediante nuevas reacciones nucleares."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 62,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.1: generador cesio-bario",
                "pdf_pages": [
                    62,
                    63,
                    64
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.10: regeneración",
                "pdf_pages": [
                    74,
                    75
                ]
            }
        ],
        "justification": "La separación química arrastra el bario y retiene el cesio en la resina. En el eluido, sin una aportación relevante del padre, se observa el decaimiento del bario extraído. En el generador, el cesio retenido produce nueva hija y la actividad se recupera hacia el balance entre producción y desintegración. El bario no vuelve químicamente al generador ni se regenera por activación del eluyente."
    },
    {
        "id": "N_New_12",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "En P4, el Geiger no distingue energías beta por la altura de sus pulsos, pero la amplitud de estos cambia al variar la tensión aplicada. ¿Cómo se explican ambos hechos?",
        "options": [
            "La ionización primaria conserva la energía y su carga depende de la tensión.",
            "La tensión modifica la energía de las betas y la descarga conserva esa energía.",
            "La descarga borra la información de energía y su carga depende de la tensión.",
            "La amplitud mide la energía beta y la tensión solo modifica el número de pulsos."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 91,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.2: descarga y carga espacial; §4.7: amplitud de pulsos",
                "pdf_pages": [
                    91,
                    100
                ]
            }
        ],
        "justification": "Un evento inicia una descarga que se extiende por el contador hasta que los mecanismos de extinción la detienen. La carga final ya no es proporcional a la ionización inicial ni a la energía depositada. Sí depende de las condiciones eléctricas, incluida la tensión. Por eso comparar amplitudes a distintas tensiones no convierte al Geiger en un espectrómetro beta."
    },
    {
        "id": "N_New_13",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "En P4 se mantiene la geometría y se compara la tasa al interponer espesores crecientes de absorbente. La figura muestra una caída seguida de una meseta compatible con el fondo. ¿Qué se estima con el final de esa caída?",
        "options": [
            "El alcance medio de las betas que contribuyen a la señal.",
            "La semivida de los núcleos que emiten la radiación beta.",
            "La eficiencia absoluta del contador para la radiación beta.",
            "El alcance máximo de las betas que contribuyen a la señal."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 104,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.9: absorción y alcance máximo de las betas",
                "pdf_pages": [
                    104,
                    105,
                    106,
                    107
                ]
            }
        ],
        "justification": "La caída corresponde a la desaparición progresiva de la contribución beta al aumentar el absorbente. La intersección de la prolongación de ese tramo con el fondo se utiliza para estimar el alcance máximo, asociado al extremo de mayor energía del espectro. El fondo restante no significa que las betas tengan alcance infinito; incluye contribuciones que el absorbente beta no elimina.",
        "figure": {
            "qualitative": true,
            "x_label": "Espesor de absorbente",
            "y_label": "Tasa de cuentas",
            "description": "Esquema: la tasa disminuye al aumentar el espesor y después permanece al nivel del fondo.",
            "series": [
                {
                    "label": "Medida",
                    "points": [
                        [
                            0,
                            9
                        ],
                        [
                            1,
                            7
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            3,
                            3
                        ],
                        [
                            4,
                            1
                        ],
                        [
                            5,
                            1
                        ],
                        [
                            6,
                            1
                        ]
                    ]
                },
                {
                    "label": "Fondo",
                    "points": [
                        [
                            0,
                            1
                        ],
                        [
                            6,
                            1
                        ]
                    ]
                }
            ]
        }
    },
    {
        "id": "N_New_14",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "En el Geiger de P4, los iones positivos llegan al cátodo mucho después que los electrones al ánodo. ¿Qué problema ayuda a evitar el gas de extinción cuando esos iones alcanzan el cátodo?",
        "options": [
            "La emisión de electrones secundarios que iniciarían descargas posteriores.",
            "La recombinación de pares que reduciría la ionización primaria del gas.",
            "La llegada de iones al cátodo, necesaria para cerrar el circuito eléctrico.",
            "La colección completa de los iones que haría proporcional el tamaño del pulso."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 92,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.3: descarga y gas de extinción",
                "pdf_pages": [
                    92
                ]
            }
        ],
        "justification": "Los iones positivos pueden liberar electrones al neutralizarse en el cátodo y originar nuevos pulsos sin otra partícula incidente. La transferencia de carga a las moléculas del gas de extinción y su forma de disipar energía reducen ese mecanismo. Hay además propagación de la descarga por fotones ultravioletas, pero aquí se pregunta específicamente por el efecto tardío de los iones sobre el cátodo."
    },
    {
        "id": "N_New_15",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "Si se compara el mismo número de betas y de gammas que alcanzan un Geiger de pared fina, ¿por qué suele ser mayor la eficiencia intrínseca para betas en las condiciones de P4?",
        "options": [
            "Las betas depositan siempre toda su energía; los fotones solo depositan una parte.",
            "Las betas originan pulsos proporcionales; los fotones originan pulsos de menor altura.",
            "Las betas ionizan directamente; muchos fotones atraviesan el detector sin interactuar.",
            "Las betas recorren más distancia desde la fuente; los fotones llegan menos al detector."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 101,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.8: eficiencia intrínseca beta y gamma",
                "pdf_pages": [
                    101,
                    102,
                    104
                ]
            }
        ],
        "justification": "Las partículas cargadas que atraviesan la ventana ionizan el gas con facilidad. Un gamma debe interactuar primero y generar una partícula cargada capaz de iniciar una descarga, lo que sucede con menor probabilidad en este montaje. No es necesario absorber toda la energía para contar un pulso. Se especifica el número que alcanza el detector para separar la eficiencia intrínseca del factor geométrico."
    },
    {
        "id": "N_New_16",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "Dos espectros gamma del mismo pico se han adquirido con igual tiempo vivo, geometría y eficiencia. Uno presenta un fotopico más alto y más estrecho. ¿Qué comparación permite decidir cuál registró más eventos de energía completa?",
        "options": [
            "Comparar las alturas máximas de los fotopicos sin considerar su anchura.",
            "Comparar las áreas netas de los fotopicos después de restar el continuo.",
            "Comparar las anchuras de los fotopicos sin considerar su altura máxima.",
            "Comparar las energías centrales de los fotopicos después de calibrar."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 122,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.2: resolución; §5.3: área del fotopico",
                "pdf_pages": [
                    122,
                    123
                ]
            }
        ],
        "justification": "El total de eventos atribuidos al fotopico corresponde a su área neta, no a la altura de un solo canal. Una resolución mejor concentra cuentas en menos canales y puede aumentar la altura sin aumentar el total. El tiempo vivo, la eficiencia y la geometría se fijan para que no introduzcan diferencias adicionales; el continuo bajo el pico debe descontarse."
    },
    {
        "id": "N_New_17",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "En P5 se mide la atenuación de un mismo gamma con varios espesores, pero se prolongan las adquisiciones más débiles. Con geometría y eficiencia constantes, ¿por qué no deben ajustarse directamente las áreas netas sin normalizarlas?",
        "options": [
            "El tiempo adicional aumenta las cuentas y puede ocultar parte de la atenuación.",
            "El tiempo adicional aumenta la energía y puede desplazar el centro del fotopico.",
            "El tiempo adicional cambia el absorbente y puede reducir su densidad efectiva.",
            "El tiempo adicional cambia la semivida y puede aumentar la actividad nuclear."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 122,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.3: atenuación, áreas y tiempos de adquisición",
                "pdf_pages": [
                    122,
                    123,
                    124
                ]
            }
        ],
        "justification": "El área neta cuenta eventos durante toda la adquisición. Debe compararse su tasa, usando el tiempo vivo, para que una exposición más larga no se confunda con mayor transmisión. Para un haz monoenergético en la geometría de atenuación indicada, el logaritmo de esa tasa disminuye con el espesor; el coeficiente de atenuación positivo es el opuesto de la pendiente."
    },
    {
        "id": "N_New_18",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "Al acercar un imán al fotomultiplicador del centelleador de P5, un fotopico se desplaza a canales menores. Con la fuente y el cristal sin cambios, ¿cuál es la explicación más adecuada?",
        "options": [
            "El campo altera las energías nucleares y reduce la energía gamma emitida por la fuente.",
            "El campo altera la atenuación externa y reduce la energía de todos los fotones incidentes.",
            "El campo altera la semivida nuclear y reduce la carga producida por cada desintegración.",
            "El campo altera las trayectorias electrónicas y reduce la ganancia del fotomultiplicador."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 121,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.1.3: efecto del campo magnético",
                "pdf_pages": [
                    121
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I4.1: centelleo y fotomultiplicador",
                "pdf_pages": [
                    14,
                    15
                ]
            }
        ],
        "justification": "La señal se amplifica mediante electrones que viajan entre los dinodos. Un campo magnético puede desviar sus trayectorias, empeorar la colección y reducir la ganancia, de modo que la misma energía depositada produce pulsos menores. Ese desplazamiento instrumental no prueba un cambio en la energía emitida por los núcleos; habría que recuperar o recalibrar la respuesta del detector."
    },
    {
        "id": "N_New_19",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "En P5 puede aparecer un pico a la suma de las energías de los dos gammas emitidos en cascada por el cobalto. ¿Qué condición da lugar a ese pico de suma verdadera?",
        "options": [
            "Ambos gammas producen pulsos separados que después se promedian.",
            "Dos gammas de desintegraciones independientes coinciden en un solo pulso.",
            "Ambos gammas depositan toda su energía dentro del mismo pulso registrado.",
            "El núcleo emite una tercera transición cuya energía coincide con la suma indicada."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 124,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.4: coincidencias de cascada y pico suma",
                "pdf_pages": [
                    124,
                    125
                ]
            }
        ],
        "justification": "Si los dos gammas de la cascada son detectados con absorción completa dentro del intervalo de integración, la electrónica registra un pulso con la suma de sus energías. No implica una nueva transición nuclear. La cercanía de la fuente aumenta la probabilidad de detectar ambos; se distingue este fenómeno de la coincidencia accidental de desintegraciones independientes."
    },
    {
        "id": "N_New_20",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "Un gamma produce un par electrón-positrón dentro del cristal. Sus energías cinéticas se depositan allí, y el positrón se aniquila en reposo. ¿Por qué aparecen picos de escape a energías menores que el fotopico completo?",
        "options": [
            "Uno o ambos fotones de aniquilación se absorben en el cristal y añaden energía.",
            "Uno o ambos fotones de aniquilación salen del cristal sin depositar su energía.",
            "El electrón y el positrón salen del cristal sin depositar ninguna energía cinética.",
            "La energía de creación del par se pierde y nunca puede contribuir a la señal."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 118,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5: espectro de producción de pares; §5.6: escape simple y doble",
                "pdf_pages": [
                    118,
                    129
                ]
            }
        ],
        "justification": "Los picos de escape corresponden a una pérdida bien definida: la energía que transporta uno o ambos fotones de aniquilación fuera del cristal. Si se absorben los dos, además de contenerse las partículas cargadas, se registra la energía completa. Un escape parcial de las partículas cargadas no es la condición descrita y puede dar otras pérdidas, no esos picos bien definidos."
    },
    {
        "id": "N_New_21",
        "bank": "extra",
        "origin": "new",
        "topic": "P6",
        "text": "En P6 se calibran las posiciones de varios fotopicos de energías conocidas. ¿Qué permite hacer esa calibración al medir después una fuente desconocida sin cambiar la ganancia?",
        "options": [
            "Asignar una actividad al área del pico sin calibrar la eficiencia.",
            "Relacionar la anchura de cada pico con una semivida sin registrar su evolución temporal.",
            "Relacionar la altura de cada pico con una energía sin considerar su posición en canales.",
            "Relacionar el canal de cada pico con una energía para identificar posibles emisores."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 143,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, §6.2: calibración energética",
                "pdf_pages": [
                    143,
                    144
                ]
            }
        ],
        "justification": "La calibración determina la relación entre el canal, ligado a la amplitud del pulso, y la energía depositada. Así se estiman energías de picos desconocidos y se contrastan con líneas de radionúclidos. No proporciona por sí sola actividad ni semivida. Mantener la ganancia evita aplicar una relación canal-energía que ya no corresponde al sistema."
    },
    {
        "id": "N_New_22",
        "bank": "extra",
        "origin": "new",
        "topic": "P6",
        "text": "Si domina la fluctuación estadística del número de portadores recogidos, ¿por qué un semiconductor puede ofrecer mejor resolución energética que un centelleador para la misma energía depositada?",
        "options": [
            "Genera más portadores útiles y la fluctuación relativa de la señal es menor.",
            "Genera menos portadores útiles y la fluctuación relativa de la señal es menor.",
            "Genera más portadores útiles y elimina toda contribución del ruido electrónico.",
            "Genera menos portadores útiles y absorbe siempre toda la energía de los gammas."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 13,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I4.1: portadores y resolución de detectores",
                "pdf_pages": [
                    13,
                    14,
                    15
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, §6.3: comparación de resolución",
                "pdf_pages": [
                    144,
                    145
                ]
            }
        ],
        "justification": "La pequeña energía necesaria para producir un par electrón-hueco permite generar muchos portadores por evento. Cuando las fluctuaciones estadísticas dominan, una población mayor tiene menor variación relativa y permite separar mejor energías próximas. La comparación real también depende del ruido, la colección de carga y las propiedades del material; producir muchos portadores no elimina esos factores ni garantiza absorción completa."
    },
    {
        "id": "N_New_23",
        "bank": "extra",
        "origin": "new",
        "topic": "Introducción",
        "text": "Un fotón emitido en una transición electrónica puede tener más energía que otro emitido en una transición nuclear. ¿Cómo se distinguen en este caso los rayos X y los rayos gamma?",
        "options": [
            "Por su energía: el fotón más energético corresponde a un gamma y el menos a un rayo X.",
            "Por su espectro: los rayos X siempre forman un continuo y los gammas siempre líneas.",
            "Por su origen: la transición electrónica produce rayos X y la nuclear produce gammas.",
            "Por su absorción: los rayos X solo producen fotoeléctrico y los gammas solo Compton."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 3,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I1: origen de rayos X y gamma",
                "pdf_pages": [
                    3
                ]
            },
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Rayos X: transiciones electrónicas",
                "pdf_pages": [
                    10,
                    11
                ]
            }
        ],
        "justification": "La distinción se basa en el proceso de emisión, no en un umbral universal de energía. Las transiciones de la corteza originan rayos X característicos y las transiciones entre niveles nucleares originan gammas; sus intervalos de energía pueden solaparse. Ambos son fotones sin carga y sus formas de interacción no se separan por esa etiqueta."
    },
    {
        "id": "N_New_24",
        "bank": "extra",
        "origin": "new",
        "topic": "Introducción",
        "text": "Una transición beta alimenta un único estado del núcleo hijo. Aun así, los electrones emitidos presentan un espectro continuo de energías. ¿Cuál es la razón?",
        "options": [
            "La energía disponible toma cualquier valor porque no se conserva en cada desintegración.",
            "La energía disponible se reparte entre el electrón, el antineutrino y el retroceso nuclear.",
            "La energía disponible depende de la tensión del detector y cambia para cada electrón.",
            "La energía disponible corresponde a distintos niveles aunque el estado final sea único."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 6,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I2.4: espectro beta; P4: desintegración beta",
                "pdf_pages": [
                    6,
                    7,
                    95
                ]
            }
        ],
        "justification": "Incluso fijado el estado final nuclear, el reparto de energía y momento entre las partículas finales puede variar. Por eso la energía del electrón no es única; el antineutrino transporta una parte variable y el núcleo también retrocede. El continuo pertenece a la emisión, no lo crea la tensión del detector ni una violación de la conservación de energía."
    },
    {
        "id": "N_New_25",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "Una fuente puntual se aleja del detector sin interponer absorbentes. Su tasa de cuentas disminuye, pero el decaimiento durante la medida es despreciable. ¿Qué ocurre con la actividad de la fuente?",
        "options": [
            "Permanece igual; disminuye la fracción de radiación que alcanza el detector.",
            "Disminuye; su actividad coincide con la tasa de cuentas registrada por el detector.",
            "Permanece igual; el detector intercepta la misma fracción de emisiones.",
            "No puede saberse; la actividad depende de la eficiencia del detector."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 2,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Ley de desintegración radiactiva: actividad",
                "pdf_pages": [
                    2
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.8: eficiencia y factor geométrico",
                "pdf_pages": [
                    101,
                    102,
                    104
                ]
            }
        ],
        "justification": "La actividad es el número de desintegraciones por unidad de tiempo en la fuente. Alejar el detector reduce el ángulo sólido y la fracción de emisiones que registra, sin modificar ese proceso nuclear. Para inferir actividad desde cuentas se necesitan, entre otros factores, geometría, eficiencia y probabilidad de emisión de la radiación considerada."
    },
    {
        "id": "N_New_26",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "Según la relación de Geiger–Nuttall, dentro de una familia de emisores alfa comparables, las emisiones más energéticas suelen corresponder a semividas mucho menores. ¿Qué explica esa gran sensibilidad a la energía?",
        "options": [
            "La frecuencia de interacción en el detector depende muy fuertemente de la distancia a la fuente.",
            "La energía cinética basta para superar clásicamente la barrera en estas desintegraciones.",
            "La probabilidad de atravesar la barrera por efecto túnel depende muy fuertemente de la energía.",
            "La actividad del núcleo se hace independiente de la barrera cuando aumenta la energía alfa."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 4,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Relación de Geiger–Nuttall; interpretación de Gamow",
                "pdf_pages": [
                    4,
                    8,
                    9
                ]
            }
        ],
        "justification": "La probabilidad de transmisión cuántica a través de la barrera cambia de forma aproximadamente exponencial con los parámetros de esta y la energía. Una alfa más energética encuentra una región clásicamente prohibida menos desfavorable, por lo que la emisión puede ser mucho más probable y la semivida menor. La relación se compara entre emisores pertinentes; no es una afirmación universal sin condiciones sobre cualquier núcleo."
    },
    {
        "id": "N_New_27",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "En el modelo de Gamow, la energía de una alfa emitida puede ser inferior a la altura de la barrera que la confina. ¿Cómo permite la mecánica cuántica que salga del núcleo?",
        "options": [
            "La alfa toma energía prestada durante el cruce y supera la barrera.",
            "La interacción eléctrica desaparece al iniciarse la desintegración y deja libre la partícula.",
            "La temperatura externa eleva la energía nuclear hasta superar la barrera en cada emisión.",
            "La función de onda tiene transmisión a través de la región clásicamente prohibida."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 8,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Modelo de Gamow: transmisión cuántica de la barrera",
                "pdf_pages": [
                    8,
                    9
                ]
            }
        ],
        "justification": "El efecto túnel admite una amplitud de probabilidad al otro lado de una barrera finita aunque la energía sea menor que su máximo. La salida no requiere que la alfa tome prestada energía para saltar clásicamente: se conserva la energía en el estado final. Este es un modelo de emisión nuclear del Tema 5 y no una cuestión sobre la práctica excluida de dispersión."
    },
    {
        "id": "N_New_28",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "En la interpretación de de Broglie del modelo de Bohr, ¿por qué una órbita circular permitida debe contener un número entero de longitudes de onda \\(\\lambda_{\\mathrm{dB}}\\) en su circunferencia?",
        "options": [
            "La onda debe reproducir su fase tras una vuelta y formar un estado estacionario.",
            "La onda debe perder su fase tras una vuelta y emitir continuamente radiación.",
            "La onda debe aumentar su longitud tras una vuelta y compensar la atracción nuclear.",
            "La onda debe reflejarse en el núcleo tras una vuelta y anular el movimiento orbital."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 9,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Modelo de Bohr y condición de de Broglie",
                "pdf_pages": [
                    9,
                    10
                ]
            }
        ],
        "justification": "Para que la onda asociada al electrón sea compatible consigo misma en la órbita, debe cerrar con la misma fase: \\(2\\pi r=n\\lambda_{\\mathrm{dB}}\\), con \\(n\\) entero positivo. Usando \\(\\lambda_{\\mathrm{dB}}=h/p\\), donde \\(p\\) es el módulo del momento lineal, resulta la cuantización \\(L=p\\,r=n\\hbar\\). La condición selecciona estados estacionarios del modelo; no supone pérdida continua de energía por vuelta."
    },
    {
        "id": "N_New_29",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "El espectro de un tubo de rayos X presenta un continuo y unas líneas características del material del blanco. ¿Qué mecanismos originan, respectivamente, esas dos partes?",
        "options": [
            "Transiciones entre niveles electrónicos atómicos y frenado de electrones en el blanco.",
            "Frenado de electrones en el blanco y transiciones entre niveles electrónicos atómicos.",
            "Frenado de electrones en el blanco y transiciones entre niveles energéticos nucleares.",
            "Transiciones entre niveles energéticos nucleares y frenado de electrones en el blanco."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 10,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Rayos X: espectro continuo y líneas características",
                "pdf_pages": [
                    10,
                    11,
                    12
                ]
            }
        ],
        "justification": "El frenado o desviación de los electrones en el campo del blanco permite emitir fotones de energías diversas y produce el continuo de bremsstrahlung. Si se crean vacantes en capas internas, las transiciones electrónicas que las rellenan originan líneas de energías propias del elemento. Cambiar el blanco cambia esas líneas; no convierte el continuo en un conjunto de transiciones nucleares."
    },
    {
        "id": "N_New_30",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "Un gamma sufre dispersión Compton dentro del detector y el fotón dispersado se absorbe después en él. Toda la energía de los electrones queda contenida y se integra en un solo pulso. ¿En qué parte del espectro se registra ese evento?",
        "options": [
            "En el continuo Compton, porque la primera interacción determina siempre la señal.",
            "En un pico de escape, porque toda dispersión Compton elimina un fotón del detector.",
            "En un pico de suma, porque dos interacciones internas corresponden a dos gammas.",
            "En el fotopico de energía completa, porque no ha escapado energía del detector."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 12,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Detección gamma: Compton y absorción",
                "pdf_pages": [
                    12,
                    13
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, I5: absorción completa por interacciones sucesivas",
                "pdf_pages": [
                    16,
                    17
                ]
            }
        ],
        "justification": "El espectro registra la energía total depositada durante el pulso, no solo la primera interacción. Si el fotón dispersado se absorbe y se contienen los electrones, la suma de depósitos es la energía del gamma incidente: el evento contribuye al fotopico. El continuo Compton aparece cuando parte de la energía, habitualmente la del fotón dispersado, escapa. Interacciones sucesivas de un único gamma no son una coincidencia de dos gammas."
    }
];
