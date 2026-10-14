# Auditoría del banco de Física Nuclear de TEF IV

Auditoría inicial realizada el 13 de octubre de 2026 desde bb32188ca72d981703e3d392cd62d0189f04bd23 (main). La revisión conceptual posterior parte de la última versión de GitHub consultada, d43c1047193ac1b5799a610299921389809bdb04 (main), con las correcciones de opciones y notación ya integradas.

## Resultado

Los archivos anteriores contenían 84 registros: 38 derivados de exámenes, 16 antiguos de guiones ocultos y 30 nuevos activos. Ahora los archivos contienen exclusivamente 68: 38 de exámenes en tef_iv_questions.js y 30 nuevos en tef_iv_extra_questions.js. El origen y el bloque están indicados explícitamente en cada registro, sin inferirlos de su identificador.

| Convocatoria | Cuestiones activas | Formato y respaldo |
| --- | ---: | --- |
| 2021–2022 | 10 | Test original, contrastado con la clave oficial de Exámenes.pdf, p. 4 |
| 2023 | 9 | Adaptaciones de desarrollo, recopilación p. 1 |
| 2022–2023 | 7 | Adaptaciones de desarrollo, recopilación pp. 2–3 |
| 2018 | 7 | Adaptaciones de partes de P1, P3, P4, P5 y P6, recopilación p. 4 |
| 2017 | 5 | Adaptaciones de P1, P3, P4, P5 y P5–P6, recopilación p. 5 |
| Nuevas | 30 | Elaboración propia desde guiones, introducción y Tema 5 |

Las siete adaptaciones de 2018 no significan siete enunciados numerados en el original: los desarrollos sobre detector y espectro se dividen en subcuestiones identificadas. Las adaptaciones conservan el tema preguntado y explicitan condiciones para obtener una respuesta única. En N_Ex_22_04 se retira la razón numérica que había añadido la primera adaptación: las anotaciones únicamente describen una señal menor de pechblenda y proponen prolongar su adquisición, sin indicar un factor concreto.

## Lectura y límites de los originales

Se extrajo el texto de los cuatro PDF y se revisaron visualmente las páginas escaneadas 2–5 de la recopilación y la clave de la p. 4 de Exámenes.pdf. Las páginas se numeran desde 1, incluida la portada. En los guiones, la numeración impresa comienza en la p. 3 del PDF, por lo que habitualmente hay una diferencia de dos páginas.

La p. 2 de la recopilación dice «Falta otra hoja». Por tanto, las 38 cuestiones cubren los enunciados disponibles que no pertenecen a P2, sin afirmar que contienen todo el examen de 2022–2023. Los textos de respuesta superpuestos en pp. 2–3 son anotaciones: no consta una clave oficial para esos desarrollos. En la aplicación las 28 adaptaciones se distinguen de las diez cuestiones con clave y sus respuestas se justifican con los materiales docentes.

## Correcciones físicas y de procedencia

- N_Ex_22_01: NaOH es una base. Se corrige el término «ácido» del original escaneado y se mantiene el mecanismo de revelado selectivo de CR39.
- N_Ex_23_08 y N_Ex_22_05: altura = ordenada o cuentas del canal máximo; área neta = cuentas atribuidas al fotopico tras restar el continuo. Se distinguen anchura/resolución, tamaño de canal, tiempo vivo, eficiencia y geometría. La inferencia de emisión también requiere probabilidad de emisión.
- N_Ex_22_04: la intensidad relativa descrita en las anotaciones es una situación experimental concreta. Prolongar una adquisición aumenta las cuentas de un pico común; no garantiza igualar todo el espectro ni restaurar una cadena.
- N66 y N_Ex_23_07: se mantiene la respuesta de la clave de 2021–2022, pero se matiza la estimación de 5000 años del guion. No es un tiempo universal de regeneración de la cadena: importan los descendientes retirados, intermediarios como 230Th, cantidades iniciales y retención del radón en un sistema cerrado.
- N6: la clave c se conserva en el montaje de la fuente encapsulada. La aniquilación en la propia fuente no se presenta como regla universal para positrones que pudieran escapar.
- Referencias: el tratamiento y ajuste de la semivida del bario está en §3.1.9, PDF pp. 69–74; §3.1.8 trata del depósito del eluyente. Se revisaron individualmente las referencias de todas las cuestiones y se separó la página del examen de las páginas que sustentan la explicación.
- Signos y unidades: la pendiente de ln(tasa) frente al espesor es negativa; el coeficiente de atenuación es su opuesto positivo. La resolución con calibración E=ac+b se calcula en energías, sin omitir b cuando es relevante.

