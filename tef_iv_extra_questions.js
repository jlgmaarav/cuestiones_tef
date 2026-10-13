// Banco definitivo de TEF IV. Páginas PDF contadas desde 1, incluida la portada.
// Procedencia y referencias de cada cuestión verificadas en los materiales originales.
window.TEF_IV_EXTRA_QUIZ_DATABASE = [
    {
        "id": "N_New_01",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "En P1, el patrón de 40X muestra 100 μm en 800 píxeles. Con el mismo objetivo y configuración, una traza mide 64 píxeles de diámetro. ¿Cuál es el diámetro?",
        "options": [
            "0,80 μm.",
            "80 μm.",
            "8,0 μm.",
            "512 μm."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 30,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §§1.1.10–1.1.11",
                "pdf_pages": [
                    30,
                    31
                ]
            }
        ],
        "justification": "La escala es 100/800 = 0,125 μm/píxel; el diámetro es 64 × 0,125 = 8,0 μm. Usar 10 μm en vez de los diez intervalos del patrón da un factor diez de error. La calibración debe corresponder al mismo objetivo y configuración, no a otro aumento."
    },
    {
        "id": "N_New_02",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "Dos CR39 idénticos se irradian el mismo tiempo con 241Am y se revelan juntos. Entre la fuente y uno se interpone el plástico de P1, que detiene alfas y deja pasar gammas. Solo el otro muestra trazas. ¿Qué conclusión permite el control?",
        "options": [
            "Las trazas observadas se atribuyen a las alfas bajo esas condiciones.",
            "El plástico impide simultáneamente toda radiación alfa y gamma.",
            "El NaOH produce trazas solo donde recibe gammas durante el revelado.",
            "La ausencia de trazas demuestra que no llegó ningún fotón al CR39."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 22,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, irradiación y control del CR39",
                "pdf_pages": [
                    22,
                    24
                ]
            }
        ],
        "justification": "El control mantiene irradiación y revelado y retira la contribución alfa. La ausencia de trazas en él indica que la señal característica procede de alfas. No permite afirmar ausencia de gammas: el diseño del control deja pasar esa contribución."
    },
    {
        "id": "N_New_03",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "En dos CR39 irradiados conjuntamente, uno se revela durante más tiempo con el mismo NaOH y temperatura. En el régimen sin solapamiento ni desaparición de trazas, se observan diámetros mayores. ¿Qué interpretación es correcta?",
        "options": [
            "La mayor duración del revelado ha elevado la energía de las alfas ya absorbidas.",
            "Cada cono más ancho demuestra que llegaron más partículas por una misma trayectoria.",
            "El diámetro aumentado exige un mayor tiempo de irradiación, aunque ambos se irradiaron juntos.",
            "El ataque químico ha ensanchado las zonas dañadas; el diámetro no mide por sí solo la energía alfa."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 19,
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
        "justification": "La traza cónica crece con el tiempo de revelado. Por eso no se atribuye un diámetro mayor a una energía o dosis mayor sin controlar condiciones de ataque, incidencia y calibración. Se especifica un régimen donde sigue siendo posible reconocer las trazas individualmente."
    },
    {
        "id": "N_New_04",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "Para un único tipo de trampa de LiF y una rampa térmica constante, la intensidad primero sube y después baja. ¿Qué ocurre en la parte descendente del pico?",
        "options": [
            "La probabilidad de escape disminuye al aumentar la temperatura del cristal.",
            "El agotamiento de trampas ocupadas domina el aumento de la probabilidad de escape.",
            "Los electrones vuelven a las trampas porque aumenta la energía de activación con la dosis.",
            "La fuente pierde actividad al calentarse el lector, aunque ya fue retirada."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 33,
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
        "justification": "La intensidad tiene la forma n(T) × probabilidad de escape. El factor térmico crece, pero la población disponible disminuye. Tras el máximo, esa disminución domina. La fuente no está suministrando la señal durante la lectura diferida."
    },
    {
        "id": "N_New_05",
        "bank": "extra",
        "origin": "new",
        "topic": "P1",
        "text": "Un chip de P1 da 180 nC en su primera lectura y, sin nueva irradiación, 12 nC al releerlo. Un chip de control da 11 nC. Con el mismo lector y programa térmico, ¿qué explica mejor el resultado?",
        "options": [
            "La primera lectura vació casi todas las trampas que contribuían a la señal medida.",
            "La actividad del 241Am disminuyó quince veces entre ambas lecturas del mismo chip.",
            "La señal mide solo la irradiación entre lecturas, incluso si las trampas anteriores no se vacían.",
            "El control demuestra que la primera lectura tuvo una ganancia quince veces mayor."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 34,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P1, §1.2 y lectura de chips",
                "pdf_pages": [
                    34,
                    40
                ]
            }
        ],
        "justification": "El calentamiento libera la carga atrapada: una segunda lectura sin reirradiación se aproxima a la señal residual o de control. No mide de nuevo la misma dosis acumulada. El resultado es consistente con el vaciado, sin demostrar por sí solo que todas las trampas del material estén vacías."
    },
    {
        "id": "N_New_06",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "En P3 se anotan cuentas acumuladas de 137mBa: C(30 s)=230 y C(60 s)=420. El fondo fue 300 cuentas en 300 s. ¿Cuántas cuentas netas corresponden al intervalo 30–60 s?",
        "options": [
            "190.",
            "120.",
            "160.",
            "390."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 68,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §§3.1.7 y 3.1.9",
                "pdf_pages": [
                    68,
                    72,
                    73
                ]
            }
        ],
        "justification": "El intervalo tiene 420 − 230 = 190 cuentas. El fondo esperado en 30 s es 300 × 30/300 = 30 cuentas. Quedan 190 − 30 = 160. Restar todo el fondo de 300 s o usar directamente las cuentas acumuladas no describe la actividad de ese intervalo."
    },
    {
        "id": "N_New_07",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "La recta de ln(Δ neta) frente a t de 137mBa tiene pendiente m = (−4,50 ± 0,15)×10⁻³ s⁻¹. Usando propagación de error de primer orden, ¿cuál es la semivida?",
        "options": [
            "(222 ± 7) s.",
            "(154 ± 5) s.",
            "(154 ± 0,15) s.",
            "(4,50 ± 0,15)×10⁻³ s."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 73,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.9, ecuación (3.9)",
                "pdf_pages": [
                    73,
                    74
                ]
            }
        ],
        "justification": "T₁/₂ = −ln 2/m = 154,03 s y σ(T) = (ln 2/m²) σ(m) = 5,13 s. La vida media 1/λ daría unos 222 s y es distinta de la semivida. El error relativo es σ(m)/|m|, no el mismo error absoluto que el de la pendiente.",
        "figure": {
            "x_label": "t (s)",
            "y_label": "ln(Δ neta / 1 cuenta)",
            "series": [
                {
                    "label": "Recta ajustada",
                    "points": [
                        [
                            0,
                            5.4
                        ],
                        [
                            60,
                            5.13
                        ],
                        [
                            120,
                            4.86
                        ],
                        [
                            180,
                            4.59
                        ],
                        [
                            240,
                            4.32
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
        "text": "En la recuperación del 137mBa se registran 120 cuentas en 15 s y, más tarde, 240 en 30 s. El fondo constante es 2 s⁻¹ y la geometría no cambia. ¿Qué indican las tasas netas?",
        "options": [
            "La actividad se duplicó, porque las cuentas aumentaron de 120 a 240.",
            "La segunda tasa neta es la mitad, porque el intervalo dura el doble.",
            "Ambos intervalos dan 8 s⁻¹ de actividad neta, sin necesidad de corregir fondo.",
            "Ambos intervalos dan 6 s⁻¹; esos datos no prueban un aumento de actividad."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 74,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.1.10",
                "pdf_pages": [
                    74,
                    75
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.4.2",
                "pdf_pages": [
                    15,
                    16
                ]
            }
        ],
        "justification": "Las dos tasas brutas son 120/15 = 240/30 = 8 s⁻¹. Restando 2 s⁻¹ de fondo quedan 6 s⁻¹ en ambos intervalos. La comparación requiere normalizar la duración; la actividad de la fuente no es idéntica a la tasa detectada sin corregir eficiencia y geometría."
    },
    {
        "id": "N_New_09",
        "bank": "extra",
        "origin": "new",
        "topic": "P3",
        "text": "La gráfica muestra ln(I/Iref) del torón, con una corriente de fondo constante no restada. La curva se aplana a tiempos largos. Si se obliga a ajustar una recta a toda la curva como si el fondo fuera cero, ¿qué sesgo se espera?",
        "options": [
            "Mayor |pendiente| y una semivida subestimada.",
            "La misma pendiente; el fondo solo cambia la ordenada inicial.",
            "Menor |pendiente| y una semivida sobreestimada.",
            "Pendiente positiva y una semivida negativa en todos los casos."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 84,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.2.4",
                "pdf_pages": [
                    84,
                    85,
                    86
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
        "justification": "Para I(t)=S₀ exp(−λt)+B, d ln I/dt = −λS/(S+B). Su magnitud disminuye cuando el fondo domina: los puntos finales quedan por encima de la recta del decaimiento puro. El ajuste único da una pendiente menos negativa y T₁/₂ = ln 2/|m| demasiado grande. La gráfica es un ejemplo simulado, no una medida del guion.",
        "figure": {
            "x_label": "t (s)",
            "y_label": "ln(I/Iref)",
            "series": [
                {
                    "label": "Señal + fondo (ejemplo)",
                    "points": [
                        [
                            0,
                            2.1972
                        ],
                        [
                            60,
                            1.6094
                        ],
                        [
                            120,
                            1.0986
                        ],
                        [
                            180,
                            0.6931
                        ],
                        [
                            240,
                            0.4055
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
        "text": "En la cámara de ionización de P3, a geometría fija, la gráfica I(U) alcanza una meseta. Dentro de la región de cámara de ionización, ¿qué significa aumentar U de 375 a 450 V sin que aumente I?",
        "options": [
            "La recogida ya es prácticamente completa; aumentar U no crea más pares primarios.",
            "Ha comenzado una descarga Geiger cuya carga ya no depende de la radiación.",
            "La actividad de la fuente disminuye justo lo necesario para compensar el aumento de U.",
            "La meseta prueba que la radiación dejó de ionizar el aire del recinto."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 81,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P3, §3.2.3",
                "pdf_pages": [
                    81,
                    82,
                    83
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.1",
                "pdf_pages": [
                    90
                ]
            }
        ],
        "justification": "A bajas tensiones parte de las cargas se recombina; aumentar el campo mejora su recogida. En saturación se recoge prácticamente toda la carga producida por la radiación y la corriente se estabiliza. Se explicita la región de trabajo para no confundir esta meseta con multiplicación proporcional o descarga Geiger.",
        "figure": {
            "x_label": "U (V)",
            "y_label": "I / (10⁻¹¹ A)",
            "series": [
                {
                    "label": "Corriente (ejemplo)",
                    "points": [
                        [
                            0,
                            0
                        ],
                        [
                            75,
                            0.25
                        ],
                        [
                            150,
                            0.5
                        ],
                        [
                            225,
                            0.75
                        ],
                        [
                            300,
                            0.9
                        ],
                        [
                            375,
                            1
                        ],
                        [
                            450,
                            1
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
        "text": "Tras retirar todos los hijos de un sistema ideal padre→hijo de rama 100 %, cerrado y con actividad del padre constante, ¿qué fracción de la actividad de equilibrio tiene el hijo después de tres de sus semividas?",
        "options": [
            "1/8.",
            "7/8.",
            "3/4.",
            "1/2."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 63,
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
        "justification": "La recuperación sigue A₂/A₁ = 1 − exp(−λ₂t). A las tres semividas, exp(−λ₂t)=2⁻³=1/8 y la fracción es 7/8. El 1/8 es lo que falta para el equilibrio. La igualdad no se alcanza exactamente en un tiempo finito; el modelo supone padre constante, rama 100 % y ausencia de hijos iniciales."
    },
    {
        "id": "N_New_12",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "En P4 se ajustan las dos regiones de la gráfica indicada: y = 6,0 − 0,020 e y y = 2,0, con e en mg/cm² e y = ln[r/(1 min⁻¹)]. Si Emax = 1,842 R + 0,295 con R en g/cm², ¿qué energía máxima resulta?",
        "options": [
            "0,295 MeV.",
            "0,737 MeV.",
            "0,663 MeV.",
            "368,695 MeV."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 106,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.9, ecuación (4.5)",
                "pdf_pages": [
                    106,
                    107
                ]
            }
        ],
        "justification": "El cruce cumple 6 − 0,020e = 2, por lo que R = 200 mg/cm² = 0,200 g/cm². Emax = 1,842 × 0,200 + 0,295 = 0,6634 MeV, dentro del intervalo menor de 0,8 MeV donde se usa la fórmula. 368,695 es el error de no convertir mg a g; el alcance no es un espesor hemirreductor.",
        "figure": {
            "x_label": "e (mg/cm²)",
            "y_label": "ln[r/(1 min⁻¹)]",
            "series": [
                {
                    "label": "Tramo descendente",
                    "points": [
                        [
                            0,
                            6
                        ],
                        [
                            100,
                            4
                        ],
                        [
                            200,
                            2
                        ]
                    ]
                },
                {
                    "label": "Fondo",
                    "points": [
                        [
                            150,
                            2
                        ],
                        [
                            200,
                            2
                        ],
                        [
                            250,
                            2
                        ],
                        [
                            300,
                            2
                        ]
                    ]
                }
            ]
        }
    },
    {
        "id": "N_New_13",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "Una medida del alcance beta en Al da R = 216 mg/cm². Si ρAl = 2,70 g/cm³, ¿cuál es el alcance lineal correspondiente?",
        "options": [
            "0,080 mm.",
            "8,0 mm.",
            "0,583 mm.",
            "0,80 mm."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 104,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §4.9",
                "pdf_pages": [
                    104,
                    105,
                    107
                ]
            }
        ],
        "justification": "El espesor másico es ρx. Se convierte R = 0,216 g/cm² y x = 0,216/2,70 = 0,080 cm = 0,80 mm. Multiplicar por la densidad en lugar de dividir o mezclar mg y g produce unidades y valores incorrectos."
    },
    {
        "id": "N_New_14",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "En el Geiger de P4, las betas de dos fuentes dan amplitudes semejantes a 600 V. Al aumentar a 700 V crece la amplitud en ambas. ¿Qué se puede concluir?",
        "options": [
            "La amplitud depende del voltaje; la coincidencia a 600 V no implica igual espectro beta.",
            "La coincidencia a 600 V demuestra que ambas fuentes tienen la misma energía máxima.",
            "El aumento a 700 V demuestra que las dos fuentes aumentaron su actividad.",
            "La región Geiger permite calibrar energía beta mediante la amplitud individual."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 91,
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
        "justification": "La descarga Geiger termina por apantallamiento, perdiendo la proporcionalidad con la ionización inicial. Ambas fuentes pueden tener energías máximas muy distintas y dar impulsos similares. La respuesta al cambio de tensión es del detector; para comparar las betas se usan, por ejemplo, curvas de absorción."
    },
    {
        "id": "N_New_15",
        "bank": "extra",
        "origin": "new",
        "topic": "P4",
        "text": "Una fuente emite en promedio una gamma por desintegración. Su actividad actual es 1000 Bq y la fracción geométrica que alcanza el detector es 0,050. En 60 s se registran 150 cuentas netas, con pérdidas por tiempo muerto despreciables. ¿Cuál es la eficiencia intrínseca de contaje?",
        "options": [
            "0,25 %.",
            "0,50 %.",
            "5,0 %.",
            "20 %."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 101,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §§4.8 y 4.8.3–4.8.5",
                "pdf_pages": [
                    101,
                    102,
                    103,
                    104
                ]
            }
        ],
        "justification": "Llegan 1000 × 1 × 60 × 0,050 = 3000 fotones. La eficiencia intrínseca es 150/3000 = 0,05 = 5 %. Dividir por todas las emisiones daría 0,25 %, la eficiencia absoluta de esa geometría. El enunciado especifica actividad actual, probabilidad de emisión, cuentas netas y pérdidas despreciables."
    },
    {
        "id": "N_New_16",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "Dos fotopicos gaussianos de la misma energía se miden con iguales canales y tiempo vivo, tras restar el continuo. El de A tiene altura doble y FWHM mitad que el de B. ¿Qué relación tienen sus áreas netas?",
        "options": [
            "El área de A es doble, como su altura máxima.",
            "Son iguales: el producto altura × FWHM es el mismo.",
            "El área de A es la mitad, como su anchura.",
            "El área de A es cuatro veces mayor por su mejor resolución."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 122,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §§5.2–5.3",
                "pdf_pages": [
                    122,
                    123
                ]
            }
        ],
        "justification": "Para un pico gaussiano, área = altura × σ × √(2π) y FWHM = 2√(2 ln 2) σ. Por ello el área es proporcional a altura × FWHM: 2H × Γ/2 = HΓ. La altura no mide por sí sola el total de cuentas. Igual área detectada no implica igual emisión sin controlar eficiencia y geometría."
    },
    {
        "id": "N_New_17",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "En P5, dos adquisiciones de un fotopico dan 1200 cuentas netas en 60 s sin plomo y 1200 en 120 s con espesor másico e = 6,60 g/cm². A geometría fija y con pérdidas despreciables, ¿cuál es el coeficiente de atenuación másico?",
        "options": [
            "0,105 cm²/g.",
            "0 cm²/g.",
            "−0,105 cm²/g.",
            "0,210 cm²/g."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 122,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.3, ecuación (5.4)",
                "pdf_pages": [
                    122,
                    123,
                    124
                ]
            }
        ],
        "justification": "Las tasas son 20 y 10 s⁻¹. El cociente es 1/2 y μ/ρ = −ln(1/2)/6,60 = 0,105 cm²/g. En ln(tasa) frente a espesor másico la pendiente es NEGATIVA y vale −μ/ρ: el coeficiente positivo es su opuesto. Igualar cuentas sin normalizar tiempos ocultaría la atenuación."
    },
    {
        "id": "N_New_18",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "Al colocar el imán sobre el PMT de P5, el fotopico de 137Cs pasa del canal 900 al 720 y baja la amplitud observada. La electrónica restante no cambia. ¿Qué explica el desplazamiento?",
        "options": [
            "La energía emitida por 137Cs disminuye en proporción 720/900 por el campo magnético.",
            "Se ha añadido una lámina absorbente que resta siempre el 20 % de energía a cada gamma.",
            "El imán aumenta la población de trampas termoluminiscentes del NaI(Tl).",
            "Disminuye la multiplicación del PMT; no ha cambiado la energía nuclear del gamma."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 121,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.1.3",
                "pdf_pages": [
                    121
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
        "justification": "El campo desvía los electrones entre dínodos y reduce la recogida y multiplicación. Para el mismo depósito de energía se obtiene un impulso menor. La calibración canal-energía anterior deja de servir mientras esté el imán; no cambia la transición del 137Cs."
    },
    {
        "id": "N_New_19",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "Con electrónica lineal y coincidencias accidentales despreciables, dos gammas de 60Co de 1,17 y 1,33 MeV depositan toda su energía dentro del mismo intervalo de integración. ¿Qué registra el multicanal?",
        "options": [
            "Dos impulsos separados, uno de 1,17 y otro de 1,33 MeV.",
            "Un impulso correspondiente al promedio, 1,25 MeV.",
            "Un impulso correspondiente a 2,50 MeV.",
            "Un impulso correspondiente a la diferencia, 0,16 MeV."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 124,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, §5.4",
                "pdf_pages": [
                    124,
                    125
                ]
            }
        ],
        "justification": "Las cargas de ambos depósitos se integran en un solo impulso cuando no se resuelven temporalmente. La amplitud representa la suma 1,17 + 1,33 = 2,50 MeV. No se trata de una tercera transición de 60Co y tampoco de una coincidencia entre desintegraciones distintas."
    },
    {
        "id": "N_New_20",
        "bank": "extra",
        "origin": "new",
        "topic": "P5",
        "text": "Un gamma de 3,00 MeV crea un par dentro del cristal. Las partículas cargadas se frenan allí y solo uno de los dos fotones de aniquilación escapa. ¿Qué energía se registra?",
        "options": [
            "1,978 MeV.",
            "2,489 MeV.",
            "0,511 MeV.",
            "1,500 MeV."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 118,
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
        "justification": "La energía no depositada es la del único fotón que escapa: 0,511 MeV. Se registra 3,00 − 0,511 = 2,489 MeV, escape simple. Restar 1,022 MeV correspondería a la fuga de ambos fotones. Las condiciones sobre recogida de las partículas cargadas excluyen otras pérdidas."
    },
    {
        "id": "N_New_21",
        "bank": "extra",
        "origin": "new",
        "topic": "P6",
        "text": "En un CZT la calibración es E(c) = 0,80c + 20 keV. Un pico centrado en c = 800 tiene FWHM = 20 canales. ¿Cuál es su resolución energética relativa?",
        "options": [
            "2,50 %.",
            "3,03 %.",
            "5,45 %.",
            "2,42 %."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 143,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, §§6.2–6.3",
                "pdf_pages": [
                    143,
                    144,
                    145
                ]
            }
        ],
        "justification": "La energía central es 0,80 × 800 + 20 = 660 keV; la FWHM en energía es 0,80 × 20 = 16 keV, porque el término independiente se cancela en una diferencia. R = 100 × 16/660 = 2,42 %. El cociente 20/800 solo sería exacto con ordenada de calibración nula."
    },
    {
        "id": "N_New_22",
        "bank": "extra",
        "origin": "new",
        "topic": "P6",
        "text": "Dos gammas depositan 300 y 600 keV en un CZT con igual energía media por par y recogida completa. La electrónica es lineal. ¿Qué relación se espera entre las cargas y las amplitudes?",
        "options": [
            "La carga y la amplitud del segundo impulso son aproximadamente dobles.",
            "La carga es doble, pero la amplitud es igual por apantallamiento Geiger.",
            "La amplitud es doble, pero ambos sucesos crean el mismo número de pares.",
            "La carga y la amplitud son aproximadamente cuatro veces mayores."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 131,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P6, introducción",
                "pdf_pages": [
                    131,
                    132
                ]
            },
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Detector semiconductor",
                "pdf_pages": [
                    15
                ]
            }
        ],
        "justification": "El número de pares electrón-hueco es Edepositada/w y la carga recogida es proporcional a ese número. Si se mantiene la recogida y la ganancia, duplicar el depósito duplica carga y amplitud. Las condiciones excluyen saturación, atrapamiento distinto y multiplicación Geiger."
    },
    {
        "id": "N_New_23",
        "bank": "extra",
        "origin": "new",
        "topic": "Introducción",
        "text": "Se observa un fotón de 80 keV por una transición nuclear y otro de 120 keV por una transición electrónica atómica. Según su origen, ¿cómo se clasifican?",
        "options": [
            "El de 80 keV es un rayo X y el de 120 keV es gamma.",
            "Ambos son gamma porque su energía supera decenas de keV.",
            "El de 80 keV es gamma y el de 120 keV es un rayo X.",
            "Ambos son rayos X porque sus energías son menores de 511 keV."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 3,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.1",
                "pdf_pages": [
                    3
                ]
            },
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Rayos X y espectros gamma",
                "pdf_pages": [
                    11,
                    12
                ]
            }
        ],
        "justification": "La clasificación se hace por el mecanismo de producción: transición nuclear para gamma y transición electrónica para rayos X. Sus rangos de energía se solapan; ni el orden entre 80 y 120 keV ni un umbral de energía distinguen ambos orígenes."
    },
    {
        "id": "N_New_24",
        "bank": "extra",
        "origin": "new",
        "topic": "Introducción",
        "text": "En una desintegración β⁻ de un núcleo de número másico A y número atómico Z, ¿qué ocurre con el núcleo y por qué hay un continuo de energías beta aun fijando el estado final?",
        "options": [
            "A no cambia, Z disminuye en uno y la energía se reparte entre beta, neutrino y retroceso.",
            "A no cambia, Z aumenta en uno y la energía se reparte entre beta, antineutrino y retroceso.",
            "A disminuye en uno, Z no cambia y la beta lleva toda la energía disponible.",
            "A no cambia, Z aumenta en uno y el continuo nace solo de pérdidas en el aire exterior."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Guiones de prácticas de Física Nuclear.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 6,
        "references": [
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "Introducción, §I.2.4",
                "pdf_pages": [
                    6,
                    7
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, ecuación (4.1)",
                "pdf_pages": [
                    95
                ]
            }
        ],
        "justification": "Un neutrón se transforma en protón, electrón y antineutrino. Se conserva A y aumenta Z. La cinemática de varios productos permite un reparto variable de la energía incluso para una misma transición; el continuo existe antes de cualquier pérdida de la beta en aire."
    },
    {
        "id": "N_New_25",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "Una fuente tenía actividad inicial de 0,20 μCi y han transcurrido exactamente dos semividas. Con 1 Ci = 3,7×10¹⁰ Bq, ¿cuál es su actividad actual?",
        "options": [
            "1850 Bq.",
            "3700 Bq.",
            "7400 Bq.",
            "925 Bq."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 2,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Actividad y ley de la desintegración",
                "pdf_pages": [
                    2
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P4, §§4.8.2 y 4.8.4",
                "pdf_pages": [
                    102,
                    103
                ]
            }
        ],
        "justification": "Tras dos semividas queda 1/4 de la actividad: 0,20/4 = 0,050 μCi. Como 1 μCi = 3,7×10⁴ Bq, resulta 1850 Bq. Es una actividad de desintegración, no una tasa detectada: esta última requiere probabilidades de emisión, geometría y eficiencia."
    },
    {
        "id": "N_New_26",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "Para dos emisores alfa del mismo grupo se usa λ = K exp(−B/√E), con K y B constantes positivas. Al pasar de E₁ a E₂ > E₁ se obtiene ln(λ₂/λ₁) = ln 8. ¿Cómo se comparan sus semividas?",
        "options": [
            "T₂ = 8T₁.",
            "T₂ = T₁/ln 8.",
            "T₂ = T₁/8.",
            "T₂ = T₁ − ln 8."
        ],
        "correct_index": 2,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 4,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Ley de Geiger–Nuttall",
                "pdf_pages": [
                    4
                ]
            }
        ],
        "justification": "La relación logarítmica implica λ₂/λ₁ = 8. Como T₁/₂ = ln 2/λ, el emisor con λ ocho veces mayor tiene semivida ocho veces menor. Esto trata de la probabilidad de emisión nuclear, no de frenado o dispersión de alfas en P2. La comparación exige K y B del mismo grupo."
    },
    {
        "id": "N_New_27",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "En el modelo de Gamow, dos estados alfa tienen la misma frecuencia de intentos ν. Sus probabilidades de transmisión son P y 2P, ambas mucho menores que uno. Si λ = νP, ¿cómo cambia la semivida?",
        "options": [
            "Se duplica porque una transmisión mayor retiene más tiempo a la alfa.",
            "No cambia: la transmisión solo modifica la energía final, no λ.",
            "Se reduce a la mitad porque cada intento aporta energía hasta superar la barrera.",
            "Se reduce a la mitad sin que la alfa deba superar clásicamente la barrera."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 8,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Transmisión por efecto túnel",
                "pdf_pages": [
                    8,
                    9
                ]
            }
        ],
        "justification": "A frecuencia fija, duplicar la transmisión duplica λ y divide T₁/₂ por dos. La emisión subbarrera se explica por transmisión cuántica, sin acumulación de energía entre intentos ni necesidad de superar la barrera clásicamente. Es teoría de emisión radiactiva, no una cuestión del montaje de P2."
    },
    {
        "id": "N_New_28",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "En una órbita permitida del modelo de Bohr, la circunferencia contiene tres longitudes de onda de de Broglie. Usando λdB = h/p, ¿cuál es el momento angular pr?",
        "options": [
            "3ℏ.",
            "3h.",
            "ℏ/3.",
            "0."
        ],
        "correct_index": 0,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 9,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Modelo atómico de Bohr y de Broglie",
                "pdf_pages": [
                    9,
                    10
                ]
            }
        ],
        "justification": "La condición es 2πr = 3λdB = 3h/p. De ella se obtiene pr = 3h/(2π) = 3ℏ. Confundir h y ℏ pierde el factor 2π. Se pregunta por el modelo de Bohr, sin interpretar los orbitales cuánticos como trayectorias reales."
    },
    {
        "id": "N_New_29",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "Un tubo de rayos X con el mismo ánodo pasa de 40 a 60 kV. Se supone que ambas tensiones superan el umbral de excitación de la línea característica considerada. ¿Qué cambia en las energías del espectro?",
        "options": [
            "El extremo del continuo permanece fijo; la línea característica pasa a energía 1,5 veces mayor.",
            "El extremo del continuo pasa de 40 a 60 keV; la energía de la línea característica permanece fija.",
            "El extremo del continuo y todas las líneas características pasan a energía 1,5 veces mayor.",
            "El extremo del continuo pasa de 40 a 60 keV; desaparecen necesariamente las líneas características."
        ],
        "correct_index": 1,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 10,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Rayos X",
                "pdf_pages": [
                    10,
                    11,
                    12
                ]
            }
        ],
        "justification": "Un electrón acelerado gana eU, energía máxima que puede ceder a un único fotón de frenado. Las líneas proceden de diferencias entre niveles del mismo ánodo, que no cambian al aumentar U. Pueden cambiar intensidades, pero no sus energías; el umbral explícito evita confundir energía de línea y posibilidad de excitarla."
    },
    {
        "id": "N_New_30",
        "bank": "extra",
        "origin": "new",
        "topic": "Tema 5",
        "text": "Un gamma de 0,662 MeV se dispersa a 180° y el fotón resultante escapa del cristal. El electrón queda completamente frenado dentro. Con mec² = 0,511 MeV y E′ = E/(1+2E/mec²), ¿qué energía registra el detector?",
        "options": [
            "0,184 MeV.",
            "0,662 MeV.",
            "0,511 MeV.",
            "0,478 MeV."
        ],
        "correct_index": 3,
        "source_file": "Pregunta nueva · Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
        "source_reference": "Elaboración propia a partir de los materiales docentes; no procede de un examen",
        "matched_page": 12,
        "references": [
            {
                "document": "Física Cuántica - Tema 5 - Núcleos y átomos.pdf",
                "section": "Espectros gamma y borde Compton",
                "pdf_pages": [
                    12,
                    13
                ]
            },
            {
                "document": "Guiones de prácticas de Física Nuclear.pdf",
                "section": "P5, ecuaciones (5.1)–(5.2)",
                "pdf_pages": [
                    117,
                    118
                ]
            }
        ],
        "justification": "El fotón que escapa tiene E′ = 0,662/(1+2×0,662/0,511) = 0,184 MeV. El depósito es E−E′ = 0,478 MeV, borde Compton. Si ese fotón se absorbiera después en el mismo cristal y dentro de la integración temporal, el suceso iría al fotopico de 0,662 MeV."
    }
];