## Exclusión de P2 y nuevas cuestiones

No se almacenan las seis cuestiones históricas de P2 (N2, N22, N_Ex_23_02, N_Ex_22_08, N_Ex_18_02, N_Ex_17_02). Los 16 registros N_Ex_N_01–16 ocultos y las 30 versiones anteriores N_Ex_N_17–46 se retiraron del archivo. Incluye la retirada efectiva de N_Ex_N_39 y N_Ex_N_40 de Rutherford.

Las nuevas cuestiones tienen identificadores N_New_01–30 y nunca se etiquetan como exámenes. Distribución: P1 (5), P3 (6), P4 (4), P5 (5), P6 (2), introducción (2), Tema 5 (6). Las posiciones de respuesta antes de barajar se distribuyen 8/7/8/7. Las cuestiones sobre emisión alfa y efecto túnel proceden de teoría de desintegración; no incluyen el montaje, el frenado ni la dispersión de P2.

### Correspondencia con el estilo de los exámenes

Los desarrollos disponibles piden explicar curvas de termoluminiscencia, trazas CR39, amplitudes Geiger, señales de centelleo, medidas de semivida, equilibrio de cadenas y espectros. La pregunta sobre la expresión de semivida solicita explicar su signo y dependencia, sin resolver un problema con datos numéricos. La primera revisión de las nuevas introdujo demasiados ejercicios de cuentas y no reprodujo ese enfoque.

Se reescriben las 30 nuevas para pedir mecanismos, interpretación de medidas y comparaciones cualitativas. No presentan magnitudes numéricas para operar ni respuestas que sean resultados de cuentas. Se mantienen relaciones físicas cuando sirven para entender una dependencia, como pendiente y semivida o la condición de onda estacionaria de Bohr. Las cuatro figuras son esquemas cualitativos de pendientes de decaimiento, fondo, saturación de corriente y absorción beta, con ejes sin cifras, leyendas y descripciones accesibles. Sus coordenadas internas solo dibujan las formas y no se presentan como mediciones o tablas.

## Comprobación funcional

La suite sin dependencias se ejecuta con node --test tests/quiz.test.cjs. Comprueba 16 casos, incluido un centenar de barajados y la correspondencia entre cada opción válida y su texto después de barajar. Se verifica que las nuevas no contienen datos numéricos ni consignas de cálculo, y que sus figuras se muestran sin cifras o tablas y con descripciones y leyendas. Las pruebas estructurales de referencias comprueban rangos de página; la correspondencia con los apartados se revisa documentalmente.

El examen de TEF IV dispone de una hora. Se comprueba que sigue abierto después de media hora, conserva el plazo al recargar y entrega automáticamente al cumplirse la hora. Las sesiones anteriores todavía en curso reciben la ampliación una sola vez, sin perder respuestas ni tiempo consumido. Los resultados ya entregados conservan su duración, y TEF III mantiene sus 30 minutos.

Se comprueban las tres sesiones independientes (práctica anterior, práctica nueva y examen), la reconstrucción desde datos vigentes, el rechazo de identificadores retirados o de otro bloque, la actualización de opciones modificadas, el plazo real del examen y la recuperación del resumen final. Las claves v3/v4/v5 no se leen como v6; los rankings y salas también usan v6 para separar las notas de la versión numérica anterior. El banco de TEF III se verifica con una huella SHA-256 de sus 101 registros y se ejercitan sus grupos y la corrección de examen.

### Revisión de las alternativas tras detectar pistas por longitud

Las alternativas de las 30 nuevas conceptuales se redactan con extensión y estructura comparables. Las explicaciones adicionales quedan en la justificación; los distractores representan confusiones entre mecanismos, magnitudes medidas y factores instrumentales. Se mantiene la distribución de posiciones 8/7/8/7.

La comprobación de pistas calcula la nota esperada exacta de elegir un extremo de longitud, contando los empates con la probabilidad que les da el barajado. Se ensayan caracteres y palabras, y tanto la opción más larga como la más corta. Esto comprueba una estrategia superficial concreta; no sustituye la revisión física ni mide por sí solo la dificultad del banco. La prueba de regresión impide que esas estrategias superen los 7,5/30 aciertos esperados al responder al azar y evita una segunda frase explicativa exclusiva de la correcta. En el banco conceptual: más larga por caracteres 6,833/30, más corta por caracteres 4,500/30, más larga por palabras 4,833/30 y más corta por palabras 6,667/30.

## Huellas de los originales revisados

Los PDF se consultaron desde la carpeta Nuclear indicada por el usuario. No se añaden los originales al repositorio.

| Documento | SHA-256 |
| --- | --- |
| 2023, 2022, 2021, 2018, 2017.pdf | bc5b3ed2ecdfdc22a0f8d3dbcf22906947f4e673c2d2135314bb74866a683ccc |
| Exámenes.pdf | 784f962acdedd5f63c80f74cb6aac93b891362c08c882ac350a15da7b983b667 |
| Física Cuántica - Tema 5 - Núcleos y átomos.pdf | 3ac5bfb0d2fc1c3666ffaefc92b5e3e55df58f9509700951ca465b0af8058c3d |
| Guiones de prácticas de Física Nuclear.pdf | 35b6b8ab6808791ab1447e30fb1d568853be8da9fe8646959b9f4809f57b8cb2 |

## Procedencia individual y referencias de la explicación

G = Guiones de prácticas de Física Nuclear.pdf; T = Física Cuántica - Tema 5 - Núcleos y átomos.pdf. En la columna de origen, las páginas del examen corresponden a Exámenes.pdf (2021–2022) o a la recopilación 2023, 2022, 2021, 2018, 2017.pdf (resto). Las páginas de las referencias se refieren al PDF completo, no a la numeración impresa.

| ID | Origen | Referencias verificadas |
| --- | --- | --- |
| N1 | 2021–2022 · 1 · test con clave · PDF p. 1 | G: P1, §1.2; PDF pp. 33, 34 |
| N11 | 2021–2022 · 11 · test con clave · PDF p. 1 | G: P1, §1.1.1; PDF pp. 19, 20 |
| N3 | 2021–2022 · 3 · test con clave · PDF p. 1 | G: P3, §§3.2.1 y 3.2.3; PDF pp. 76, 81, 82 |
| N33 | 2021–2022 · 33 · test con clave · PDF p. 2 | G: P3, §3.2.4; introducción, §I.2.1; PDF pp. 84, 85, 86, 5 |
| N4 | 2021–2022 · 4 · test con clave · PDF p. 2 | G: P4, §4.9, tabla 4.1; PDF pp. 104, 105 |
| N44 | 2021–2022 · 44 · test con clave · PDF p. 2 | G: P4, §§4.2 y 4.9; PDF pp. 91, 104, 106, 107 |
| N5 | 2021–2022 · 5 · test con clave · PDF p. 2 | G: P5, introducción, ecuaciones (5.1) y (5.2); PDF pp. 117, 118 |
| N55 | 2021–2022 · 55 · test con clave · PDF p. 2 | G: P5, §5.4; PDF pp. 124, 125 |
| N6 | 2021–2022 · 6 · test con clave · PDF p. 3 | G: P5, §5.4; PDF pp. 125, 126 |
| N66 | 2021–2022 · 66 · test con clave · PDF p. 3 | G: P6, §6.5.2 y figura 6.18; PDF pp. 147, 148, 150 |
| N_Ex_23_01 | 2023 · 1 · adaptación · PDF p. 1 | G: P1, §1.2; PDF pp. 33, 34 |
| N_Ex_23_03 | 2023 · 3 · adaptación · PDF p. 1 | G: P4, §§4.2 y 4.7; PDF pp. 91, 100 |
| N_Ex_23_04 | 2023 · 4 · adaptación · PDF p. 1 | G: P5, introducción; PDF pp. 114 / G: Introducción, §I.4.1; PDF pp. 14, 15 |
| N_Ex_23_05 | 2023 · 5 · adaptación · PDF p. 1 | G: P1, §1.1.1; PDF pp. 19, 20 / G: P1, irradiación y control; PDF pp. 22, 24 |
| N_Ex_23_06 | 2023 · 6 · adaptación · PDF p. 1 | G: P3, §§3.1.1 y 3.1.9; PDF pp. 62, 71, 72, 73, 74 |
| N_Ex_23_07 | 2023 · 7 · adaptación · PDF p. 1 | G: P6, §6.5.2; PDF pp. 147, 148, 150 |
| N_Ex_23_08 | 2023 · 8 · adaptación · PDF p. 1 | G: P5, introducción y §§5.2–5.3; PDF pp. 114, 122, 123 |
| N_Ex_23_09 | 2023 · 9 · adaptación · PDF p. 1 | G: P1, §1.1.1; PDF pp. 19, 20 |
| N_Ex_23_10 | 2023 · 10 · adaptación · PDF p. 1 | G: P3, §3.1.9; PDF pp. 73, 74 / G: Introducción, §I.2.1; PDF pp. 5 |
| N_Ex_22_01 | 2022–2023 · 1 · adaptación · PDF p. 2 | G: P1, §1.1.1; PDF pp. 19, 20 |
| N_Ex_22_02 | 2022–2023 · 2 · adaptación · PDF p. 2 | G: P4, §§4.1–4.2 y 4.7; PDF pp. 90, 91, 100 |
| N_Ex_22_03 | 2022–2023 · 3 · adaptación · PDF p. 2 | G: P3, §§3.1.7 y 3.1.9; PDF pp. 68, 71, 72, 73, 74 |
| N_Ex_22_04 | 2022–2023 · 4 · adaptación · PDF p. 2 | G: P6, §6.5.2; PDF pp. 147, 148, 150 / G: P5, §5.3; PDF pp. 123 |
| N_Ex_22_05 | 2022–2023 · 5 · adaptación · PDF p. 3 | G: P5, introducción y §§5.2–5.3; PDF pp. 114, 122, 123 |
| N_Ex_22_06 | 2022–2023 · 6 · adaptación · PDF p. 3 | G: Introducción, §I.3.1; PDF pp. 8, 9 / G: P1, §1.3; PDF pp. 41, 42 |
| N_Ex_22_07 | 2022–2023 · 7 · adaptación · PDF p. 3 | G: P1, §1.1.1; PDF pp. 19, 20 |
| N_Ex_18_01 | 2018 · P1 · adaptación · PDF p. 4 | G: P1, §§1.1.1 y 1.1.10–1.1.11; PDF pp. 19, 20, 30, 31 |
| N_Ex_18_03 | 2018 · P3 · adaptación · PDF p. 4 | G: P3, §§3.1.1 y 3.1.10; PDF pp. 62, 64, 74, 75 |
| N_Ex_18_04 | 2018 · P4 (alcance) · adaptación · PDF p. 4 | G: P4, §4.9; PDF pp. 104, 105, 106, 107 |
| N_Ex_18_05 | 2018 · P5 (picos) · adaptación · PDF p. 4 | G: P5, introducción y §5.6; PDF pp. 118, 129 |
| N_Ex_18_06 | 2018 · P5 (detector) · adaptación · PDF p. 4 | G: P5, introducción; PDF pp. 114 / G: Introducción, §I.4.1; PDF pp. 14, 15 |
| N_Ex_18_07 | 2018 · P6 (funcionamiento) · adaptación · PDF p. 4 | G: P6, introducción; PDF pp. 131, 132 |
| N_Ex_18_08 | 2018 · P6 (resolución) · adaptación · PDF p. 4 | G: P5, §5.2; PDF pp. 122 / G: P6, §6.3; PDF pp. 144, 145 |
| N_Ex_17_01 | 2017 · P1 · adaptación · PDF p. 5 | G: P1, §1.2; PDF pp. 33, 34 |
| N_Ex_17_03 | 2017 · P3 · adaptación · PDF p. 5 | G: P3, §3.1.1, ecuación (3.8); PDF pp. 63, 64 |
| N_Ex_17_04 | 2017 · P4 · adaptación · PDF p. 5 | G: P4, §§4.2 y 4.7; PDF pp. 91, 100 |
| N_Ex_17_05 | 2017 · P5 · adaptación · PDF p. 5 | G: P5, introducción; PDF pp. 114 / G: Introducción, §I.5; PDF pp. 16, 17 |
| N_Ex_17_06 | 2017 · P5–P6 · adaptación · PDF p. 5 | G: P5, introducción y §5.6; PDF pp. 118, 129 |
| N_New_01 | Nueva | G: P1, §1.1.1: formación y revelado de trazas; PDF pp. 19, 20 |
| N_New_02 | Nueva | G: Introducción, I4: detectores pasivos; PDF pp. 12 / G: P1, §1.1.1 y §1.2; PDF pp. 19, 33, 34 |
| N_New_03 | Nueva | G: P1: irradiación con y sin plástico; comparación de trazas; PDF pp. 22, 24 |
| N_New_04 | Nueva | G: P1, §1.2: curva de emisión termoluminiscente; PDF pp. 33, 34 |
| N_New_05 | Nueva | G: P1, §1.2: almacenamiento y lectura; repetición de lectura; PDF pp. 34, 40 |
| N_New_06 | Nueva | G: P3, §3.1.9: registro integral, cuentas por intervalo y ajuste; PDF pp. 71, 72, 73, 74 |
| N_New_07 | Nueva | G: P3, §3.1.9: pendiente del ajuste y semivida; PDF pp. 73, 74 / G: Introducción, I2.1: ley de desintegración; PDF pp. 5 |
| N_New_08 | Nueva | G: P3, §3.1.9: elección de intervalos y tratamiento de cuentas; PDF pp. 71, 72, 73 |
| N_New_09 | Nueva | G: P3, §3.2.4: corriente del torón y ajuste de semivida; PDF pp. 84, 85, 86 / G: Introducción, I2.1: semivida y constante de desintegración; PDF pp. 5 |
| N_New_10 | Nueva | G: P3, §3.2.3: curva corriente-tensión y saturación; PDF pp. 81, 82, 83 |
| N_New_11 | Nueva | G: P3, §3.1.1: generador cesio-bario; PDF pp. 62, 63, 64 / G: P3, §3.1.10: regeneración; PDF pp. 74, 75 |
| N_New_12 | Nueva | G: P4, §4.2: descarga y carga espacial; §4.7: amplitud de pulsos; PDF pp. 91, 100 |
| N_New_13 | Nueva | G: P4, §4.9: absorción y alcance máximo de las betas; PDF pp. 104, 105, 106, 107 |
| N_New_14 | Nueva | G: P4, §4.3: descarga y gas de extinción; PDF pp. 92 |
| N_New_15 | Nueva | G: P4, §4.8: eficiencia intrínseca beta y gamma; PDF pp. 101, 102, 104 |
| N_New_16 | Nueva | G: P5, §5.2: resolución; §5.3: área del fotopico; PDF pp. 122, 123 |
| N_New_17 | Nueva | G: P5, §5.3: atenuación, áreas y tiempos de adquisición; PDF pp. 122, 123, 124 |
| N_New_18 | Nueva | G: P5, §5.1.3: efecto del campo magnético; PDF pp. 121 / G: Introducción, I4.1: centelleo y fotomultiplicador; PDF pp. 14, 15 |
| N_New_19 | Nueva | G: P5, §5.4: coincidencias de cascada y pico suma; PDF pp. 124, 125 |
| N_New_20 | Nueva | G: P5: espectro de producción de pares; §5.6: escape simple y doble; PDF pp. 118, 129 |
| N_New_21 | Nueva | G: P6, §6.2: calibración energética; PDF pp. 143, 144 |
| N_New_22 | Nueva | G: Introducción, I4.1: portadores y resolución de detectores; PDF pp. 13, 14, 15 / G: P6, §6.3: comparación de resolución; PDF pp. 144, 145 |
| N_New_23 | Nueva | G: Introducción, I1: origen de rayos X y gamma; PDF pp. 3 / T: Rayos X: transiciones electrónicas; PDF pp. 10, 11 |
| N_New_24 | Nueva | G: Introducción, I2.4: espectro beta; P4: desintegración beta; PDF pp. 6, 7, 95 |
| N_New_25 | Nueva | T: Ley de desintegración radiactiva: actividad; PDF pp. 2 / G: P4, §4.8: eficiencia y factor geométrico; PDF pp. 101, 102, 104 |
| N_New_26 | Nueva | T: Relación de Geiger–Nuttall; interpretación de Gamow; PDF pp. 4, 8, 9 |
| N_New_27 | Nueva | T: Modelo de Gamow: transmisión cuántica de la barrera; PDF pp. 8, 9 |
| N_New_28 | Nueva | T: Modelo de Bohr y condición de de Broglie; PDF pp. 9, 10 |
| N_New_29 | Nueva | T: Rayos X: espectro continuo y líneas características; PDF pp. 10, 11, 12 |
| N_New_30 | Nueva | T: Detección gamma: Compton y absorción; PDF pp. 12, 13 / G: Introducción, I5: absorción completa por interacciones sucesivas; PDF pp. 16, 17 |
