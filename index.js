// Banco de preguntas del Quiz de Prácticas de Laboratorio
const QUIZ_DATABASE = [
  {
    "id": "O1",
    "text": "Consideremos una red de difracción que se emplea con luz colimada en incidencia normal. ¿Cuántos órdenes de difracción pueden utilizarse para analizar un espectro?",
    "options": [
      "Ninguno. En incidencia normal sólo aparece el orden cero, que no produce dispersión.",
      "Depende de la distancia focal del anteojo que utilicemos.",
      "Depende del espaciado de la red y de la longitud de onda que queramos observar.",
      "Tres órdenes de difracción a cada lado del orden cero (que no produce dispersión)."
    ],
    "matched_page": 13,
    "correct_index": 2,
    "correct_text": "Depende del espaciado de la red y de la longitud de onda que queramos observar.",
    "bold_span_matched": "Depende del espaciado de la red y de la longitud de onda que queramos observar.",
    "justification": "La condición de interferencia constructiva en incidencia normal es \\(d \\sin \\theta = m\\lambda\\). Dado que \\(\\sin \\theta \\le 1\\), el orden máximo de difracción observable está acotado por \\(m \\le d / \\lambda\\). Por lo tanto, el número de órdenes utilizables depende del espaciado de la red (\\(d\\)) y de la longitud de onda (\\(\\lambda\\)) a observar."
  },
  {
    "id": "O2",
    "text": "El tornillo micrométrico del interferómetro de Michelson utilizado en las prácticas:",
    "options": [
      "Enfoca los anillos de interferencia. El plano de enfoque va cambiando a medida que se mueve el tornillo.",
      "Modifica el camino de la luz desplazando un espejo sin girarlo.",
      "Modifica el camino de la luz desplazando y girando un espejo.",
      "Gira y desplaza un espejo de modo que conserva el camino de la luz."
    ],
    "matched_page": 13,
    "correct_index": 1,
    "correct_text": "Modifica el camino de la luz desplazando un espejo sin girarlo.",
    "bold_span_matched": "Modifica el camino de la luz desplazando un espejo sin girarlo.",
    "justification": "El tornillo micrométrico desplaza de forma puramente traslacional el espejo móvil, variando el camino óptico de ese brazo en \\(\\Delta s = 2d\\) sin rotar el espejo, de modo que se conserva la orientación de los frentes de onda y el patrón de anillos."
  },
  {
    "id": "O3",
    "text": "Consideremos el estado de polarización de un haz de luz caracterizado por sus parámetros de Stokes con S₀ = 1. La suma de los cuadrados de los otros tres parámetros:",
    "options": [
      "Debe ser siempre igual a 1. En caso contrario, hay errores en las medidas.",
      "Debe ser siempre mayor o igual que 1. El caso igual a 1 es una situación ideal que no se da en la práctica.",
      "Debe ser siempre menor o igual que 1. El caso igual a 1 es una situación ideal que no se da en la práctica.",
      "Puede ser menor, igual o superior a 1. Depende del estado de polarización de la luz."
    ],
    "matched_page": 14,
    "correct_index": 2,
    "correct_text": "Debe ser siempre menor o igual que 1. El caso igual a 1 es una situación ideal que no se da en la práctica.",
    "bold_span_matched": "Debe ser siempre menor o igual que 1. El caso igual a 1 es una situación ideal que no se da en la práctica.",
    "justification": "El grado de polarización se define como \\(P = \\frac{\\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}\\), cumpliendo \\(0 \\le P \\le 1\\). Si \\(S_0 = 1\\), se tiene que \\(S_1^2 + S_2^2 + S_3^2 \\le 1\\). El caso \\(P = 1\\) (igual a 1) es una situación idealizada de polarización perfecta que no se da estrictamente en la práctica."
  },
  {
    "id": "O4",
    "text": "En una red de difracción, la capacidad de dispersión:",
    "options": [
      "No depende de la longitud de onda utilizada.",
      "Depende de la longitud de onda utilizada.",
      "Es la misma en todos los órdenes de difracción (salvo en el orden cero, que es nula).",
      "Sólo depende de la forma geométrica de cada una de las rendijas de la red."
    ],
    "matched_page": 14,
    "correct_index": 1,
    "correct_text": "Depende de la longitud de onda utilizada.",
    "bold_span_matched": "Depende de la longitud de onda utilizada.",
    "justification": "El poder dispersivo angular es \\(D = \\frac{d\\theta}{d\\lambda} = \\frac{m}{d \\cos\\theta}\\). Dado que el ángulo de difracción \\(\\theta\\) depende de la longitud de onda (\\(\\lambda\\)), el poder de dispersión es función directa de la longitud de onda de trabajo."
  },
  {
    "id": "O5",
    "text": "El experimento de Young de la doble rendija se ha hecho en prácticas con una lámpara de sodio. El motivo es que:",
    "options": [
      "El biprisma utilizado está ajustado para la longitud de onda del sodio.",
      "El sodio emite en dos longitudes de onda muy próximas. Son esas dos rayas espectrales las que permiten formar franjas de interferencia.",
      "En esta facultad les gusta mucho la lámpara de sodio. Podría hacerse con cualquier otra lámpara cuasimonocromática.",
      "Las longitudes de onda de las dos líneas amarillas del sodio tienen la proporción adecuada para que pueda verse el fenómeno con nitidez."
    ],
    "matched_page": 14,
    "correct_index": 2,
    "correct_text": "En esta facultad les gusta mucho la lámpara de sodio. Podría hacerse con cualquier otra lámpara cuasimonocromática.",
    "bold_span_matched": "En esta facultad les gusta mucho la lámpara de sodio. Podría hacerse con cualquier otra lámpara cuasimonocromática.",
    "justification": "Para formar franjas de interferencia basta que la fuente sea cuasimonocromática y tenga coherencia espacial. La lámpara de vapor de sodio es muy usada por su alta radiancia en su línea doble amarilla, pero el experimento podría realizarse con cualquier otra lámpara cuasimonocromática adecuada."
  },
  {
    "id": "O6",
    "text": "En la práctica de polarimetría hemos:",
    "options": [
      "Medido los parámetros de Stokes de la luz de una lámpara de sodio.",
      "Caracterizado el estado de polarización de la luz de la lámpara que pasa a través de un filtro de color.",
      "Caracterizado el estado de polarización de la luz procedente de un filtro de muestra.",
      "Determinado los coeficientes de absorción y ejes de los polarizadores."
    ],
    "matched_page": 15,
    "correct_index": 2,
    "correct_text": "Caracterizado el estado de polarización de la luz procedente de un filtro de muestra.",
    "bold_span_matched": "Caracterizado el estado de polarización de la luz de la lámpara que pasa a través de un filtro de color.",
    "justification": "El guión de prácticas indica textualmente: 'La práctica nos va a servir para caracterizar la luz a la salida de la lámina polarizadora de muestra'. El objetivo fundamental de las medidas de intensidad tras disponer el analizador es determinar los parámetros de Stokes asociados a la caracterización del estado de polarización de la luz procedente de dicho filtro de muestra."
  },
  {
    "id": "O7",
    "text": "En la práctica del experimento de interferencias de Young hemos:",
    "options": [
      "Calibrado el biprisma de Fresnel.",
      "Medido la distancia entre las dos líneas espectrales del amarillo del sodio.",
      "Medido la longitud de onda del amarillo del sodio.",
      "Medido el tamaño de la rendija de entrada, de donde procede la luz que forma las interferencias."
    ],
    "matched_page": 15,
    "correct_index": 2,
    "correct_text": "Medido la longitud de onda del amarillo del sodio.",
    "bold_span_matched": "Medido la longitud de onda del amarillo del sodio.",
    "justification": "En el experimento de Young, la distancia entre franjas brillantes consecutivas (interfranja) es \\(i = \\frac{\\lambda D}{d}\\). Midiendo experimentalmente la interfranja \\(i\\), la distancia a la pantalla \\(D\\) y la separación entre focos \\(d\\), se determina la longitud de onda \\(\\lambda\\) del amarillo del sodio."
  },
  {
    "id": "O8",
    "text": "El interferómetro de Michelson dispone de un vidrio esmerilado que se coloca justo delante de la lámpara. Ese vidrio:",
    "options": [
      "Es la pantalla donde se forma la imagen de los anillos de interferencia.",
      "Sirve para dispersar la luz y evitar que nos deslumbre la lámpara. Los anillos se pueden ver sin ese vidrio.",
      "Es necesario para atenuar la intensidad de luz.",
      "Selecciona la longitud de onda que vamos a utilizar en el experimento."
    ],
    "matched_page": 15,
    "correct_index": 1,
    "correct_text": "Sirve para dispersar la luz y evitar que nos deslumbre la lámpara. Los anillos se pueden ver sin ese vidrio.",
    "bold_span_matched": "Sirve para dispersar la luz y evitar que nos deslumbre la lámpara. Es para ver los anillos más cómodamente; los anillos se pueden ver sin ese vidrio.",
    "justification": "El difusor de vidrio esmerilado convierte la lámpara en una fuente extensa espacialmente. Esto hace que incidan rayos en el interferómetro con múltiples direcciones (varios vectores de onda \\(\\vec{k}\\)), lo que facilita la observación de los anillos de interferencia de igual inclinación."
  },
  {
    "id": "C10",
    "text": "En la práctica de resonancia magnética electrónica:",
    "options": [
      "El campo de las bobinas Helmholtz no puede variar con el tiempo.",
      "El campo de las bobinas Helmholtz se modula con la frecuencia de Larmor.",
      "El pico que se observa corresponde a absorción de energía.",
      "El pico que se observa corresponde a emisión de energía."
    ],
    "matched_page": 16,
    "correct_index": 2,
    "correct_text": "El pico que se observa corresponde a absorción de energía.",
    "bold_span_matched": "El pico que se observa corresponde a absorción de energía.",
    "justification": "Al aplicar un campo magnético estático \\(\\vec{B}_0\\), los niveles de energía de espín se dividen (efecto Zeeman). Cuando la energía de radiofrecuencia aplicada coincide con la diferencia de energía entre niveles (\\(\\hbar \\omega = g \\mu_B B_0\\)), se produce absorción resonante de energía, manifestándose como un pico de absorción."
  },
  {
    "id": "C11",
    "text": "Si las espiras de la bobina de radiofrecuencias se disponen paralelamente a las espiras de las bobinas Helmholtz:",
    "options": [
      "No aparecerá señal de resonancia magnética.",
      "La señal de resonancia se desplazará a la derecha.",
      "La señal de resonancia aumentará en amplitud.",
      "El factor de Lande será la mitad que en el caso perpendicular."
    ],
    "matched_page": 16,
    "correct_index": 0,
    "correct_text": "No aparecerá señal de resonancia magnética.",
    "bold_span_matched": "No aparecerá señal de resonancia magnética.",
    "justification": "Para inducir transiciones de resonancia (\\(\\Delta m_s = \\pm 1\\)), el campo magnético de radiofrecuencia perturbador \\(\\vec{B}_{\\text{RF}}\\) debe oscilar perpendicularmente al campo magnético principal \\(\\vec{B}_0\\). Si se colocan paralelos, los elementos de matriz de transición son nulos y no aparece señal."
  },
  {
    "id": "C13",
    "text": "Medimos la tensión Hall (en la dirección Z) entre los extremos de una lámina conductora (plano XZ) por la que circula una corriente de 10 A en la dirección X. La lámina está en un campo magnético en la dirección Y. La caída de tensión Hall es positiva, con lo que podemos concluir que:",
    "options": [
      "Los portadores son electrones y por tanto la lámina conductora es de plata.",
      "Los portadores son huecos y por tanto la lámina conductora es de wolframio.",
      "El signo de los portadores cambiará al cambiar el sentido del campo magnético aplicado.",
      "Necesitamos más datos para saber cuál es el signo de los portadores de la corriente eléctrica."
    ],
    "matched_page": 17,
    "correct_index": 1,
    "correct_text": "Los portadores son huecos y por tanto la lámina conductora es de wolframio.",
    "bold_span_matched": "los portadores de la corriente eléctrica son huecos y por tanto la lámina conductora es de wolframio.",
    "justification": "La deflexión Hall se debe a la fuerza de Lorentz \\(\\vec{F}_m = q(\\vec{v}_d \\times \\vec{B})\\). Al circular corriente en \\(+\\vec{u}_x\\) bajo campo magnético en \\(+\\vec{u}_y\\), tanto los huecos (\\(q > 0\\), \\(\\vec{v}_d \\parallel +\\vec{u}_x\\)) como los electrones (\\(q < 0\\), \\(\\vec{v}_d \\parallel -\\vec{u}_x\\)) experimentan fuerza hacia \\(+\\vec{u}_z\\). La acumulación de huecos da un potencial positivo en esa cara (lámina de wolframio), mientras que los electrones darían un potencial negativo."
  },
  {
    "id": "C14",
    "text": "En el experimento anterior, aumentamos al doble la intensidad de corriente y disminuimos a la mitad la intensidad del campo magnético. ¿Qué ocurre con la tensión Hall?",
    "options": [
      "El valor de la tensión Hall, en un experimento ideal, no cambiaría.",
      "La tensión Hall aumenta en valor absoluto.",
      "La tensión Hall disminuye en valor absoluto.",
      "No disponemos de datos suficientes para saberlo."
    ],
    "matched_page": 17,
    "correct_index": 0,
    "correct_text": "El valor de la tensión Hall, en un experimento ideal, no cambiaría.",
    "bold_span_matched": "el valor de la tensión Hall, en un experimento ideal, no cambiaría.",
    "justification": "La tensión de Hall es \\(V_{\\text{H}} = \\frac{R_{\\text{H}} I B}{d}\\). Si duplicamos la corriente (\\(I' = 2I\\)) y reducimos a la mitad el campo magnético (\\(B' = B/2\\)), el producto \\(I'B' = (2I)(B/2) = IB\\) permanece invariable y, por ende, la tensión Hall no cambia."
  },
  {
    "id": "C16",
    "text": "¿Por qué los espectros de emisión de los átomos y el espectro Zeeman son discretos y no continuos?",
    "options": [
      "Porque las líneas corresponden a las energías de ciertos niveles electrónicos, y estos tienen energías discretas.",
      "Porque las líneas corresponden a transiciones permitidas entre los niveles electrónicos, y estos niveles de energía son discretos.",
      "Porque aunque los niveles electrónicos forman un continuo de energía, las transiciones permitidas son discretas.",
      "Porque corresponden al momento angular interno del núcleo atómico."
    ],
    "matched_page": 18,
    "correct_index": 1,
    "correct_text": "Porque las líneas corresponden a transiciones permitidas entre los niveles electrónicos, y estos niveles de energía son discretos.",
    "bold_span_matched": "porque las líneas corresponden a transiciones permitidas entre los niveles electrónicos, y estos niveles de energía son discretos.",
    "justification": "Los niveles de energía de los electrones en un átomo acotado espacialmente están cuantizados (son discretos). Como los fotones emitidos corresponden a transiciones entre estos niveles discretos (\\(\\hbar\\omega = E_i - E_f\\)), las líneas del espectro atómico y el efecto Zeeman son discretas y no continuas."
  },
  {
    "id": "E1 (IV)",
    "text": "Se desea medir una capacidad de aproximadamente 10 pF a partir de la constante de tiempo mediante un osciloscopio. Se dispone de R = 1 MΩ y un generador de onda cuadrada. ¿Qué frecuencia utilizaría?",
    "options": [
      "Sirve cualquier frecuencia sin más que ajustar la base de tiempos.",
      "Una frecuencia del orden de 10² Hz.",
      "Una frecuencia del orden de 10⁴ Hz.",
      "Con los valores de C y R dados no puede utilizarse esta técnica."
    ],
    "matched_page": 18,
    "correct_index": 3,
    "correct_text": "Con los valores de C y R dados no puede utilizarse esta técnica.",
    "bold_span_matched": "Con los valores de C y R dados no puede utilizarse esta técnica.",
    "justification": "La constante de tiempo teórica es \\(\\tau = RC = 10^6\\ \\Omega \\times 10^{-11}\\text{ F} = 10\\ \\mu\\text{s}\\). Sin embargo, el osciloscopio tiene una capacitancia de entrada parásita típica de unos \\(15\\text{ pF} - 20\\text{ pF}\\) y una resistencia de entrada de \\(1\\text{ M}\\Omega\\). Al conectar la sonda, la capacidad parásita en paralelo altera por completo el circuito, imposibilitando realizar la medida."
  },
  {
    "id": "E2 (IV)",
    "text": "Para determinar la capacidad de un condensador se mide la constante de tiempo de descarga mediante un voltímetro y un cronómetro. Si el voltímetro presenta una resistencia de entrada finita, ¿cómo afectará a la medida?",
    "options": [
      "La capacidad medida es menor que la real.",
      "La capacidad medida es mayor que la real.",
      "La capacidad medida es igual que la real.",
      "En este caso el voltímetro se avería."
    ],
    "matched_page": 19,
    "correct_index": 0,
    "correct_text": "La capacidad medida es menor que la real.",
    "bold_span_matched": "La capacidad medida es menor que la real.",
    "justification": "El voltímetro en paralelo con el condensador añade su resistencia interna \\(R_v\\) al circuito, reduciendo la resistencia equivalente a \\(R_{\\text{eq}} = \\frac{R \\cdot R_v}{R + R_v} < R\\). Esto hace que el condensador se descargue más rápido (\\(\\tau_{\\text{exp}} < \\tau_{\\text{real}}\\)). Al calcular \\(C\\) usando el valor nominal \\(R\\) (\\(C = \\tau_{\\text{exp}}/R\\)), se obtiene un valor menor que el real."
  },
  {
    "id": "E7 (IV)",
    "text": "La constante de tiempo de un circuito RC es muy pequeña. Esto significa que:",
    "options": [
      "La resistencia es muy pequeña.",
      "La capacidad del condensador es muy pequeña.",
      "El cociente R/C es muy pequeño.",
      "El producto de R por C es muy pequeño."
    ],
    "matched_page": 19,
    "correct_index": 3,
    "correct_text": "El producto de R por C es muy pequeño.",
    "bold_span_matched": "El producto de R por C es muy pequeño.",
    "justification": "La constante de tiempo de un circuito RC es \\(\\tau = R \\cdot C\\). Si \\(\\tau\\) es muy pequeña, significa que el producto de la resistencia por la capacitancia es correspondientemente muy pequeño."
  },
  {
    "id": "E8 (IV)",
    "text": "Se desea medir una capacidad de aproximadamente 1000 μF usando un voltímetro de muy alta resistencia y un cronómetro. ¿Qué valor usaría para la resistencia de descarga?",
    "options": [
      "Del orden de 10 Ω.",
      "Del orden de 10⁴ Ω.",
      "Del orden de 10⁸ Ω.",
      "Capacidades tan grandes no se pueden medir por este procedimiento."
    ],
    "matched_page": 19,
    "correct_index": 1,
    "correct_text": "Del orden de 10⁴ Ω.",
    "bold_span_matched": "Del orden de 10⁴ Ω.",
    "justification": "Para medir cómodamente la descarga con un cronómetro manual, se requiere una constante de tiempo del orden de \\(\\tau \\approx 10\\text{ segundos}\\). De la ecuación \\(\\tau = RC\\), despejamos \\(R = \\tau / C = 10\\text{ s} / (1000 \\times 10^{-6}\\text{ F}) = 10^4\\ \\Omega\\)."
  },
  {
    "id": "E9 (IV)",
    "text": "La respuesta temporal de un circuito RLC serie presenta oscilaciones que se desean eliminar. ¿Cuál sería el procedimiento?",
    "options": [
      "Disminuir la resistencia.",
      "Disminuir la frecuencia.",
      "Aumentar la resistencia.",
      "No es posible."
    ],
    "matched_page": 20,
    "correct_index": 2,
    "correct_text": "Aumentar la resistencia.",
    "bold_span_matched": "Aumentar la resistencia.",
    "justification": "El circuito RLC serie presenta oscilaciones transitorias en régimen subamortiguado. Para eliminarlas y llevar el sistema a un comportamiento sobreamortiguado (sin oscilaciones), se debe aumentar la resistencia del circuito hasta superar el amortiguamiento crítico (\\(R \\ge 2\\sqrt{L/C}\\))."
  },
  {
    "id": "E9",
    "text": "En el experimento para medir campos magnéticos en el eje de una espira, si no se dispone de regla para determinar el centro, ¿cómo colocaría la sonda Hall?",
    "options": [
      "Buscar sobre el plano de la espira el punto de mayor campo.",
      "Buscar sobre el plano de la espira el punto de menor campo.",
      "Es indiferente, el campo es el mismo en todos los puntos del plano.",
      "Buscar el punto donde cambia de sentido el campo."
    ],
    "matched_page": 20,
    "correct_index": 0,
    "correct_text": "Buscar sobre el plano de la espira el punto de mayor campo.",
    "bold_span_matched": "Buscar sobre el plano de la espira el punto de mayor campo.",
    "justification": "El campo magnético en el eje de una espira disminuye a medida que nos alejamos de su plano y alcanza su valor máximo absoluto exactamente en el centro geométrico de la espira. Por tanto, para localizar el centro sin regla, basta buscar el punto del eje donde la lectura del campo magnético (sonda Hall) sea máxima."
  },
  {
    "id": "E10",
    "text": "La configuración de bobinas de Helmholtz se utiliza para:",
    "options": [
      "Aumentar el campo al máximo.",
      "Evitar las interferencias externas.",
      "Lograr una zona de campo prácticamente uniforme.",
      "Conseguir varios mínimos locales de campo."
    ],
    "matched_page": 20,
    "correct_index": 2,
    "correct_text": "Lograr una zona de campo prácticamente uniforme.",
    "bold_span_matched": "Lograr una zona de campo prácticamente uniforme.",
    "justification": "La configuración de Helmholtz (dos bobinas idénticas separadas a una distancia igual a su radio) consigue anular las derivadas primera, segunda y tercera del campo en el centro del sistema, logrando una región de campo magnético altamente homogéneo y uniforme en esa zona."
  },
  {
    "id": "E13",
    "text": "Si en el experimento de la balanza de corriente se aumenta la intensidad del circuito móvil de 1 a 4 A, sin modificar ningún otro parámetro:",
    "options": [
      "La fuerza cambia de sentido.",
      "La fuerza se duplica.",
      "La fuerza permanece virtualmente constante.",
      "La fuerza se cuadruplica."
    ],
    "matched_page": 21,
    "correct_index": 3,
    "correct_text": "La fuerza se cuadruplica.",
    "bold_span_matched": "La fuerza se cuadruplica.",
    "justification": "La fuerza magnética sobre un circuito conductor viene dada por la ley de Lorentz: \\(\\vec{F} = I_{\\text{móvil}} (\\vec{L} \\times \\vec{B})\\). Al ser directamente proporcional a la intensidad de corriente en el circuito móvil (\\(I_{\\text{móvil}}\\)), si esta se cuadruplica (pasa de 1 a 4 A), la fuerza magnética se cuadruplica."
  },
  {
    "id": "E14",
    "text": "Si en el experimento de la balanza de corriente se va aumentando progresivamente la corriente en el electroimán, la fuerza sobre el circuito móvil:",
    "options": [
      "Aumenta indefinidamente.",
      "Permanece inalterada.",
      "Aumenta progresivamente hasta que el núcleo del electroimán se satura.",
      "Llega a cambiar de sentido debido al campo magnético terrestre."
    ],
    "matched_page": 21,
    "correct_index": 2,
    "correct_text": "Aumenta progresivamente hasta que el núcleo del electroimán se satura.",
    "bold_span_matched": "Aumenta progresivamente hasta que el núcleo del electroimán se satura.",
    "justification": "La fuerza es proporcional al campo magnético \\(\\vec{B}\\) creado por el electroimán. Al aumentar la corriente, el núcleo ferromagnético se magnetiza hasta que alcanza la saturación magnética. A partir de ese punto, el campo magnético \\(\\vec{B}\\) y la fuerza dejan de aumentar significativamente, permaneciendo casi constantes."
  },
  {
    "id": "E21 (IV)",
    "text": "Si en el montaje para medir campos magnéticos se gira la sonda Hall de forma que su plano forme un ángulo de 45° con el eje de la bobina:",
    "options": [
      "No se detectará ninguna variación en la medida del campo.",
      "La lectura del campo se reducirá en un 50% aproximadamente.",
      "La lectura del campo se reducirá en un 30% aproximadamente.",
      "La lectura del campo se anulará."
    ],
    "matched_page": 21,
    "correct_index": 2,
    "correct_text": "La lectura del campo se reducirá en un 30% aproximadamente.",
    "bold_span_matched": "La lectura del campo se reducirá en un 30% aproximadamente.",
    "justification": "La sonda de Hall mide la componente del campo magnético perpendicular a su superficie: \\(B_{\\text{medido}} = B \\cos\\theta\\). Si se inclina \\(\\theta = 45^\\circ\\), la lectura será \\(B \\cos(45^\\circ) = B \\frac{\\sqrt{2}}{2} \\approx 0.707 B\\), lo que representa una reducción de aproximadamente el 30% en el campo leído."
  },
  {
    "id": "E22 (IV)",
    "text": "Si en la configuración de las bobinas de Helmholtz se invierte el sentido de la corriente en una de ellas:",
    "options": [
      "El campo magnético resultante aumentará de intensidad.",
      "El campo magnético se anulará en el centro de cada bobina.",
      "El campo magnético se anulará en el punto central del sistema de bobinas.",
      "El sentido de la corriente no influye en la forma de variación del campo magnético."
    ],
    "matched_page": 22,
    "correct_index": 2,
    "correct_text": "El campo magnético se anulará en el punto central del sistema de bobinas.",
    "bold_span_matched": "El campo magnético se anulará en el punto central del sistema de bobinas.",
    "justification": "Al invertir el sentido de la corriente en una de las bobinas Helmholtz, los campos generados por cada bobina en el punto central tienen la misma magnitud pero sentidos opuestos, por lo que por superposición lineal el campo magnético neto en el punto central se anula por completo."
  },
  {
    "id": "E23 (IV)",
    "text": "Si en el experimento de las bobinas de Helmholtz éstas se separasen en una distancia menor que su radio:",
    "options": [
      "El campo presentaría un máximo local en el centro del sistema.",
      "El campo presentaría un mínimo local en el centro del sistema.",
      "El campo presentaría dos máximos en los centros de las espiras.",
      "El campo presentaría dos mínimos en los centros de las espiras."
    ],
    "matched_page": 22,
    "correct_index": 0,
    "correct_text": "El campo presentaría un máximo local en el centro del sistema.",
    "bold_span_matched": "El campo presentaría un máximo local en el centro del sistema.",
    "justification": "Si la separación entre bobinas es menor que su radio (\\(d < R\\)), los perfiles de campo magnético de cada bobina se superponen de forma que la segunda derivada del campo en el centro se vuelve negativa, dando lugar a un único máximo local de campo en el centro del sistema."
  },
  {
    "id": "E28 (IV)",
    "text": "¿Cuál de las siguientes afirmaciones es correcta en el experimento de la balanza de corriente?",
    "options": [
      "La fuerza depende linealmente de la intensidad de corriente en el electroimán.",
      "La fuerza depende linealmente de la intensidad de corriente en el circuito impreso.",
      "La fuerza depende cuadráticamente de la corriente en el electroimán.",
      "La fuerza depende linealmente del producto de las intensidades en el electroimán y en el circuito impreso."
    ],
    "matched_page": 22,
    "correct_index": 1,
    "correct_text": "La fuerza depende linealmente de la intensidad de corriente en el circuito impreso.",
    "bold_span_matched": "La fuerza depende linealmente de la intensidad de corriente en el circuito impreso.",
    "justification": "La fuerza magnética en la balanza de corriente es \\(\\vec{F} = I_{\\text{impreso}} (\\vec{L} \\times \\vec{B})\\). La fuerza depende de forma estrictamente lineal de la intensidad de corriente en el circuito impreso. En cambio, con la corriente del electroimán la relación no es lineal debido a la histéresis y saturación del núcleo ferromagnético."
  },
  {
    "id": "E29 (IV)",
    "text": "Si en el experimento de la balanza de corriente se desea invertir el sentido de la fuerza, se debería:",
    "options": [
      "Invertir el sentido de la corriente en el circuito impreso.",
      "Invertir el sentido de la corriente en todos los circuitos (electroimán y circuito impreso).",
      "Invertir el sentido de la corriente en una sola de las bobinas del electroimán.",
      "La fuerza siempre tiene el mismo sentido."
    ],
    "matched_page": 23,
    "correct_index": 0,
    "correct_text": "Invertir el sentido de la corriente en el circuito impreso.",
    "bold_span_matched": "Invertir el sentido de la corriente en una sola de las bobinas del electroimán.",
    "justification": "El fundamento de este experimento se basa en la fuerza magnética sobre un conductor rectilíneo descrita por la ley de Lorentz: \\(\\vec{F} = I (\\vec{l} \\times \\vec{B})\\). Para invertir el sentido de \\(\\vec{F}\\), debemos cambiar el signo de uno de los factores: la corriente del circuito impreso (\\(I\\)) o el campo (\\(\\vec{B}\\)). <br>• <strong>Invertir la corriente en el circuito impreso (Correcta)</strong>: Cambia el signo de \\(I\\), resultando en \\(-\\vec{F} = (-I)(\\vec{l} \\times \\vec{B})\\). <br>• <strong>Invertir en todos los circuitos</strong>: Invierte simultáneamente \\(I\\) y \\(\\vec{B}\\), lo que se cancela en el producto vectorial, dejando la fuerza igual: \\((-I)\\cdot(\\vec{l} \\times -\\vec{B}) = \\vec{F}\\). <br>• <strong>Invertir en una sola bobina</strong>: Las bobinas están en serie sumando sus campos. Invertir una sola hace que se opongan y el campo neto se anule o reduzca drásticamente, anulando la fuerza en vez de invertirla."
  },
  {
    "id": "E30 (IV)",
    "text": "Si en el experimento de la balanza de corriente se desconecta completamente el electroimán:",
    "options": [
      "La fuerza se anula totalmente por ser nulo el campo magnético.",
      "La fuerza se anula totalmente a pesar de la remanencia del núcleo del electroimán.",
      "La fuerza no se anula, debido a la remanencia del núcleo del electroimán.",
      "La fuerza cambia de sentido debido al campo magnético terrestre."
    ],
    "matched_page": 23,
    "correct_index": 2,
    "correct_text": "La fuerza no se anula, debido a la remanencia del núcleo del electroimán.",
    "bold_span_matched": "La fuerza no se anula, debido a la remanencia del núcleo del electroimán.",
    "justification": "Debido al fenómeno de histéresis magnética, al apagar la corriente del electroimán (\\(I = 0\\)), el núcleo ferromagnético retiene una magnetización residual o remanente (\\(\\vec{M}_r \\ne 0\\)). Esta remanencia genera un campo magnético en el entrehierro, por lo que la fuerza sobre el circuito móvil no se anula por completo."
  },
  {
    "id": "E15",
    "text": "En la medida de ciclos de histéresis se observa que si se disminuye progresivamente la frecuencia del generador el ciclo presenta \"lazos\" en los extremos. Esto se debe a que:",
    "options": [
      "Aumenta la imanación de saturación del material.",
      "El circuito integrador ha dejado de funcionar correctamente.",
      "Aparecen corrientes inducidas en el material.",
      "Aparecen desfases entre las dos bobinas primarias."
    ],
    "matched_page": 24,
    "correct_index": 1,
    "correct_text": "El circuito integrador ha dejado de funcionar correctamente.",
    "bold_span_matched": "El circuito integrador ha dejado de funcionar correctamente.",
    "justification": "El integrador pasivo RC funciona correctamente solo si se cumple la condición \\(\\omega RC \\gg 1\\). Al disminuir la frecuencia (\\(\\omega \\to 0\\)), la aproximación del circuito integrador falla, distorsionando la señal integrada e induciendo lazos artificiales en los extremos del ciclo de histéresis."
  },
  {
    "id": "E16",
    "text": "Al medir la curva de imanación M-H de un cierto material aparece un ciclo de histéresis cuyos extremos son horizontales. Esto significa que:",
    "options": [
      "La corriente proporcionada por el amplificador es demasiado baja.",
      "Se ha alcanzado la saturación del material.",
      "El circuito integrador ha dejado de funcionar correctamente.",
      "El material se está descomponiendo químicamente."
    ],
    "matched_page": 24,
    "correct_index": 1,
    "correct_text": "Se ha alcanzado la saturación del material.",
    "bold_span_matched": "Se ha alcanzado la saturación del material.",
    "justification": "Cuando la curva de imanación \\(M-H\\) presenta extremos horizontales, la susceptibilidad diferencial \\(\\frac{\\partial M}{\\partial H}\\) se aproxima a cero. Esto indica que todos los momentos magnéticos están alineados con el campo externo, habiéndose alcanzado la saturación magnética del material."
  },
  {
    "id": "E1_A",
    "text": "Un condensador tarda 7 ms en descargarse a la mitad. R=10kΩ. ¿De qué orden es la capacidad usada?",
    "options": [
      "1 \\(\\mu\\)F",
      "10 \\(\\mu\\)F",
      "100 \\(\\mu\\)F",
      "1000 \\(\\mu\\)F"
    ],
    "matched_page": 19,
    "correct_index": 0,
    "correct_text": "1 \\(\\mu\\)F",
    "bold_span_matched": "1 uF",
    "justification": "La evolución temporal del potencial en un proceso de descarga de un circuito RC obedece a la siguiente función exponencial: \\(V(t) = V_0 e^{-\\frac{t}{RC}}\\). La condición del enunciado establece que el potencial decae a la mitad de su valor inicial, es decir, \\(V(t) = V_0/2\\), en el instante \\(t = 7 \\times 10^{-3}\\text{ s}\\). Imponiendo esta condición en la ecuación: \\(\\frac{1}{2} = e^{-\\frac{t}{RC}} \\implies \\ln(2) = \\frac{t}{RC}\\). Aislando la variable de interés \\(C\\) (la capacidad del condensador) y sustituyendo los parámetros del sistema (\\(R = 10^4\\ \\Omega\\) y el tiempo \\(t\\)): \\(C = \\frac{t}{R \\ln(2)} = \\frac{7 \\times 10^{-3}}{10^4 \\times 0.693} \\approx 1.01 \\times 10^{-6}\\text{ F}\\). Dimensionalmente, esto equivale a \\(1\\ \\mu\\text{F}\\), coincidiendo con el orden de magnitud de la primera opción."
  },
  {
    "id": "E2_A",
    "text": "Queremos eliminar las lentas oscilaciones de un circuito RLC. Debemos:",
    "options": [
      "Aumentar R",
      "Disminuir R",
      "Aumentar L",
      "Disminuir C"
    ],
    "matched_page": 20,
    "correct_index": 0,
    "correct_text": "Aumentar R",
    "bold_span_matched": "Aumentar R",
    "justification": "La dinámica de un circuito RLC serie viene determinada por la relación entre su coeficiente de amortiguamiento \\(\\alpha = \\frac{R}{2L}\\) y su frecuencia propia \\(\\omega_0 = \\frac{1}{\\sqrt{LC}}\\). El sistema presenta un régimen subamortiguado (oscilatorio) cuando \\(\\alpha < \\omega_0\\). Para suprimir las oscilaciones y forzar un régimen críticamente amortiguado o sobreamortiguado, es condición necesaria que: \\(R \\ge 2\\sqrt{\\frac{L}{C}}\\). Incrementar la resistencia \\(R\\) aumenta el factor de disipación energética de Joule, rompiendo la condición de oscilación transitoria."
  },
  {
    "id": "E3_A",
    "text": "En el experimento de la balanza de corrientes al apagar el electroimán se observa que la fuerza no se anula. Esto es debido a:",
    "options": [
      "La inductancia del circuito.",
      "La histéresis del material.",
      "La remanencia.",
      "El acoplamiento mutuo."
    ],
    "matched_page": 23,
    "correct_index": 2,
    "correct_text": "La remanencia.",
    "bold_span_matched": "la remanencia.",
    "justification": "Al suprimir la corriente (\\(I \\to 0\\)), el material ferromagnético del núcleo del electroimán no retorna a un estado de magnetización nula debido a la histéresis magnética. Los dominios magnéticos mantienen un alineamiento parcial, conservando una magnetización residual \\(M_r\\) que genera un campo magnético remanente \\(B_r\\) (el observable físico que no se anula es el campo magnético, aunque el enunciado original use incorrectamente el término 'inductancia')."
  },
  {
    "id": "E5_A",
    "text": "Si en el calibrado del gaussímetro colocamos en el arrollamiento problema las dos conexiones en paralelo:",
    "options": [
      "Tienes el mismo campo.",
      "Tienes el doble del campo que en serie.",
      "Tienes la mitad del campo que en serie.",
      "Se anulan los campos."
    ],
    "matched_page": 21,
    "correct_index": 2,
    "correct_text": "Tienes la mitad del campo que en serie.",
    "bold_span_matched": "Tienes la mitad del campo que en serie.",
    "justification": "Asumiendo una fuente de corriente constante \\(I\\): En configuración serie, la intensidad \\(I\\) recorre la totalidad de las \\(2N\\) espiras, generando un campo magnético \\(B_{\\text{serie}} \\propto 2NI\\). En configuración paralelo, la ley de nodos de Kirchhoff impone que la corriente se bifurque por simetría. Cada sub-bobina de \\(N\\) espiras es atravesada por \\(I/2\\). Por el principio de superposición, el campo total es \\(B_{\\text{paralelo}} \\propto N(I/2) + N(I/2) = NI\\). Por tanto, el campo resultante es exactamente la mitad."
  },
  {
    "id": "E6_A",
    "text": "En la práctica de las bobinas de Helmholtz si la corriente circula en ambas en el mismo sentido y las separamos mucho más que su radio:",
    "options": [
      "Tenemos dos máximos en el centro de las bobinas.",
      "Tenemos dos mínimos en el centro de las bobinas.",
      "Tenemos un máximo central.",
      "Tenemos un valor casi constante a lo largo del espacio entre bobinas."
    ],
    "matched_page": 22,
    "correct_index": 0,
    "correct_text": "Tenemos dos máximos en el centro de las bobinas.",
    "bold_span_matched": "Tenemos dos máximos en el centro de las bobinas.",
    "justification": "El campo magnético axial \\(B(z)\\) es la superposición de las contribuciones de Biot-Savart de dos espiras separadas una distancia \\(d\\). La configuración de Helmholtz (\\(d=R\\)) anula la segunda derivada en el punto medio, creando un 'plateau'. Sin embargo, si \\(d \\gg R\\), la interacción superpuesta en el espacio intermedio decae exponencialmente, formando un mínimo local en el centro geométrico del sistema y revelando dos máximos locales aislados, situados en el plano axial intrínseco de cada bobina."
  },
  {
    "id": "E7_A",
    "text": "Si en la medida de ciclos de histéresis el ciclo llega a presentar lazos en los extremos, es porque:",
    "options": [
      "El circuito integrador se ha recalentado y no funciona correctamente.",
      "Estamos operando a frecuencias por encima de la frecuencia de corte.",
      "La capacidad del integrador es demasiado baja.",
      "La capacidad del integrador es demasiado alta."
    ],
    "matched_page": 24,
    "correct_index": 2,
    "correct_text": "La capacidad del integrador es demasiado baja.",
    "bold_span_matched": "La capacidad del integrador es demasiado baja.",
    "justification": "El circuito integrador pasivo RC aproxima la inducción \\(B \\propto \\int \\varepsilon dt\\). La condición matemática estricta para que opere como un integrador ideal es que la frecuencia de la señal sea muy superior a la frecuencia de corte del circuito: \\(\\omega RC \\gg 1\\). Si la capacidad \\(C\\) es excesivamente baja, esta desigualdad se rompe, induciendo un desfase parasitario entre las componentes armónicas de \\(H\\) y \\(B\\). Topológicamente, este error de fase se proyecta en el diagrama de Lissajous como un cruce de las curvas en los puntos de saturación (lazos)."
  },
  {
    "id": "E8_A",
    "text": "¿Cómo podemos saber en la curva de imanación M-H de un cierto material si se ha alcanzado su saturación?",
    "options": [
      "Los extremos del ciclo de histéresis son horizontales.",
      "Los extremos del ciclo de histéresis son verticales.",
      "El ciclo de histéresis se cierra por completo.",
      "El ciclo de histéresis presenta lazos en los extremos."
    ],
    "matched_page": 24,
    "correct_index": 0,
    "correct_text": "Los extremos del ciclo de histéresis son horizontales.",
    "bold_span_matched": "los extremos del ciclo de histéresis son horizontales.",
    "justification": "La saturación técnica del material ferromagnético implica que la totalidad de los momentos magnéticos de los dominios de Weiss se han alineado paralelamente al campo excitador \\(\\vec{H}\\). En este límite asintótico, la magnetización adquiere su valor máximo \\(M_s\\) y no puede seguir incrementando. Matemáticamente, la susceptibilidad magnética diferencial se anula: \\(\\chi = \\frac{dM}{dH} \\to 0\\). Geométricamente, una derivada nula implica una pendiente estrictamente horizontal en las ramas extremas del diagrama \\(M-H\\)."
  },
  {
    "id": "C1_A",
    "text": "Las líneas espectrales en la práctica de rayos X representan:",
    "options": [
      "Energía de los fotones emitidos al impactar los electrones con el ánodo transfiriendo su energía a las capas más internas.",
      "Energía de los fotones emitidos al impactar los electrones con el ánodo y sufrir una desaceleración (radiación de frenado).",
      "La radiación de frenado que es un espectro discontinuo.",
      "Porque hay impurezas."
    ],
    "matched_page": 17,
    "correct_index": 0,
    "correct_text": "Energía de los fotones emitidos al impactar los electrones con el ánodo transfiriendo su energía a las capas más internas.",
    "bold_span_matched": "Energía de los fotones emitidos al impactar los electrones con el ánodo transfiriendo su energía a las capas más internas.",
    "justification": "El espectro característico de rayos X (las líneas discretas, a diferencia del Bremsstrahlung continuo) se origina por la cuantización de los niveles de energía atómicos. Un electrón de alta energía cinética arranca un electrón de las capas fuertemente ligadas (ej. capa K) del átomo del ánodo. La transición de un electrón de una capa superior (ej. L o M) para llenar esta vacante emite un fotón de rayos X con una energía estrictamente igual a la diferencia de energía de dichos estados cuánticos: \\(\\Delta E = h\\nu\\)."
  },
  {
    "id": "C2_A",
    "text": "En la práctica de rayos X:",
    "options": [
      "El ánodo está conectado al polo negativo del generador eléctrico.",
      "El ánodo está conectado al polo positivo del generador eléctrico.",
      "El filamento de tungsteno está conectado al polo positivo del generador eléctrico.",
      "El filamento de tungsteno está desconectado."
    ],
    "matched_page": 17,
    "correct_index": 1,
    "correct_text": "El ánodo está conectado al polo positivo del generador eléctrico.",
    "bold_span_matched": "El ánodo está conectado al polo positivo del generador eléctrico.",
    "justification": "Para que el gradiente de potencial electrostático genere un campo eléctrico capaz de acelerar los electrones (emitidos termiónicamente en el cátodo) hacia el blanco metálico, el ánodo debe poseer un potencial positivo. Dado que el electrón posee carga negativa (\\(q = -e\\)), experimentará una fuerza de Lorentz \\(\\vec{F} = -e\\vec{E}\\) en dirección opuesta a las líneas de campo, dirigiéndose hacia el polo positivo."
  },
  {
    "id": "C3_A",
    "text": "En la práctica de Efecto Zeeman:",
    "options": [
      "La lámpara empleada era de sodio.",
      "La longitud de onda de la línea central (\\(\\Delta M = 0\\)) es distinta que la longitud de onda de la línea observada sin campo magnético.",
      "Existen 9 transiciones posibles pero solo 3 de distinta energía.",
      "La línea central desaparecía en presencia de campo magnético si se observaba perpendicularmente."
    ],
    "matched_page": 18,
    "correct_index": 2,
    "correct_text": "Existen 9 transiciones posibles pero solo 3 de distinta energía.",
    "bold_span_matched": "Existen 9 transiciones posibles pero solo 3 de distinta energía.",
    "justification": "Para un efecto Zeeman normal (como la transición espectroscópica típica del Cd: \\({}^1D_2 \\to {}^1P_1\\), donde \\(S=0\\)), el nivel superior se desdobla en 5 subniveles de Zeeman y el inferior en 3. Las reglas de selección dipolares imponen \\(\\Delta m_l = 0, \\pm 1\\). Combinatoriamente, esto limita las transiciones radiativas permitidas a 9. La perturbación del Hamiltoniano es lineal respecto a \\(m_l\\) (\\(\\Delta E = \\mu_B B \\Delta m_l\\)), por lo que estas 9 transiciones colapsan espectralmente en exactamente 3 frecuencias discretas (el triplete de Lorentz)."
  },
  {
    "id": "C4_A",
    "text": "En la práctica de Efecto Zeeman:",
    "options": [
      "En el átomo de sodio el nivel \\({}^1D_2\\) en ausencia de campo magnético se desdobla en 3 subniveles de energía.",
      "En el átomo de cadmio el nivel \\({}^1D_2\\) en presencia de campo magnético se desdobla en 5 subniveles de energía.",
      "En el átomo de cadmio el nivel \\({}^1P_1\\) en presencia de campo magnético se desdobla en 5 subniveles de energía.",
      "Los niveles de energía equiespaciados son inversamente proporcionales al campo magnético aplicado."
    ],
    "matched_page": 18,
    "correct_index": 1,
    "correct_text": "En el átomo de cadmio el nivel \\({}^1D_2\\) en presencia de campo magnético se desdobla en 5 subniveles de energía.",
    "bold_span_matched": "En el átomo de cadmio el nivel 1D2 en presencia de campo magnético se desdobla en 5 subniveles de energía.",
    "justification": "La multiplicidad Zeeman de un nivel viene determinada por el número cuántico del momento angular total \\(J\\), produciendo \\(2J+1\\) estados degenerados. Para la notación de Russell-Saunders \\({}^1D_2\\): El superíndice indica la multiplicidad de espín \\(2S+1 = 1 \\implies S=0\\). La letra \\(D\\) indica el momento angular orbital \\(L=2\\). Por acoplamiento espín-órbita, \\(J = L+S = 2\\). El número de subniveles magnéticos \\(m_J\\) es \\(2(2) + 1 = 5\\)."
  },
  {
    "id": "C5_A",
    "text": "Empleando dos montajes idénticos hemos obtenido que en uno de ellos la tensión Hall es positiva, y en el otro que es negativa. Esto se debe a que:",
    "options": [
      "En uno los portadores son huecos y en el otro son electrones.",
      "En uno el campo magnético es más intenso.",
      "En uno la corriente circula al revés.",
      "En uno la temperatura de la muestra es más alta."
    ],
    "matched_page": 16,
    "correct_index": 0,
    "correct_text": "En uno los portadores son huecos y en el otro son electrones.",
    "bold_span_matched": "En uno los portadores son huecos y en el otro son electrones.",
    "justification": "La velocidad de deriva \\(\\vec{v}_d\\) de los portadores invierte su sentido en función del signo de la carga para mantener el mismo sentido macroscópico de la corriente \\(\\vec{J}\\). Al evaluar la fuerza de Lorentz transversal \\(\\vec{F}_m = q(\\vec{v}_d \\times \\vec{B})\\), tanto huecos (\\(q>0\\)) como electrones (\\(q<0\\)) son deflectados hacia la misma frontera geométrica del material. En consecuencia, el potencial de la cara en la que se acumulan toma el signo algebraico del portador de carga mayoritario, definiendo el signo del coeficiente de Hall \\(R_H\\)."
  },
  {
    "id": "C6_A",
    "text": "¿Cómo depende la tensión del campo magnético?",
    "options": [
      "Es directamente proporcional.",
      "Es inversamente proporcional.",
      "Es cuadrática.",
      "Es independiente del campo."
    ],
    "matched_page": 16,
    "correct_index": 0,
    "correct_text": "Es directamente proporcional.",
    "bold_span_matched": "es directamente proporcional.",
    "justification": "El campo eléctrico transversal (campo Hall) se establece cuando la fuerza eléctrica compensa exactamente la fuerza magnética de Lorentz en régimen estacionario (\\(qE_H = qv_dB\\)). Expresando la velocidad de deriva en función de la densidad de corriente, se obtiene la tensión Hall: \\(V_H = \\frac{1}{nqe} \\frac{IB}{d}\\). Asumiendo que las propiedades intensivas del material (\\(n, q\\)) y las geométricas (\\(d\\), así como la corriente \\(I\\)) son constantes, \\(V_H\\) es una función lineal \\(V_H(B) \\propto B\\)."
  },
  {
    "id": "C7_A",
    "text": "En la práctica de resonancia electrónica:",
    "options": [
      "Los niveles del electrón se desdoblan en dos debido a su factor giromagnético.",
      "El momento magnético del electrón se acopla al campo magnético externo.",
      "El espín del electrón puede valer 1/2 o -1/2.",
      "El electrón no interactúa con campos electromagnéticos."
    ],
    "matched_page": 16,
    "correct_index": 1,
    "correct_text": "El momento magnético del electrón se acopla al campo magnético externo.",
    "bold_span_matched": "El momento magnético del electrón se acopla al campo magnético externo.",
    "justification": "La resonancia paramagnética se sustenta en la perturbación introducida en el Hamiltoniano del sistema por la presencia de un campo magnético estático \\(\\vec{B}\\). Este término de interacción (efecto Zeeman de espín) es el producto escalar entre el campo externo y el momento magnético dipolar intrínseco del electrón: \\(\\hat{H}_{\\text{Zeeman}} = -\\vec{\\mu}_S \\cdot \\vec{B}\\). Este acoplamiento rompe la degeneración de Kramers de los estados base del sistema."
  },
  {
    "id": "C8_A",
    "text": "En la práctica de resonancia electrónica, ¿cuál debe ser la energía necesaria para que se produzca el salto de un electrón de un nivel a otro?",
    "options": [
      "Debe ser igual a la energía del fotón absorbido.",
      "Debe ser el doble de la energía del fotón absorbido.",
      "Debe ser la mitad de la energía del fotón absorbido.",
      "Debe ser independiente del fotón."
    ],
    "matched_page": 16,
    "correct_index": 0,
    "correct_text": "Debe ser igual a la energía del fotón absorbido.",
    "bold_span_matched": "debe ser igual a la energía del fotón absorbido.",
    "justification": "Tratado bajo la aproximación semiclásica, la radiación electromagnética (microondas) induce transiciones cuánticas entre los autoestados del operador \\(\\hat{S}_z\\) (\\(m_s = -1/2 \\to m_s = +1/2\\)). El postulado de Bohr para la absorción resonante estipula que la energía del cuanto del campo electromagnético incidente (\\(E = h\\nu\\)) debe igualar de forma exacta la diferencia de autovalores de energía del Hamiltoniano perturbado: \\(\\Delta E = g \\mu_B B = h\\nu\\)."
  },
  {
    "id": "O1_A",
    "text": "En la práctica del interferómetro de Michelson, ¿dónde se forman las interferencias?",
    "options": [
      "En el vidrio esmerilado.",
      "En el espejo que tenemos enfrente de nosotros (E2).",
      "En nuestro ojo.",
      "En el espejo que tenemos a nuestra derecha (E1)."
    ],
    "matched_page": 15,
    "correct_index": 2,
    "correct_text": "En nuestro ojo.",
    "bold_span_matched": "En nuestro ojo.",
    "justification": "En la configuración típica del interferómetro de Michelson para la observación visual directa (empleando una fuente extensa para generar anillos de Haidinger o franjas de igual inclinación), los haces interfieren espacialmente en el infinito. El cristalino del ojo actúa como una lente convergente que focaliza estos haces paralelos, integrando la diferencia de fase \\(\\delta = \\frac{4\\pi d}{\\lambda}\\cos\\theta\\) y proyectando el patrón de interferencia localizado directamente sobre la retina del observador."
  },
  {
    "id": "O2_A",
    "text": "En la práctica del interferómetro de Michelson las interferencias se deben a:",
    "options": [
      "La superposición de dos haces de luz que vienen de dos fuentes extensas.",
      "La superposición de dos haces de luz que vienen de dos fuentes puntuales.",
      "La superposición de dos haces de luz que vienen de una fuente extensa.",
      "La superposición de dos haces de luz que vienen de una fuente puntual."
    ],
    "matched_page": 15,
    "correct_index": 2,
    "correct_text": "La superposición de dos haces de luz que vienen de una fuente extensa.",
    "bold_span_matched": "La superposición de dos haces de luz que vienen de una fuente extensa.",
    "justification": "El interferómetro de Michelson es un dispositivo de interferencia por división de amplitud. Un divisor de haz (lente semiespejada) escinde la amplitud electromagnética proveniente de una única fuente extensa primaria. El uso de una fuente extensa garantiza la luminosidad del sistema y permite la observación de franjas de igual inclinación, donde la coherencia espacial se mantiene entre los puntos homólogos de las dos fuentes virtuales generadas por la reflexión en los espejos E1 y E2."
  },
  {
    "id": "O3_A",
    "text": "¿Por qué se utilizan redes de difracción en espectroscopía?",
    "options": [
      "Porque dispersan la luz en todas direcciones por igual.",
      "Porque se producen interferencias para cada longitud de onda constructivas solo en una zona del espacio.",
      "Porque absorben las longitudes de onda no deseadas.",
      "No se pueden utilizar."
    ],
    "matched_page": 13,
    "correct_index": 1,
    "correct_text": "Porque se producen interferencias para cada longitud de onda constructivas solo en una zona del espacio.",
    "bold_span_matched": "Porque se producen interferencias para cada longitud de onda constructivas solo en una zona del espacio.",
    "justification": "Las redes de difracción rigen su comportamiento según la ecuación fundamental \\(d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda\\). La condición de interferencia constructiva (máximos principales) establece que la desviación angular \\(\\theta_m\\) es una función biunívoca de la longitud de onda \\(\\lambda\\) para un orden \\(m\\) dado. Por lo tanto, el poder dispersivo de la red \\(D = \\frac{d\\theta_m}{d\\lambda}\\) separa espacialmente las distintas componentes monocromáticas del espectro, permitiendo su resolución angular."
  },
  {
    "id": "O4_A",
    "text": "En la práctica de red de difracción, medimos el ángulo de mínima desviación porque:",
    "options": [
      "No medimos el de mínima desviación, medimos el de máxima desviación.",
      "Porque nuestro montaje experimental no nos permite hacer otra cosa.",
      "Porque así no tenemos que tener en cuenta el ángulo de incidencia.",
      "Porque la red de difracción se rompe si se desvía más."
    ],
    "matched_page": 13,
    "correct_index": 2,
    "correct_text": "Porque así no tenemos que tener en cuenta el ángulo de incidencia.",
    "bold_span_matched": "Porque así no tenemos que tener en cuenta el ángulo de incidencia.",
    "justification": "La desviación total experimentada por un haz en una red de difracción es \\(\\delta = \\theta_i + \\theta_m\\). La condición de mínima desviación se alcanza cuando el montaje posee simetría respecto al plano normal a la red, es decir, \\(\\theta_i = \\theta_m\\). Bajo esta geometría, la ecuación de la red se reduce a \\(2d\\sin(\\theta) = m\\lambda\\). Experimentalmente, esto permite determinar \\(\\lambda\\) midiendo únicamente el ángulo de desviación total, eliminando la necesidad de definir y medir con precisión la normal absoluta de la red (lo cual eliminaría la dependencia explícita del ángulo de incidencia \\(\\theta_i\\) frente a un sistema de referencia externo)."
  },
  {
    "id": "O5_A",
    "text": "Si en la práctica de parámetros de Stokes, una vez preparado todo, antes de medir los parámetros de Stokes, cambiamos la lámpara por otra:",
    "options": [
      "No se puede porque la lámina retardadora del analizador circular solo sirve para una línea del doblete del sodio.",
      "No se puede porque la medida de los parámetros de Stokes solo tiene sentido para la lámpara de sodio.",
      "Sí se puede. Solo debemos modificar la posición de la lente colimadora.",
      "No se puede porque tendríamos que girar los polarizadores, cambiar su posición..."
    ],
    "matched_page": 14,
    "correct_index": 0,
    "correct_text": "No se puede porque la lámina retardadora del analizador circular solo sirve para una línea del doblete del sodio.",
    "bold_span_matched": "No se puede porque la lámina retardadora del analizador circular solo sirve para una línea del doblete del sodio.",
    "justification": "El retardo de fase \\(\\Gamma\\) introducido por una lámina birrefringente de espesor \\(e\\) obedece a la relación: \\(\\Gamma = \\frac{2\\pi}{\\lambda} |n_e - n_o| e\\). Como se observa, el retardo es estrictamente dependiente de \\(\\lambda\\) (es inherentemente cromático). Una lámina diseñada o calibrada para funcionar como cuarto de onda (\\(\\Gamma = \\pi/2\\)) para la longitud de onda del sodio (\\(\\approx 589\\text{ nm}\\)) introducirá un retardo arbitrario diferente si se irradia con otra longitud de onda, invalidando la base matemática para la extracción de los parámetros de Stokes."
  },
  {
    "id": "O6_A",
    "text": "¿Qué parámetros de Stokes obtenemos?",
    "options": [
      "Los de la luz de la lámpara de sodio.",
      "Los de la luz de la lámpara de sodio tras pasar un filtro de muestra.",
      "Los de la lámpara de sodio reflejada en un espejo plano.",
      "Los de la luz blanca de fondo de la habitación."
    ],
    "matched_page": 14,
    "correct_index": 1,
    "correct_text": "Los de la luz de la lámpara de sodio tras pasar un filtro de muestra.",
    "bold_span_matched": "Los de la luz de la lámpara de sodio tras pasar un filtro de muestra.",
    "justification": "El formalismo de Stokes se emplea para caracterizar el estado de polarización de una onda electromagnética. En un montaje polarimétrico, la luz incidente de polarización conocida interactúa con un elemento óptico (la muestra), el cual modifica dicho estado (descrito matemáticamente por la acción de una matriz de Mueller sobre el vector de Stokes incidente: \\(\\vec{S}' = \\textbf{M} \\vec{S}\\)). El analizador situado a posteriori mide la intensidad proyectada en diferentes bases (lineal y circular) para determinar el nuevo vector \\(\\vec{S}'\\) emergente tras la interacción con el dieléctrico/filtro."
  },
  {
    "id": "O7_A",
    "text": "En el experimento de Young, ¿por qué utilizamos una lámpara de sodio?",
    "options": [
      "Porque nos da la gana, se podría usar cualquier otra cuasimonocromática.",
      "Porque el biprisma de Fresnel solo funciona con sodio.",
      "Porque el color amarillo es más visible en el microscopio.",
      "Porque emite en un espectro continuo de longitudes de onda."
    ],
    "matched_page": 14,
    "correct_index": 0,
    "correct_text": "Porque nos da la gana, se podría usar cualquier otra cuasimonocromática.",
    "bold_span_matched": "porque nos da la gana, se podría usar cualquier otra cuasimonocromática.",
    "justification": "Para obtener un patrón de interferencia estacionario, la diferencia de marcha \\(\\Delta x\\) entre los haces debe ser menor que la longitud de coherencia de la fuente (\\(L_c = c \\tau_c \\approx \\frac{\\lambda^2}{\\Delta\\lambda}\\)). El requisito físico estricto es poseer un ancho de banda espectral \\(\\Delta\\lambda\\) lo suficientemente estrecho (luz cuasimonocromática) para asegurar coherencia temporal. El sodio se emplea por disponibilidad e intensidad, pero cualquier emisión con una longitud de coherencia adecuada (como un láser o una lámpara espectral filtrada) satisfará la condición de interferencia."
  },
  {
    "id": "O8_A",
    "text": "En el experimento de Young, ¿para qué sirve el biprisma de Fresnel?",
    "options": [
      "Para formar múltiples imágenes de las rendijas que interfieren entre ellas.",
      "Para obtener 2 imágenes de la rendija.",
      "Se usa porque no sé qué, pero si tuviésemos una rendija distinta podría usarse una lente en vez del biprisma.",
      "Para filtrar las longitudes de onda no deseadas."
    ],
    "matched_page": 14,
    "correct_index": 1,
    "correct_text": "Para obtener 2 imágenes de la rendija.",
    "bold_span_matched": "Para obtener 2 imágenes de la rendija.",
    "justification": "A diferencia del experimento clásico de Young de doble rendija, el biprisma de Fresnel es un método de interferencia por división de frente de onda que no bloquea parte del campo electromagnético. El dispositivo, compuesto por dos prismas de ángulo muy agudo unidos por su base, refracta el frente de onda divergente procedente de una única rendija real iluminada. Esta doble refracción genera dos focos virtuales desplazados espacialmente, que actúan geométricamente como dos fuentes secundarias coherentes (\\(S_1\\) y \\(S_2\\)) en fase, permitiendo la superposición de sus ondas y la consecuente interferencia en la zona de solapamiento."
  },
  {
    "id": "C_Ex1",
    "text": "En la práctica del efecto Hall, los puntos de conexión transversal \\(x\\) e \\(y\\) no están perfectamente alineados en la lámina conductora. Esto introduce una diferencia de potencial parásita (\"offset\") \\(V_{zy} = R_{xy}I\\) incluso en ausencia de campo magnético. ¿Cómo se compensa experimentalmente este efecto en el montaje?",
    "options": [
      "Se conecta una resistencia de gran valor en serie con el microvoltímetro para atenuar la tensión.",
      "La placa de medida dispone de dos contactos en un lado de la lámina y un potenciómetro que permite ajustar y equilibrar sus potenciales en ausencia de campo magnético.",
      "Se invierte el sentido de la corriente de trabajo y se promedian las lecturas de tensión de forma matemática en cada punto.",
      "No se puede compensar experimentalmente, por lo que es obligatorio medir siempre con el electroimán encendido desde el inicio."
    ],
    "correct_index": 1,
    "correct_text": "La placa de medida dispone de dos contactos en un lado de la lámina y un potenciómetro que permite ajustar y equilibrar sus potenciales en ausencia de campo magnético.",
    "justification": "La placa de soporte de las muestras de plata y wolframio incorpora un contacto en un lado (punto \\(x\\)) y dos contactos ligeramente separados a la izquierda y derecha de la proyección de \\(x\\) en el otro lado. Estos dos contactos se acoplan a un potenciómetro analógico. Al variar este potenciómetro en ausencia de campo magnético (\\(B = 0\\)), se busca el punto equivalente donde la tensión \\(V_{xy}\\) sea cero para la corriente de trabajo elegida, anulando la tensión de offset.",
    "matched_page": "1-8"
  },
  {
    "id": "C_Ex2",
    "text": "Consideremos una lámina Hall en el plano \\(XZ\\) por la que circula una corriente eléctrica \\(I\\) en la dirección \\(+X\\). Se aplica un campo magnético \\(\\vec{B}\\) en la dirección \\(+Y\\). ¿Cuál es la dirección y sentido de la fuerza magnética de Lorentz que experimentan los portadores de carga, y cómo depende esto de su signo?",
    "options": [
      "La fuerza va en la dirección \\(+Z\\) si los portadores son positivos (huecos) y en \\(-Z\\) si son negativos (electrones).",
      "La fuerza va en la dirección \\(+Z\\) independientemente de si los portadores son positivos o negativos.",
      "La fuerza va en la dirección \\(-Z\\) independientemente de si los portadores son positivos o negativos.",
      "Los portadores positivos experimentan una fuerza en la dirección \\(+Y\\) y los negativos en \\(-Y\\)."
    ],
    "correct_index": 1,
    "correct_text": "La fuerza va en la dirección \\(+Z\\) independientemente de si los portadores son positivos o negativos.",
    "justification": "La fuerza de Lorentz es \\(\\vec{F}_m = q (\\vec{v}_d \\times \\vec{B})\\). Si los portadores son positivos (\\(q > 0\\)), su velocidad de deriva \\(\\vec{v}_d\\) va en el sentido de la corriente (\\(+X\\)), de modo que \\(\\vec{F}_m \\propto (+q) (\\vec{u}_x \\times \\vec{u}_y) = +q \\vec{u}_z\\). Si son negativos (\\(q < 0\\)), su velocidad de deriva va en sentido opuesto (\\(-X\\)), por lo que \\(\\vec{F}_m \\propto (-|q|) (-\\vec{u}_x \\times \\vec{u}_y) = +|q| \\vec{u}_z\\). Por tanto, la fuerza magnética desvía a ambos tipos de portadores hacia la misma cara (\\(+Z\\)). Lo que cambia es el signo de la carga acumulada en dicha cara.",
    "matched_page": "1-8"
  },
  {
    "id": "C_Ex3",
    "text": "Durante la práctica, se observa que las fluctuaciones de tensión termoeléctrica en los contactos son mucho más severas y difíciles de estabilizar en la lámina de wolframio (\\(W\\)) que en la de plata (\\(Ag\\)). ¿A qué se debe este comportamiento?",
    "options": [
      "El wolframio tiene una temperatura de fusión más baja, por lo que sufre deformaciones plásticas debido al calor.",
      "La resistividad del wolframio es mucho mayor que la de la plata, lo que genera un calentamiento por efecto Joule muy superior que induce corrientes de aire y gradientes térmicos en los contactos.",
      "La plata no experimenta efecto Joule por comportarse como un superconductor a temperatura de laboratorio.",
      "El wolframio es ferromagnético y absorbe el calor del electroimán circundante."
    ],
    "correct_index": 1,
    "correct_text": "La resistividad del wolframio es mucho mayor que la de la plata, lo que genera un calentamiento por efecto Joule muy superior que induce corrientes de aire y gradientes térmicos en los contactos.",
    "justification": "El wolframio tiene una resistividad eléctrica sustancialmente mayor que la plata. Al circular intensidades elevadas (hasta 10-12 A) por la lámina, la potencia disipada por efecto Joule (\\(P = I^2 R\\)) es mucho mayor en el wolframio. Este calentamiento calienta el aire circundante, creando corrientes de aire por convección que causan fluctuaciones térmicas rápidas en los contactos de soldadura de la lámina, generando tensiones termoeléctricas parásitas por efecto Seebeck.",
    "matched_page": "1-8"
  },
  {
    "id": "C_Ex4",
    "text": "En un experimento con una lámina de plata de espesor \\(d = 50 \\times 10^{-6}\\text{ m}\\), se obtiene un ajuste lineal de la tensión Hall \\(V_{\\text{H}}\\) frente al campo magnético \\(B\\) con una pendiente de \\(m = 1.4 \\times 10^{-7}\\text{ V/T}\\), manteniendo la intensidad constante en \\(I = 7.0\\text{ A}\\). ¿Cuál es el valor experimental de la constante de Hall \\(R_{\\text{H}}\\) de la plata?",
    "options": [
      "\\(R_{\\text{H}} \\approx 1.0 \\times 10^{-15}\\text{ m}^3/\\text{C}\\)",
      "\\(R_{\\text{H}} \\approx 1.0 \\times 10^{-12}\\text{ m}^3/\\text{C}\\)",
      "\\(R_{\\text{H}} \\approx 1.0 \\times 10^{-10}\\text{ m}^3/\\text{C}\\)",
      "\\(R_{\\text{H}} \\approx 1.4 \\times 10^{-7}\\text{ m}^3/\\text{C}\\)"
    ],
    "correct_index": 2,
    "correct_text": "\\(R_{\\text{H}} \\approx 1.0 \\times 10^{-10}\\text{ m}^3/\\text{C}\\)",
    "justification": "La tensión de Hall viene dada por \\(V_{\\text{H}} = \\frac{R_{\\text{H}} I B}{d}\\). La pendiente de la recta \\(V_{\\text{H}}\\) frente a \\(B\\) es \\(m = \\frac{R_{\\text{H}} I}{d}\\). Despejando la constante de Hall \\(R_{\\text{H}}\\):\n\\[R_{\\text{H}} = \\frac{m \\cdot d}{I} = \\frac{1.4 \\times 10^{-7}\\text{ V/T} \\times 50 \\times 10^{-6}\\text{ m}}{7.0\\text{ A}} = 1.0 \\times 10^{-10}\\text{ m}^3/\\text{C}\\]",
    "matched_page": "1-8"
  },
  {
    "id": "C_Ex5",
    "text": "En la observación del efecto Zeeman en configuración longitudinal (paralela al campo magnético \\(\\vec{B}\\)), la línea central del triplete (componente \\(\\pi\\), \\(\\Delta m = 0\\)) no es visible en el espectro. ¿Cuál es la explicación física de esta ausencia?",
    "options": [
      "Los fotones asociados a \\(\\Delta m = 0\\) se absorben por las paredes de la lámpara de cadmio.",
      "Los dipolos atómicos oscilan en la dirección del campo magnético y, al ser las ondas electromagnéticas transversales, no se propaga radiación en la dirección de dicha oscilación.",
      "La transición \\(\\Delta m = 0\\) está estrictamente prohibida por las reglas de selección cuánticas en presencia de campo magnético.",
      "La componente \\(\\pi\\) solo se emite si el campo magnético supera los 2 Teslas de intensidad."
    ],
    "correct_index": 1,
    "correct_text": "Los dipolos atómicos oscilan en la dirección del campo magnético y, al ser las ondas electromagnéticas transversales, no se propaga radiación en la dirección de dicha oscilación.",
    "justification": "La componente \\(\\pi\\) corresponde a transiciones donde el momento angular no cambia de proyección (\\(\\Delta m = 0\\)), lo que clásicamente equivale a un dipolo eléctrico que oscila linealmente a lo largo del eje del campo magnético \\(\\vec{B}\\). La teoría electromagnética clásica y cuántica establece que un dipolo eléctrico no irradia energía en la dirección de su propio eje de oscilación. Como la observación longitudinal se realiza precisamente a lo largo de este eje, la componente \\(\\pi\\) no es observable.",
    "matched_page": "9-18"
  },
  {
    "id": "C_Ex6",
    "text": "¿Por qué el procedimiento experimental de calibración del campo magnético en el entrehierro mediante la sonda Hall debe realizarse con la lámpara de cadmio APAGADA?",
    "options": [
      "Para evitar perturbaciones electromagnéticas que distorsionen la señal de radiofrecuencia de la sonda.",
      "Porque la sonda Hall es muy sensible a la temperatura y el intenso calor que genera la lámpara encendida la dañaría irreversiblemente.",
      "Porque el campo magnético del electroimán cambia de sentido si la lámpara se encuentra encendida.",
      "Para asegurar que la tensión del voltímetro de la sonda sea puramente alterna."
    ],
    "correct_index": 1,
    "correct_text": "Porque la sonda Hall es muy sensible a la temperatura y el intenso calor que genera la lámpara encendida la dañaría irreversiblemente.",
    "justification": "La ampolla de la lámpara de cadmio alcanza temperaturas sumamente elevadas para mantener el cadmio en fase de vapor durante la descarga. Las sondas de efecto Hall utilizadas para la calibración del campo magnético son dispositivos semiconductores delicados cuyo rango de temperatura de operación es limitado. Introducir la sonda en el estrecho canal entre los polos con la lámpara encendida causaría un calentamiento excesivo que alteraría su calibración o destruiría el sensor.",
    "matched_page": "9-18"
  },
  {
    "id": "C_Ex7",
    "text": "En la observación longitudinal del efecto Zeeman, ¿qué función realiza la lámina de cuarto de onda (\\(\\lambda/4\\)) colocada antes del analizador polarizador lineal?",
    "options": [
      "Filtra las componentes de alta frecuencia de la luz de cadmio.",
      "Convierte las componentes polarizadas circularmente (\\(\\sigma^+\\) y \\(\\sigma^-\\)) en luz polarizada linealmente en direcciones perpendiculares entre sí para poder separarlas ópticamente.",
      "Corrige los errores de camino óptico introducidos por el interferómetro de Fabry-Perot.",
      "Bloquea la radiación infrarroja de la lámpara de descarga."
    ],
    "correct_index": 1,
    "correct_text": "Convierte las componentes polarizadas circularmente (\\(\\sigma^+\\) y \\(\\sigma^-\\)) en luz polarizada linealmente en direcciones perpendiculares entre sí para poder separarlas ópticamente.",
    "justification": "Las componentes del doblete longitudinal (\\(\\sigma^+\\) y \\(\\sigma^-\\)) presentan polarización circular derecha e izquierda. Al atravesar una lámina de cuarto de onda (\\(\\lambda/4\\)), se introduce un desfase de \\(\\pi/2\\) entre las componentes ortogonales del campo eléctrico, transformando las ondas circulares en ondas linealmente polarizadas a \\(\\pm 45^\\circ\\) respecto a los ejes rápidos y lentos de la lámina. Esto permite extinguir o aislar una de las dos líneas simplemente girando un polarizador lineal posterior (analizador).",
    "matched_page": "9-18"
  },
  {
    "id": "C_Ex8",
    "text": "¿Por qué se utiliza la línea roja de emisión del cadmio (\\(\\lambda = 643.8\\text{ nm}\\)) en esta práctica para medir la relación carga/masa (\\(e/m\\)) del electrón?",
    "options": [
      "Porque es una transición entre estados singletes (\\({}^1\\text{D}_2 \\to {}^1\\text{P}_1\\)), lo que da lugar al efecto Zeeman normal (un triplete simple de Lorentz) sin la complicación añadida del espín.",
      "Porque la luz roja no es absorbida por el aire a temperatura ambiente.",
      "Porque es la única transición del cadmio que se produce en el rango visible.",
      "Porque las líneas de Zeeman anómalas no sufren desviación en presencia de campo magnético."
    ],
    "correct_index": 0,
    "correct_text": "Porque es una transición entre estados singletes (\\({}^1\\text{D}_2 \\to {}^1\\text{P}_1\\)), lo que da lugar al efecto Zeeman normal (un triplete simple de Lorentz) sin la complicación añadida del espín.",
    "justification": "La transición roja del cadmio ocurre entre los niveles singletes \\({}^1\\text{D}_2\\) (\\(S=0, L=2, J=2\\)) y \\({}^1\\text{P}_1\\) (\\(S=0, L=1, J=1\\)). Dado que el espín total de ambos niveles es cero (\\(S=0\\)), no hay acoplamiento con el espín y el factor de Landé de ambos niveles es exactamente la unidad (\\(g=1\\)). Esto genera un desdoblamiento de Zeeman clásico o normal de 3 líneas (triplete de Lorentz) equiespaciadas energéticamente en \\(\\Delta E = \\mu_{\\text{B}} B\\), permitiendo calcular \\(e/m\\) mediante fórmulas analíticas sencillas.",
    "matched_page": "9-18"
  },
  {
    "id": "C_Ex9",
    "text": "Si el potencial de aceleración \\(U\\) aplicado a un tubo de rayos X con ánodo de molibdeno disminuye de 35 kV a 20 kV, ¿cómo se ve afectado el espectro de emisión obtenido?",
    "options": [
      "Desaparece todo el espectro característico de líneas, pero el continuo de frenado permanece idéntico.",
      "La longitud de onda mínima de corte del espectro continuo (límite de Duane-Hunt \\(\\lambda_c\\)) se desplaza hacia valores mayores (menores energías).",
      "La longitud de onda mínima de corte \\(\\lambda_c\\) disminuye proporcionalmente a la raíz cuadrada del voltaje.",
      "El espectro se desplaza íntegramente hacia el rango de luz visible por efecto fotoeléctrico."
    ],
    "correct_index": 1,
    "correct_text": "La longitud de onda mínima de corte del espectro continuo (límite de Duane-Hunt \\(\\lambda_c\\)) se desplaza hacia valores mayores (menores energías).",
    "justification": "El límite de Duane-Hunt establece que la energía del fotón más energético emitido por frenado (Bremsstrahlung) es igual a la energía de los electrones acelerados en el tubo: \\(eU = h\\nu_{\\text{máx}} = hc/\\lambda_c\\). Despejando la longitud de onda de corte, \\(\\lambda_c = hc/(eU)\\), se deduce que \\(\\lambda_c\\) es inversamente proporcional al potencial \\(U\\). Por tanto, al disminuir el voltaje \\(U\\), la longitud de onda de corte aumenta (menor energía límite).",
    "matched_page": "21-27"
  },
  {
    "id": "C_Ex10",
    "text": "En el equipo de difracción de rayos X, el goniómetro automático mantiene siempre una relación angular de 2 a 1 entre el detector Geiger y el cristal analizado. ¿Cuál es el fundamento de esta relación?",
    "options": [
      "Que el detector debe moverse a doble velocidad lineal para no perder el haz de electrones difractado.",
      "Que cuando el haz incide con un ángulo \\(\\alpha\\) sobre los planos cristalinos, el haz reflejado por Bragg se desvía un ángulo total de \\(2\\alpha\\) respecto a la dirección del haz incidente original.",
      "Que la difracción de Bragg solo ocurre para múltiplos enteros pares del ángulo de incidencia.",
      "Que compensa el factor de escala geométrico del colimador de wolframio."
    ],
    "correct_index": 1,
    "correct_text": "Que cuando el haz incide con un ángulo \\(\\alpha\\) sobre los planos cristalinos, el haz reflejado por Bragg se desvía un ángulo total de \\(2\\alpha\\) respecto a la dirección del haz incidente original.",
    "justification": "De acuerdo con la ley de reflexión, si un haz incide con un ángulo \\(\\alpha\\) sobre los planos atómicos de un monocristal, el haz reflejado emerge con el mismo ángulo \\(\\alpha\\) respecto al plano del cristal. Por geometría de ángulos, el haz reflejado tiene una dirección desviada un ángulo \\(\\theta_{\\text{dev}} = \\alpha + \\alpha = 2\\alpha\\) respecto a la línea del haz incidente. Por tanto, para registrar la intensidad reflejada a un ángulo de Bragg \\(\\alpha\\), el detector debe colocarse a un ángulo de \\(2\\alpha\\) respecto a la horizontal del haz primario.",
    "matched_page": "21-27"
  },
  {
    "id": "C_Ex11",
    "text": "En el estudio de la atenuación de rayos X en distintos materiales, se comprueba la ley de Moseley para los bordes de absorción K. ¿Qué representa la constante \\(\\sigma\\) en dicha relación?",
    "options": [
      "El coeficiente de atenuación lineal del medio material.",
      "La constante de Rydberg del blanco metálico del ánodo.",
      "La constante de apantallamiento, que modela la reducción de la carga nuclear efectiva percibida por un electrón debido al resto de electrones del átomo.",
      "La distancia interplanar de la red cristalina del LiF o NaCl."
    ],
    "correct_index": 2,
    "correct_text": "La constante de apantallamiento, que modela la reducción de la carga nuclear efectiva percibida por un electrón debido al resto de electrones del átomo.",
    "justification": "La ley de Moseley establece que la raíz cuadrada de la frecuencia de transición es proporcional a la carga nuclear efectiva, que se escribe como \\(Z_{\\text{eff}} = Z - \\sigma\\), donde \\(Z\\) es el número atómico y \\(\\sigma\\) la constante de apantallamiento. Esta constante cuantifica cómo el campo electrostático del núcleo es apantallado por la presencia de otros electrones internos en el átomo, siendo un parámetro empírico que depende del nivel energético (\\(\\sigma \\approx 3.74\\) o \\(5.74\\) para los bordes de absorción K).",
    "matched_page": "21-27"
  },
  {
    "id": "C_Ex12",
    "text": "Un haz de rayos X de intensidad \\(I_0\\) atraviesa una chapa de cobre de espesor \\(L = 0.5\\text{ mm}\\). Si el coeficiente de atenuación lineal del cobre para dicha longitud de onda es \\(\\mu = 40\\text{ cm}^{-1}\\), ¿qué porcentaje de la intensidad del haz incidente consigue atravesar el metal?",
    "options": [
      "Aproximadamente un \\(82\\%\\)",
      "Aproximadamente un \\(50\\%\\)",
      "Aproximadamente un \\(14\\%\\)",
      "Aproximadamente un \\(2\\%\\)"
    ],
    "correct_index": 2,
    "correct_text": "Aproximadamente un \\(14\\%\\)",
    "justification": "La ley de atenuación de rayos X es \\(I_{\\text{out}} = I_0 \\text{e}^{-\\mu L}\\). Expresando todas las magnitudes en las mismas unidades de longitud: \\(\\mu = 40\\text{ cm}^{-1} = 4.0\\text{ mm}^{-1}\\), y \\(L = 0.5\\text{ mm}\\). El exponente resulta ser:\n\\[- \\mu L = -(4.0\\text{ mm}^{-1}) \\times (0.5\\text{ mm}) = -2.0\\]\nLa fracción transmitida es:\n\\[\\frac{I_{\\text{out}}}{I_0} = \\text{e}^{-2.0} \\approx 0.1353 \\implies 13.5\\% \\approx 14\\%\\]",
    "matched_page": "21-27"
  },
  {
    "id": "C_Ex13",
    "text": "La muestra activa que se introduce en la bobina del oscilador de radiofrecuencia durante la práctica de RSE es difenil-picril-hidracilo (DPPH). ¿Qué propiedad física clave la hace idónea para este experimento?",
    "options": [
      "Es un semiconductor intrínseco con una alta densidad de portadores de tipo hueco.",
      "Es un radical libre orgánico estable que posee un electrón desapareado con momento angular orbital \\(l=0\\), lo que resulta en un factor Landé experimental \\(g \\approx 2\\).",
      "Es una sustancia luminiscente que emite fotones en el rango visible por efecto Zeeman.",
      "Su gran anisotropía cristalina permite la separación por doble refracción del espín."
    ],
    "correct_index": 1,
    "correct_text": "Es un radical libre orgánico estable que posee un electrón desapareado con momento angular orbital \\(l=0\\), lo que resulta en un factor Landé experimental \\(g \\approx 2\\).",
    "justification": "El DPPH es un compuesto orgánico estable con un electrón libre no apareado. La deslocalización del orbital de este electrón hace que su momento angular orbital sea nulo (\\(l=0\\)), de modo que el momento magnético proviene casi exclusivamente del espín electrónico. Como consecuencia, su factor de Landé es extremadamente cercano al del electrón libre, \\(g \\approx 2.0036\\), proporcionando una señal de resonancia muy estrecha y fácil de medir experimentalmente.",
    "matched_page": "28-34"
  },
  {
    "id": "C_Ex14",
    "text": "En la práctica de RSE, en lugar de variar con gran precisión la frecuencia de la radiofrecuencia \\(\\nu\\) del circuito oscilador, se prefiere superponer un campo magnético sinusoidal \\(B_1 \\sin\\omega t\\) sobre el campo estático \\(B_0\\). ¿Qué ventaja experimental aporta esto?",
    "options": [
      "Permite que la resonancia se mantenga estacionaria en un valor constante sin fluctuaciones térmicas.",
      "Facilita la observación de la señal en el osciloscopio barriendo el campo magnético de forma periódica a través del valor de resonancia exacto de la muestra.",
      "Anula la autoinducción de las bobinas Helmholtz eliminando los desfases de corriente.",
      "Permite duplicar el factor de Landé experimental en cada periodo."
    ],
    "correct_index": 1,
    "correct_text": "Facilita la observación de la señal en el osciloscopio barriendo el campo magnético de forma periódica a través del valor de resonancia exacto de la muestra.",
    "justification": "Sintonizar y barrer frecuencias de radiofrecuencia ultra-altas (megahertzios) con una precisión de hercios manteniendo la estabilidad es tecnológicamente muy complejo. Es mucho más sencillo fijar la frecuencia del resonador y barrer el campo magnético de manera sinusoidal usando una bobina de modulación AC. Esto hace que el campo total cruce el valor exacto de resonancia de forma cíclica, permitiendo representar en el osciloscopio el pico de absorción como una señal en función del tiempo.",
    "matched_page": "28-34"
  },
  {
    "id": "C_Ex15",
    "text": "En un experimento de RSE con DPPH, sintonizamos el oscilador a una frecuencia de trabajo fija de \\(\\nu_0 = 50.0\\text{ MHz}\\). Se observa que la resonancia se produce para un campo magnético estático de \\(B_0 = 1.78\\text{ mT}\\). Utilizando los valores \\(h = 6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s}\\) y \\(\\mu_{\\text{B}} = 9.27 \\times 10^{-24}\\text{ A}\\cdot\\text{m}^2\\), ¿cuál es el factor de Landé \\(g\\) experimental obtenido?",
    "options": [
      "\\(g \\approx 1.00\\)",
      "\\(g \\approx 2.01\\)",
      "\\(g \\approx 3.82\\)",
      "\\(g \\approx 5.56\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(g \\approx 2.01\\)",
    "justification": "La condición de resonancia cuántica es \\(h\\nu = g\\mu_{\\text{B}}B\\). Despejando el factor de Landé \\(g\\):\n\\[g = \\frac{h \\nu_0}{\\mu_{\\text{B}} B_0} = \\frac{6.63 \\times 10^{-34}\\text{ J}\\cdot\\text{s} \\times 50.0 \\times 10^6\\text{ s}^{-1}}{9.27 \\times 10^{-24}\\text{ J/T} \\times 1.78 \\times 10^{-3}\\text{ T}} = \\frac{3.315 \\times 10^{-26}}{1.650 \\times 10^{-26}} \\approx 2.01\\]",
    "matched_page": "28-34"
  },
  {
    "id": "C_Ex16",
    "text": "Al observar en el osciloscopio las señales en modo dual, se visualiza la curva sinusoidal de corriente del campo magnético y, superpuestos a ella, aparecen dos picos de resonancia por cada periodo de modulación. Si variamos la corriente continua \\(U_0\\) y el variador de fase hasta que los dos picos se vuelvan perfectamente simétricos respecto al máximo/mínimo de la sinusoide, ¿qué valor de campo magnético corresponde a ese instante de resonancia simétrica?",
    "options": [
      "El campo magnético máximo \\(B_0 + B_1\\).",
      "El campo magnético en el cual el término variable sinusoidal es nulo, es decir, el campo estático \\(B(t) = B_0\\).",
      "El campo magnético remanente del núcleo de las bobinas Helmholtz.",
      "Un valor de campo que depende únicamente de la amplitud de radiofrecuencia."
    ],
    "correct_index": 1,
    "correct_text": "El campo magnético en el cual el término variable sinusoidal es nulo, es decir, el campo estático \\(B(t) = B_0\\).",
    "justification": "Los dos picos de resonancia ocurren cuando el campo magnético variable \\(B(t) = B_0 + B_1 \\sin\\omega t\\) iguala al campo de resonancia \\(B_{\\text{res}}\\). Si ajustamos la componente de corriente continua \\(U_0\\) (que define \\(B_0\\)) para que \\(B_{\\text{res}} = B_0\\), la condición de resonancia se satisface exactamente cuando \\(\\sin\\omega t = 0\\). En esta situación, los picos de resonancia ocurren en los pasos por cero de la componente AC, situándose de forma perfectamente simétrica a distancias iguales del máximo y el mínimo de la sinusoide.",
    "matched_page": "28-34"
  },
  {
    "id": "E_Ex1",
    "text": "Si un condensador de poliéster de capacidad \\(C\\) se descarga a través de una caja de resistencias \\(R\\) en un montaje experimental, ¿cuál es la relación exacta entre el tiempo medio de descarga \\(t_{1/2}\\) (tiempo necesario para reducir la tensión a la mitad de su valor inicial) y la constante de tiempo del circuito \\(\\tau = RC\\)?",
    "options": [
      "\\(t_{1/2} = \\tau / \\ln 2 \\approx 1.44 \\tau\\)",
      "\\(t_{1/2} = \\tau \\ln 2 \\approx 0.693 \\tau\\)",
      "\\(t_{1/2} = \\tau\\)",
      "\\(t_{1/2} = 2 \\pi \\tau\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(t_{1/2} = \\tau \\ln 2 \\approx 0.693 \\tau\\)",
    "justification": "La tensión en bornes de un condensador en descarga libre responde a la ecuación \\(V(t) = V_0 \\text{e}^{-t/\\tau}\\), donde \\(\\tau = RC\\). La condición para la descarga media establece que \\(V(t_{1/2}) = V_0 / 2\\). Sustituyendo en la ecuación:\n\\[\\frac{V_0}{2} = V_0 \\text{e}^{-t_{1/2}/\\tau} \\implies \\text{e}^{-t_{1/2}/\\tau} = \\frac{1}{2} \\implies -\\frac{t_{1/2}}{\\tau} = -\\ln 2 \\implies t_{1/2} = \\tau \\ln 2\\]",
    "matched_page": "35-42"
  },
  {
    "id": "E_Ex2",
    "text": "En un circuito RLC serie en régimen subamortiguado (\\(R < 2\\sqrt{L/C}\\)), ¿cómo es la frecuencia angular \\(\\omega\\) de la respuesta oscilatoria amortiguada en comparación con la frecuencia de resonancia natural del circuito ideal no amortiguado \\(\\omega_0 = 1/\\sqrt{LC}\\)?",
    "options": [
      "\\(\\omega\\) es mayor que \\(\\omega_0\\) porque la resistencia acelera la descarga de energía.",
      "\\(\\omega\\) es menor que \\(\\omega_0\\) debido a la disipación resistiva, cumpliendo la relación \\(\\omega = \\sqrt{\\omega_0^2 - \\alpha^2}\\) con \\(\\alpha = R/(2L)\\).",
      "\\(\\omega\\) es idéntica a \\(\\omega_0\\), ya que la resistencia solo altera la envolvente exponencial y no la frecuencia fundamental.",
      "\\(\\omega\\) oscila alternativamente entre valores mayores y menores que \\(\\omega_0\\)."
    ],
    "correct_index": 1,
    "correct_text": "\\(\\omega\\) es menor que \\(\\omega_0\\) debido a la disipación resistiva, cumpliendo la relación \\(\\omega = \\sqrt{\\omega_0^2 - \\alpha^2}\\) con \\(\\alpha = R/(2L)\\).",
    "justification": "La resolución de la ecuación diferencial para la corriente en un circuito RLC serie subamortiguado proporciona una solución de la forma \\(i(t) \\propto \\text{e}^{-\\alpha t} \\sin(\\omega t)\\), donde el coeficiente de amortiguamiento es \\(\\alpha = \\frac{R}{2L}\\) y la frecuencia angular es \\(\\omega = \\sqrt{\\frac{1}{LC} - \\frac{R^2}{4L^2}}\\). Reescrito en términos de la frecuencia propia del sistema sin pérdidas, \\(\\omega_0 = \\frac{1}{\\sqrt{LC}}\\), se tiene que \\(\\omega = \\sqrt{\\omega_0^2 - \\alpha^2}\\). Por tanto, la resistencia reduce la frecuencia de oscilación transitoria libre del circuito.",
    "matched_page": "35-42"
  },
  {
    "id": "E_Ex3",
    "text": "Visualizamos en la pantalla del osciloscopio la tensión transitoria en un circuito RLC subamortiguado. La amplitud del primer pico de tensión medido es \\(A_1 = 8.0\\text{ V}\\), y la amplitud del segundo pico consecutivo (transcurrido exactamente un periodo de oscilación \\(T\\)) es \\(A_2 = 3.2\\text{ V}\\). ¿Cuál es el valor del factor de amortiguamiento \\(\\alpha = R/(2L)\\) de este circuito?",
    "options": [
      "\\(\\alpha \\approx \\ln(2.5)/T\\)",
      "\\(\\alpha \\approx 2.5/T\\)",
      "\\(\\alpha \\approx \\ln(11.2)/T\\)",
      "\\(\\alpha \\approx 0.4/T\\)"
    ],
    "correct_index": 0,
    "correct_text": "\\(\\alpha \\approx \\ln(2.5)/T\\)",
    "justification": "La envolvente de decaimiento de las oscilaciones transitorias responde a una ley de tipo exponencial \\(A(t) = A_0 \\text{e}^{-\\alpha t}\\). Al comparar dos máximos sucesivos separados por un intervalo de tiempo igual al periodo de oscilación \\(T\\), su cociente es:\n\\[\\frac{A_1}{A_2} = \\frac{A_0 \\text{e}^{-\\alpha t}}{A_0 \\text{e}^{-\\alpha(t+T)}} = \\text{e}^{\\alpha T}\\]\nTomando el logaritmo natural a ambos lados y despejando el factor de amortiguamiento \\(\\alpha\\):\n\\[\\ln\\left(\\frac{A_1}{A_2}\\right) = \\alpha T \\implies \\alpha = \\frac{\\ln(8.0 / 3.2)}{T} = \\frac{\\ln(2.5)}{T}\\]",
    "matched_page": "35-42"
  },
  {
    "id": "E_Ex4",
    "text": "Para guardar e incorporar de forma automatizada las gráficas de tensión y los datos de los canales en el informe de prácticas, ¿qué herramienta de software se encuentra disponible en el escritorio del ordenador del laboratorio?",
    "options": [
      "Una base de datos SQL conectada al osciloscopio.",
      "Un libro de Excel programado con macros llamado *Osciloscopio-23.xlsm* que captura datos y pantallas por interfaz directa.",
      "Un script de Python que exporta en formato de texto plano a través de un puerto serie virtual.",
      "No hay software disponible y se deben tomar fotos de la pantalla con el teléfono móvil."
    ],
    "correct_index": 1,
    "correct_text": "Un libro de Excel programado con macros llamado *Osciloscopio-23.xlsm* que captura datos y pantallas por interfaz directa.",
    "justification": "Según se indica en la sección de Realización Práctica del guión, en el escritorio de cada puesto se dispone de la hoja de cálculo de Excel *Osciloscopio-23.xlsm*. Este fichero tiene macros automatizadas que permiten transferir los arrays de datos y capturar imágenes del visor de los osciloscopios del laboratorio mediante la pulsación de botones dedicados en su interfaz.",
    "matched_page": "35-42"
  },
  {
    "id": "E_Ex5",
    "text": "¿Cuál es la razón física de la regla de seguridad que prohíbe terminantemente apagar o desconectar los cables de la fuente de corriente del electroimán mientras está circulando intensidad por él?",
    "options": [
      "Se induce un cortocircuito que quema de forma instantánea el núcleo de hierro-silicio.",
      "Las bobinas del electroimán poseen una gran inductancia y acumulan energía magnética; interrumpir el circuito bruscamente provoca una f.e.m. de autoinducción muy elevada que genera un arco eléctrico peligroso.",
      "Se descalibra permanentemente el sensor de la balanza debido a un cambio brusco del peso tara.",
      "La inversión de la corriente calienta el devanado por efecto Joule hasta fundir el cobre."
    ],
    "correct_index": 1,
    "correct_text": "Las bobinas del electroimán poseen una gran inductancia y acumulan energía magnética; interrumpir el circuito bruscamente provoca una f.e.m. de autoinducción muy elevada que genera un arco eléctrico peligroso.",
    "justification": "Un electroimán con cientos de espiras enrolladas sobre un núcleo ferromagnético posee una autoinducción \\(L\\) muy alta. La energía almacenada en el campo magnético es \\(E = \\frac{1}{2} L I^2\\). Si se interrumpe la corriente de golpe (\\(dt \\to 0\\)), la derivada temporal de la corriente es extremadamente grande y negativa, induciendo según la ley de Faraday una fuerza electromotriz autorregulada \\(\\varepsilon = -L \\frac{dI}{dt}\\) que puede llegar a miles de voltios. Esto provoca un arco eléctrico en el interruptor o enchufe, pudiendo dar una descarga eléctrica al experimentador y destruir el aislamiento térmico de los equipos.",
    "matched_page": "43-46"
  },
  {
    "id": "E_Ex6",
    "text": "En el diseño del electroimán de la balanza de corrientes, ¿por qué la reluctancia del entrehierro \\(R_g = g/(\\mu_0 S)\\) suele representar el término dominante en la oposición al flujo magnético a pesar de que su longitud \\(g\\) es de apenas unos milímetros?",
    "options": [
      "Porque la sección transversal \\(S\\) del entrehierro es despreciable comparada con la del núcleo de hierro en U.",
      "Porque la permeabilidad magnética del aire (\\(\\mu_0\\)) es miles de veces menor que la permeabilidad magnética del núcleo ferromagnético de hierro (\\(\\mu \\gg \\mu_0\\)).",
      "Porque el flujo magnético se dispersa y el campo en el aire no es perpendicular al circuito móvil.",
      "Porque la reluctancia del hierro es proporcional a la resistencia eléctrica del circuito impreso."
    ],
    "correct_index": 1,
    "correct_text": "Porque la permeabilidad magnética del aire (\\(\\mu_0\\)) es miles de veces menor que la permeabilidad magnética del núcleo ferromagnético de hierro (\\(\\mu \\gg \\mu_0\\)).",
    "justification": "La reluctancia magnética se define como \\(R_m = \\frac{L}{\\mu S}\\). Para el hierro dulce del núcleo, la permeabilidad magnética \\(\\mu\\) es muy elevada (permeabilidad relativa \\(\\mu_r \\sim 1000 - 5000\\)), por lo que su reluctancia \\(R_c\\) es muy baja. Por el contrario, para el entrehierro, el medio es el aire con permeabilidad \\(\\mu_0\\). Al ser \\(\\mu_{\\text{hierro}} \\approx 1000 \\mu_0\\), un milímetro de aire ofrece la misma reluctancia (resistencia al paso del flujo) que varios metros de hierro, haciendo del entrehierro el factor limitante del circuito magnético.",
    "matched_page": "43-46"
  },
  {
    "id": "E_Ex7",
    "text": "En el experimento de la balanza de corrientes, un segmento recto conductor de longitud activa \\(L = 5.0\\text{ cm}\\) suspendido del circuito móvil es recorrido por una intensidad de \\(I_c = 4.0\\text{ A}\\). Si al encender el electroimán con una intensidad fija \\(I_e = 2.0\\text{ A}\\) la balanza registra una fuerza de \\(F = 8.0\\text{ mN}\\), ¿cuál es el campo de inducción magnética \\(B\\) en el entrehierro?",
    "options": [
      "\\(B = 0.01\\text{ T}\\)",
      "\\(B = 0.04\\text{ T}\\)",
      "\\(B = 0.10\\text{ T}\\)",
      "\\(B = 0.40\\text{ T}\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(B = 0.04\\text{ T}\\)",
    "justification": "La fuerza de Lorentz sobre un conductor rectilíneo perpendicular al campo es \\(F = I_c L B\\). Despejando la inducción magnética \\(B\\):\n\\[B = \\frac{F}{I_c L} = \\frac{8.0 \\times 10^{-3}\\text{ N}}{4.0\\text{ A} \\times 0.05\\text{ m}} = \\frac{8.0 \\times 10^{-3}}{0.20} = 0.04\\text{ T}\\]",
    "matched_page": "43-46"
  },
  {
    "id": "E_Ex8",
    "text": "Al colocar las diferentes placas de circuito impreso en el brazo de la balanza electrodinámica para realizar las medidas de fuerza, ¿por qué es crítico que queden correctamente centradas horizontal y verticalmente sin llegar a rozar las piezas polares?",
    "options": [
      "Porque si rozan el electroimán, las fuerzas de fricción mecánica adulteran la lectura del peso en la balanza y distorsionan la medida de la fuerza Lorentz.",
      "Porque el rozamiento con el hierro provoca descargas eléctricas que cortocircuitan la fuente de corriente continua.",
      "Porque el rozamiento calienta las bobinas por efecto Joule.",
      "Porque el campo magnético del electroimán es estrictamente nulo fuera del centro geométrico exacto de las piezas polares."
    ],
    "correct_index": 0,
    "correct_text": "Porque si rozan el electroimán, las fuerzas de fricción mecánica adulteran la lectura del peso en la balanza y distorsionan la medida de la fuerza Lorentz.",
    "justification": "La balanza mide variaciones de fuerza del orden de milinewtons (mN) traduciendo pequeñas deflexiones de su plato de carga. Cualquier mínimo rozamiento físico entre la placa de circuito impreso (móvil) y las pesadas piezas del electroimán (estáticas) introduce fuerzas de fricción estática o dinámica que impiden que la balanza registre con exactitud la fuerza magnética neta, falseando los resultados.",
    "matched_page": "43-46"
  },
  {
    "id": "E_Ex9",
    "text": "De acuerdo con el fundamento teórico, la inducción magnética en el interior de un solenoide muy largo (\\(L \\gg a\\)) es uniforme y viene dada por \\(B = \\mu_0 n I\\). ¿Qué ocurre con el valor del campo magnético axial a medida que nos desplazamos desde la zona central del solenoide hacia sus extremos físicos (\\(z = \\pm L/2\\))?",
    "options": [
      "El campo magnético permanece perfectamente constante y cae bruscamente a cero en cuanto cruzamos el límite exterior.",
      "El campo aumenta hasta el doble en los bordes debido al efecto de dispersión de las líneas de campo.",
      "El campo magnético en el eje decrece progresivamente hasta reducirse aproximadamente a la mitad de su valor central en los extremos de la bobina.",
      "El campo magnético oscila sinusoidalmente cambiando su polaridad norte-sur en cada extremo."
    ],
    "correct_index": 2,
    "correct_text": "El campo magnético en el eje decrece progresivamente hasta reducirse aproximadamente a la mitad de su valor central en los extremos de la bobina.",
    "justification": "Evaluando la expresión analítica del campo magnético axial de un solenoide finito de longitud \\(L\\) y radio \\(a\\) en los extremos (\\(z = \\pm L/2\\)), se obtiene mediante integración que el campo es exactamente la mitad del valor en el centro geométrico para un solenoide largo:\n\\[B\\left(\\pm \\frac{L}{2}\\right) = \\frac{1}{2} \\mu_0 \\frac{N}{L} I \\left( \\frac{L}{\\sqrt{L^2 + a^2}} \\right) \\approx \\frac{1}{2} B(0)\\]\nEsto se debe a que las líneas de campo divergen hacia el exterior del solenoide al aproximarse a las aberturas terminales.",
    "matched_page": "47-54"
  },
  {
    "id": "E_Ex10",
    "text": "¿Cuál es la razón por la que en la práctica de campos magnéticos se alimenta al solenoide y las bobinas Helmholtz con corriente alterna en lugar de corriente continua?",
    "options": [
      "Porque la corriente continua saturaría el núcleo ferromagnético de la bobina pequeña del gausímetro.",
      "Porque el sensor del gausímetro está basado en la inducción electromagnética (ley de Faraday), la cual requiere que el flujo magnético a través de la bobina detectora varíe en el tiempo para generar una f.e.m. medible.",
      "Porque la corriente alterna consume menos energía y evita sobrecalentamientos por efecto Joule en el banco de medida.",
      "Porque el voltímetro digital del laboratorio solo puede realizar lecturas de potencial alterno de muy alta frecuencia."
    ],
    "correct_index": 1,
    "correct_text": "Porque el sensor del gausímetro está basado en la inducción electromagnética (ley de Faraday), la cual requiere que el flujo magnético a través de la bobina detectora varíe en el tiempo para generar una f.e.m. medible.",
    "justification": "El gausímetro de inducción utiliza una pequeña bobina exploradora como sonda. La tensión inducida en bornes de una bobina de superficie \\(S\\) y \\(N\\) espiras en presencia de un campo \\(B(t)\\) es \\(\\varepsilon = -N S \\frac{dB}{dt}\\). Si el campo magnético fuera estático (producido por corriente continua), la derivada temporal sería cero y no habría f.e.m. inducida. Alimentando las bobinas inductoras con corriente alterna sinusoidal \\(I(t) = I_0 \\sin\\omega t\\), el campo oscila armónicamente, generando una tensión proporcional a la amplitud de la inducción magnética.",
    "matched_page": "47-54"
  },
  {
    "id": "E_Ex11",
    "text": "Para el calibrado del gausímetro, montamos un solenoide de longitud \\(L = 30\\text{ cm}\\) que consta de dos arrollamientos en serie de \\(N_1 = N_2 = 146\\text{ espiras}\\) cada uno (\\(N = 292\\text{ espiras}\\) en total). Si el amperímetro registra una corriente de \\(I = 1.5\\text{ A}\\) por las bobinas, ¿cuál es el campo magnético teórico \\(B\\) en la zona central interior (asumiendo solenoide largo)?",
    "options": [
      "\\(B \\approx 1.84 \\times 10^{-3}\\text{ T}\\)",
      "\\(B \\approx 1.84 \\times 10^{-6}\\text{ T}\\)",
      "\\(B \\approx 3.68 \\times 10^{-3}\\text{ T}\\)",
      "\\(B \\approx 9.20 \\times 10^{-4}\\text{ T}\\)"
    ],
    "correct_index": 0,
    "correct_text": "\\(B \\approx 1.84 \\times 10^{-3}\\text{ T}\\)",
    "justification": "El campo en el interior central de un solenoide largo viene dado por \\(B = \\mu_0 \\frac{N}{L} I\\). Tomando \\(\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}\\), la longitud en metros \\(L = 0.30\\text{ m}\\) y \\(N = 292\\):\n\\[B = (4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}) \\times \\frac{292}{0.30\\text{ m}} \\times 1.5\\text{ A} = (4\\pi \\times 10^{-7}) \\times 973.33 \\times 1.5 \\approx 1.835 \\times 10^{-3}\\text{ T} \\approx 1.84\\text{ mT}\\]",
    "matched_page": "47-54"
  },
  {
    "id": "E_Ex12",
    "text": "En el estudio de la bobina pequeña para la comprobación de la aproximación dipolar magnética en puntos alejados de su eje (\\(z \\gg a\\)), ¿cómo decae la inducción magnética \\(B\\) en función de la distancia \\(r\\) al centro de la bobina?",
    "options": [
      "Decae linealmente como \\(r^{-1}\\).",
      "Decae cuadráticamente como \\(r^{-2}\\).",
      "Decae inversamente con el cubo de la distancia como \\(r^{-3}\\).",
      "Decae exponencialmente según la ley \\(\\text{e}^{-r}\\)."
    ],
    "correct_index": 2,
    "correct_text": "Decae inversamente con el cubo de la distancia como \\(r^{-3}\\).",
    "justification": "Para distancias mucho mayores que el radio de la espira o bobina (\\(r \\gg a\\)), los términos monopolares del potencial magnético son nulos y la primera aproximación válida es el término dipolar. Evaluando las componentes del campo magnético del dipolo, se tiene que tanto la componente radial como la angular son proporcionales a \\(\\frac{\\mu_0 m}{4\\pi r^3}\\). Por tanto, la intensidad del campo magnético decae de manera cúbica con la distancia (\\(B \\propto r^{-3}\\)), lo que constituye la firma experimental del comportamiento dipolar.",
    "matched_page": "47-54"
  },
  {
    "id": "E_Ex13",
    "text": "La visualización del ciclo de histéresis en el osciloscopio se fundamenta en que la tensión en el condensador \\(V_y\\) del filtro RC sea proporcional a la integral temporal de la f.e.m. inducida en las bobinas secundarias. ¿Bajo qué condición de frecuencia de trabajo \\(f\\) con respecto a la frecuencia de corte del filtro \\(f_c = 1/(2\\pi R'C')\\) se cumple esto con precisión?",
    "options": [
      "A frecuencias muy inferiores a la frecuencia de corte (\\(f \\ll f_c\\)).",
      "A frecuencias muy superiores a la frecuencia de corte (\\(f \\gg f_c\\)).",
      "A frecuencias exactamente coincidentes con la de corte (\\(f = f_c\\)).",
      "La frecuencia no afecta al integrador pasivo, solo a la corriente del primario."
    ],
    "correct_index": 1,
    "correct_text": "A frecuencias muy superiores a la frecuencia de corte (\\(f \\gg f_c\\)).",
    "justification": "La tensión en bornes del condensador en un filtro pasa-bajo RC responde a \\(V_c(t) \\approx \\frac{1}{R'C'} \\int V_{\\text{in}}(t) dt\\) únicamente si la caída de tensión en el condensador es despreciable frente a la de la resistencia (\\(V_c \\ll V_R\\)). En el dominio de Fourier, esta aproximación exige que la impedancia del condensador sea muy pequeña frente a la resistencia (\\(1/(\\omega C') \\ll R'\\)), lo que se traduce en \\(\\omega \\gg 1/(R'C')\\), que es equivalente a trabajar a frecuencias mucho mayores que la frecuencia de corte (\\(f \\gg f_c\\)). Si se baja demasiado la frecuencia de excitación, la integración falla, distorsionando la señal y generando lazos artificiales cruzados en los extremos del ciclo.",
    "matched_page": "55-60"
  },
  {
    "id": "E_Ex14",
    "text": "Dos núcleos ferromagnéticos idénticos en dimensiones se someten a un campo magnético sinusoidal de frecuencia \\(f = 100\\text{ Hz}\\). El núcleo \\(A\\) es de hierro-silicio laminado (campo coercitivo \\(H_c\\) bajo) y el núcleo \\(B\\) es de hierro macizo (campo coercitivo \\(H_c\\) alto). ¿Qué núcleo experimentará una mayor disipación de calor por histéresis?",
    "options": [
      "El núcleo \\(A\\) porque sus dominios magnéticos oscilan de forma más rápida.",
      "El núcleo \\(B\\) porque la energía perdida en forma de calor por unidad de volumen en cada ciclo es proporcional al área encerrada por el ciclo de histéresis.",
      "Ambos por igual, puesto que las pérdidas por histéresis dependen únicamente de la amplitud del generador de funciones.",
      "Ninguno disipa calor por histéresis; la energía eléctrica se conserva íntegramente en forma de energía electrostática."
    ],
    "correct_index": 1,
    "correct_text": "El núcleo \\(B\\) porque la energía perdida en forma de calor por unidad de volumen en cada ciclo es proporcional al área encerrada por el ciclo de histéresis.",
    "justification": "La energía disipada en forma de calor por unidad de volumen en cada ciclo completo del campo magnético es igual a la integral de línea del ciclo de histéresis: \\(\\Delta E_{\\text{ciclo}} = \\mu_0 \\oint H dM\\), la cual equivale geométricamente al área encerrada por la curva de histéresis. La potencia media disipada es \\(P = \\mu_0 A f\\). Puesto que el núcleo \\(B\\) de hierro macizo es magnéticamente \"duro\" y posee un ciclo de histéresis mucho más ancho (mayor área \\(A\\)) que el núcleo blando \\(A\\), su disipación térmica y pérdidas energéticas por histéresis serán notablemente mayores.",
    "matched_page": "55-60"
  },
  {
    "id": "E_Ex15",
    "text": "El núcleo de prueba nº4 empleado en la práctica está constituido por una ferrita de manganeso-zinc, mientras que los otros tres núcleos son metálicos. ¿Qué propiedad eléctrica fundamental distingue a las ferritas de los metales ferromagnéticos en aplicaciones de alta frecuencia?",
    "options": [
      "Las ferritas son excelentes conductores de la corriente eléctrica por carecer de electrones de valencia.",
      "Las ferritas poseen una resistividad eléctrica sumamente alta (comportamiento semiconductor/aislante), lo que suprime la inducción de corrientes de Foucault parásitas y minimiza las pérdidas Joule.",
      "Las ferritas no presentan histéresis magnética de ningún tipo, comportándose como paramagnéticos perfectos.",
      "Las ferritas se enfrían espontáneamente al estar inmersas en campos variables."
    ],
    "correct_index": 1,
    "correct_text": "Las ferritas poseen una resistividad eléctrica sumamente alta (comportamiento semiconductor/aislante), lo que suprime la inducción de corrientes de Foucault parásitas y minimiza las pérdidas Joule.",
    "justification": "En los materiales ferromagnéticos metálicos (como el acero o hierro macizo), los campos magnéticos variables en el tiempo inducen bucles de corrientes eléctricas en su interior (corrientes de Foucault) que disipan energía por efecto Joule. Las ferritas son cerámicos de óxidos de hierro combinados con zinc y manganeso. Debido a su estructura atómica, poseen propiedades magnéticas intensas combinadas con una conductividad eléctrica casi nula. Esta resistividad muy elevada impide físicamente la circulación de corrientes inducidas parásitas, por lo que las ferritas no presentan pérdidas por corrientes de Foucault y se usan en bobinados y transformadores de alta frecuencia.",
    "matched_page": "55-60"
  },
  {
    "id": "E_Ex16",
    "text": "Un núcleo ferromagnético de volumen \\(V = 200\\text{ cm}^3\\) tiene un ciclo de histéresis cuya área integrada (representando el ciclo \\(B-H\\)) equivale a una densidad de pérdida por ciclo de \\(A = 500\\text{ J/m}^3\\). Si el circuito primario se alimenta a una frecuencia estándar de \\(f = 50\\text{ Hz}\\), ¿cuál es la potencia total que se disipa en forma de calor en el núcleo debido a la histéresis?",
    "options": [
      "\\(P_{\\text{pérdidas}} = 0.5\\text{ W}\\)",
      "\\(P_{\\text{pérdidas}} = 5.0\\text{ W}\\)",
      "\\(P_{\\text{pérdidas}} = 50.0\\text{ W}\\)",
      "\\(P_{\\text{pérdidas}} = 5000\\text{ W}\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(P_{\\text{pérdidas}} = 5.0\\text{ W}\\)",
    "justification": "La potencia de pérdida disipada por unidad de volumen es el producto del área del ciclo \\(B-H\\) (que representa la densidad de energía perdida por ciclo en \\(\\text{J/m}^3\\)) por la frecuencia \\(f\\):\n\\[p = A \\cdot f = 500\\text{ J/m}^3 \\times 50\\text{ s}^{-1} = 25000\\text{ W/m}^3\\]\nLa potencia total disipada en el volumen del núcleo \\(V = 200\\text{ cm}^3 = 200 \\times 10^{-6}\\text{ m}^3\\) es:\n\\[P_{\\text{pérdidas}} = p \\cdot V = 25000\\text{ W/m}^3 \\times 200 \\times 10^{-6}\\text{ m}^3 = 5.0\\text{ W}\\]",
    "matched_page": "55-60"
  },
  {
    "id": "O_Ex1",
    "text": "En la práctica del interferómetro de Michelson, antes de poder observar el patrón de interferencia de anillos circulares, se debe realizar una alineación inicial del sistema óptico para hacer coincidir los frentes de onda. ¿Qué procedimiento práctico se sigue en el laboratorio?",
    "options": [
      "Se hace pasar un haz láser a través de la lámina compensadora y se mide la distancia geométrica exacta con un calibrador digital.",
      "Se sitúa un objeto puntual (como la punta de un alfiler o bolígrafo) entre la lámpara de sodio y la lámina divisora de haz, y se ajustan los tornillos de inclinación del espejo fijo hasta lograr la superposición perfecta de las dos imágenes virtuales vistas en el telescopio.",
      "Se rota la lente colimadora 90 grados hasta lograr la extinción total del haz reflejado.",
      "Se gira rápidamente el tornillo micrométrico del espejo móvil en busca del punto medio de su recorrido mecánico."
    ],
    "correct_index": 1,
    "correct_text": "Se sitúa un objeto puntual (como la punta de un alfiler o bolígrafo) entre la lámpara de sodio y la lámina divisora de haz, y se ajustan los tornillos de inclinación del espejo fijo hasta lograr la superposición perfecta de las dos imágenes virtuales vistas en el telescopio.",
    "justification": "El uso de un puntero físico o alfiler enfrente de la fuente extensa de sodio genera dos haces que se reflejan de forma independiente en los espejos E1 y E2, formando dos imágenes distintas visibles a través del telescopio/ojo del observador. Moviendo los tornillos de inclinación micrométricos del espejo fijo E2, se giran los frentes de onda reflejados hasta que las dos imágenes virtuales del alfiler se superponen espacialmente en una sola. Esta coincidencia garantiza la colinealidad de los ejes ópticos virtuales de ambos brazos, condición necesaria para que se forme el patrón de anillos en el infinito.",
    "matched_page": "1-8 y 17-20"
  },
  {
    "id": "O_Ex2",
    "text": "En el interferómetro de Michelson iluminado con una lámpara de sodio (\\(\\lambda = 589\\text{ nm}\\)), desplazamos el espejo móvil una distancia física \\(d\\). Si este desplazamiento produce el paso de \\(N = 100\\) franjas (o anillos) brillantes por el centro del patrón de interferencia, ¿qué distancia \\(d\\) se ha desplazado el espejo móvil?",
    "options": [
      "\\(d = 58.9\\text{ \\(\\mu\\)m}\\)",
      "\\(d = 29.45\\text{ \\(\\mu\\)m}\\)",
      "\\(d = 14.73\\text{ \\(\\mu\\)m}\\)",
      "\\(d = 117.8\\text{ \\(\\mu\\)m}\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(d = 29.45\\text{ \\(\\mu\\)m}\\)",
    "justification": "La diferencia de caminos ópticos en el Michelson es \\(\\Delta s = 2d\\) debido al recorrido de ida y vuelta en el brazo móvil. La condición para el paso de \\(N\\) máximos de interferencia (franjas brillantes) por el centro del ocular es \\(\\Delta s = N \\lambda\\). Sustituyendo e igualando:\n\\[2d = N \\lambda \\implies d = \\frac{N \\lambda}{2} = \\frac{100 \\times 589 \\times 10^{-9}\\text{ m}}{2} = 29.45 \\times 10^{-6}\\text{ m} = 29.45\\text{ \\(\\mu\\)m}\\]",
    "matched_page": "1-8 y 17-20"
  },
  {
    "id": "O_Ex3",
    "text": "Uno de los objetivos del experimento de Michelson es medir la diferencia de longitudes de onda del doblete del sodio (\\(\\Delta\\lambda = \\lambda_1 - \\lambda_2\\)). Para ello, desplazamos el espejo móvil una distancia \\(\\Delta d\\) entre dos posiciones consecutivas de mínima visibilidad de las franjas. ¿Cuál es la relación matemática utilizada en el guion para calcular \\(\\Delta\\lambda\\) a partir de la longitud de onda media conocida \\(\\lambda \\approx 589.3\\text{ nm}\\)?",
    "options": [
      "\\(\\Delta\\lambda = \\frac{\\lambda^2}{2 \\Delta d}\\)",
      "\\(\\Delta\\lambda = \\frac{2 \\Delta d}{\\lambda^2}\\)",
      "\\(\\Delta\\lambda = \\frac{\\lambda^2}{\\Delta d}\\)",
      "\\(\\Delta\\lambda = \\sqrt{\\lambda \\Delta d}\\)"
    ],
    "correct_index": 0,
    "correct_text": "\\(\\Delta\\lambda = \\frac{\\lambda^2}{2 \\Delta d}\\)",
    "justification": "El sodio emite principalmente en dos líneas espectrales muy cercanas (\\(\\lambda_1\\) y \\(\\lambda_2\\)). Sus respectivos patrones de interferencia entran en coincidencia (fase) y oposición (contrafase) de forma periódica al mover el espejo móvil. La visibilidad de los anillos concéntricos es mínima cuando los máximos de una longitud de onda coinciden con los mínimos de la otra. La distancia física recorrida por el espejo entre dos mínimos de visibilidad consecutivos, \\(\\Delta d\\), corresponde a un desfase relativo acumulado de un ciclo en el camino óptico de ida y vuelta, es decir, \\(2\\Delta d (1/\\lambda_2 - 1/\\lambda_1) = 1\\). Sabiendo que \\(\\lambda_1 - \\lambda_2 = \\Delta\\lambda\\) y \\(\\lambda_1 \\lambda_2 \\approx \\lambda^2\\), resulta:\n\\[2\\Delta d \\frac{\\Delta\\lambda}{\\lambda^2} = 1 \\implies \\Delta\\lambda = \\frac{\\lambda^2}{2\\Delta d}\\]",
    "matched_page": "1-8 y 17-20"
  },
  {
    "id": "O_Ex4",
    "text": "Al realizar las medidas experimentales con el interferómetro de Michelson, el avance real del espejo móvil \\(d\\) no coincide con el valor nominal registrado en la escala del tambor del micrómetro. ¿Cómo se calibra en el laboratorio esta relación de reducción (desmultiplicación mecánica)?",
    "options": [
      "Multiplicando la distancia nominal por el índice de refracción del aire del laboratorio.",
      "Contando el paso de un número conocido de franjas \\(N\\) para calcular el desplazamiento real \\(d = N\\lambda / 2\\), y dividiendo este valor real entre el incremento medido en la escala del micrómetro.",
      "Midiendo el espesor de la lámina divisora de haz mediante un micrómetro de tornillo externo.",
      "Utilizando un filtro de color para medir la ganancia en frecuencia en bornes del detector."
    ],
    "correct_index": 1,
    "correct_text": "Contando el paso de un número conocido de franjas \\(N\\) para calcular el desplazamiento real \\(d = N\\lambda / 2\\), y dividiendo este valor real entre el incremento medido en la escala del micrómetro.",
    "justification": "El tornillo del micrómetro tiene un engranaje desmultiplicador mecánico para permitir un avance extremadamente fino del espejo móvil. Para calcular este factor de reducción, el experimentador realiza una calibración de control: desplaza el tornillo una distancia nominal visible en el tambor y cuenta simultáneamente el paso de \\(N\\) franjas. A partir de la longitud de onda de sodio se calcula el avance real \\(d = N\\lambda / 2\\). La relación de reducción es la constante de proporcionalidad \\(k = d_{\\text{real}} / d_{\\text{tambor}}\\), la cual multiplica a las lecturas nominales del micrómetro en las medidas posteriores.",
    "matched_page": "1-8 y 17-20"
  },
  {
    "id": "O_Ex5",
    "text": "Para determinar con precisión el ángulo de desviación mínima \\(\\delta_m\\) de una línea espectral con el goniómetro, ¿qué procedimiento operativo se debe realizar en el espectrómetro?",
    "options": [
      "Situar el telescopio exactamente a 90 grados respecto a la normal y rotar la red hasta extinguir el haz.",
      "Apuntar a la línea elegida con el telescopio y, mientras giramos lentamente la plataforma porta-red, seguir la línea con el telescopio hasta que esta se detenga en un punto límite y comience a moverse en sentido inverso; esta posición de retorno marca el ángulo límite de desviación mínima.",
      "Separar la red del colimador y registrar la lectura del nonio para el orden de difracción cero.",
      "Ajustar la rendija de entrada al máximo de su escala milimétrica para solapar los órdenes de difracción."
    ],
    "correct_index": 1,
    "correct_text": "Apuntar a la línea elegida con el telescopio y, mientras giramos lentamente la plataforma porta-red, seguir la línea con el telescopio hasta que esta se detenga en un punto límite y comience a moverse en sentido inverso; esta posición de retorno marca el ángulo límite de desviación mínima.",
    "justification": "El ángulo de desviación total \\(\\delta\\) de la luz difractada por la red varía al rotar el ángulo de incidencia \\(\\theta_i\\). Operativamente, al girar la red en una dirección, la línea espectral observada a través del telescopio se desplazará hacia un extremo lateral (reducción del ángulo de desviación). Al llegar a la condición de desviación mínima, la línea se detiene momentáneamente y, si se continúa la rotación en el mismo sentido, la línea invierte su dirección de desplazamiento. Anotando la posición angular del telescopio en este punto de inflexión se determina la desviación mínima \\(\\delta_m\\).",
    "matched_page": "13-16"
  },
  {
    "id": "O_Ex6",
    "text": "En la configuración de mínima desviación para una línea espectral de longitud de onda \\(\\lambda\\) en el orden \\(m\\), los ángulos de incidencia y difracción son iguales respecto a la normal del plano de la red (\\(\\theta_i = \\theta_m\\)). ¿Cómo se escribe la ecuación de la red en esta posición simétrica en función de la desviación total medida \\(\\delta_m\\)?",
    "options": [
      "\\(m\\lambda = d \\sin(\\delta_m)\\)",
      "\\(m\\lambda = 2d \\sin(\\delta_m / 2)\\)",
      "\\(m\\lambda = d \\tan(\\delta_m / 2)\\)",
      "\\(m\\lambda = 2d \\cos(\\delta_m)\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(m\\lambda = 2d \\sin(\\delta_m / 2)\\)",
    "justification": "La relación general de difracción es \\(d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda\\). En la condición de desviación mínima, la trayectoria del haz es simétrica respecto a la red, lo que implica que el ángulo de incidencia y el de difracción son idénticos (\\(\\theta_i = \\theta_m\\)). Dado que la desviación angular total medida con el telescopio respecto al haz directo es la suma de ambos ángulos (\\(\\delta_m = \\theta_i + \\theta_m\\)), resulta que \\(\\theta_i = \\theta_m = \\delta_m / 2\\). Sustituyendo en la ecuación general:\n\\[d \\left(\\sin\\frac{\\delta_m}{2} + \\sin\\frac{\\delta_m}{2}\\right) = m\\lambda \\implies 2d \\sin\\left(\\frac{\\delta_m}{2}\\right) = m\\lambda\\]",
    "matched_page": "13-16"
  },
  {
    "id": "O_Ex7",
    "text": "Antes de poder medir la longitud de onda \\(\\lambda\\) de líneas espectrales desconocidas con una red de difracción, se debe caracterizar la constante interplanar \\(d\\) de dicha red. ¿Qué procedimiento de calibración se realiza en la práctica?",
    "options": [
      "Medir la constante \\(d\\) directamente con un calibrador micrómetro de contacto sobre la superficie óptica de la red.",
      "Registrar la posición angular de la desviación mínima \\(\\delta_m\\) del primer orden para una longitud de onda de referencia bien conocida, como la línea amarilla de una lámpara de sodio (\\(\\lambda = 589.3\\text{ nm}\\)), y despejar \\(d\\).",
      "Alinear la red de modo que no desvíe la luz y medir el desfase circular en el condensador.",
      "Medir el calor disipado en la red por unidad de volumen mediante una sonda termoeléctrica."
    ],
    "correct_index": 1,
    "correct_text": "Registrar la posición angular de la desviación mínima \\(\\delta_m\\) del primer orden para una longitud de onda de referencia bien conocida, como la línea amarilla de una lámpara de sodio (\\(\\lambda = 589.3\\text{ nm}\\)), y despejar \\(d\\).",
    "justification": "La constante de red \\(d\\) (distancia entre rendijas adyacentes) puede diferir ligeramente de los valores de fábrica. Para calibrarla de forma precisa, el experimentador introduce una lámpara de sodio cuya longitud de onda central (\\(589.3\\text{ nm}\\)) es estándar. Midiendo el ángulo de desviación mínima \\(\\delta_m\\) en el primer orden, la constante de red se deduce directamente como \\(d = \\lambda / [2\\sin(\\delta_m/2)]\\). Este valor calibrado se utiliza para calcular cualquier otra longitud de onda desconocida.",
    "matched_page": "13-16"
  },
  {
    "id": "O_Ex8",
    "text": "El disco graduado del espectrómetro dispone de dos escalas de nonio (vernier) independientes separadas exactamente 180 grados en el disco. ¿Cuál es el propósito operativo de tomar lecturas en ambos verniers para cada línea medida?",
    "options": [
      "Determinar si la luz difractada por la red presenta polarización elíptica a 180 grados.",
      "Cancelar y corregir por promedio el error sistemático debido a la excentricidad del disco, es decir, la falta de coincidencia entre el eje mecánico de rotación del telescopio y el centro geométrico de la escala graduada.",
      "Medir simultáneamente las longitudes de onda del primer orden positivo y negativo.",
      "Proveer una lectura redundante por si una de las escalas presenta suciedad o daños en sus líneas de división."
    ],
    "correct_index": 1,
    "correct_text": "Cancelar y corregir por promedio el error sistemático debido a la excentricidad del disco, es decir, la falta de coincidencia entre el eje mecánico de rotación del telescopio y el centro geométrico de la escala graduada.",
    "justification": "En los instrumentos mecánicos de medida angular, el eje de rotación del brazo portamicroscopio no coincide perfectamente con el centro geométrico de la escala circular graduada. Esta excentricidad genera una discrepancia armónica sistemática en la lectura del ángulo. Tomando las lecturas angulares en dos verniers opuestos por el diámetro (\\(180^\\circ\\)) y calculando el promedio de la diferencia angular, la contribución de la excentricidad se cancela matemáticamente de forma exacta, mejorando la precisión de la desviación mínima medida.",
    "matched_page": "13-16"
  },
  {
    "id": "O_Ex9",
    "text": "En la caracterización del estado de polarización de una onda de luz mediante los parámetros de Stokes \\((s_0, s_1, s_2, s_3)\\), ¿cuál es el significado físico de la cantidad \\(s_3\\)?",
    "options": [
      "Representa la intensidad total de la luz que no está polarizada.",
      "Describe el balance entre las componentes con polarización circular derecha e izquierda de la onda.",
      "Determina el ángulo de inclinación del elipsoide de polarización lineal.",
      "Cuantifica la pérdida de luz por absorción de Joule en los polarizadores de muestra."
    ],
    "correct_index": 1,
    "correct_text": "Describe el balance entre las componentes con polarización circular derecha e izquierda de la onda.",
    "justification": "Los parámetros de Stokes se definen en términos de intensidades proyectadas en diferentes bases. Mientras que \\(s_1\\) describe el balance lineal horizontal-vertical y \\(s_2\\) el balance oblicuo a \\(\\pm 45^\\circ\\), el parámetro \\(s_3\\) se define como \\(s_3 = \\langle 2 a_1 a_2 \\sin\\delta \\rangle\\), que físicamente equivale a la diferencia entre la intensidad de luz polarizada circular derecha pura e izquierda pura. Si \\(s_3 > 0\\), predomina la helicidad derecha, y si \\(s_3 < 0\\), la izquierda.",
    "matched_page": "9-16"
  },
  {
    "id": "O_Ex10",
    "text": "En la calibración experimental del montaje de polarimetría con luz natural de una lámpara de sodio de intensidad directa \\(I_0\\), se colocan en el banco dos polarizadores idénticos cruzados perpendicularmente y se mide la intensidad residual transmitida \\(I_\\perp\\). ¿Qué parámetro se deduce de esta medición?",
    "options": [
      "La constante de retardo de la lámina de cuarto de onda.",
      "El producto de los coeficientes de transmisión de los ejes principales del polarizador real, cumpliendo \\(k_1 k_2 = \\sqrt{I_\\perp / I_0}\\).",
      "La reflectividad de la fotocélula de medida.",
      "El ángulo de desviación mínima de los ejes ópticos."
    ],
    "correct_index": 1,
    "correct_text": "El producto de los coeficientes de transmisión de los ejes principales del polarizador real, cumpliendo \\(k_1 k_2 = \\sqrt{I_\\perp / I_0}\\).",
    "justification": "La luz natural (no polarizada) tiene componentes ortogonales descorrelacionadas de igual intensidad promedio \\(\\langle a_1^2 \\rangle = \\langle a_2^2 \\rangle = a^2\\), de modo que \\(I_0 = 2a^2\\). Un polarizador real con coeficientes de transmisión \\(k_1\\) y \\(k_2\\) transmite estas componentes de forma imperfecta. Al cruzar dos de estos polarizadores en ángulo recto, la luz que logra pasar es \\(I_\\perp = 2 k_1^2 k_2^2 a^2 = k_1^2 k_2^2 I_0\\). Despejando el producto de coeficientes:\n\\[k_1^2 k_2^2 = \\frac{I_\\perp}{I_0} \\implies k_1 k_2 = \\sqrt{\\frac{I_\\perp}{I_0}}\\]",
    "matched_page": "9-16"
  },
  {
    "id": "O_Ex11",
    "text": "Para la sintonización del analizador circular que mide el parámetro \\(s_3\\), se emplea una lámina de cuarto de onda (\\(\\lambda/4\\)) calibrada para la longitud de onda del sodio (\\(\\lambda \\approx 589\\text{ nm}\\)). Si sustituyéramos la lámpara de sodio por otra fuente de longitud de onda significativamente diferente sin cambiar la lámina retardadora, ¿qué ocurriría?",
    "options": [
      "Las medidas de Stokes seguirían siendo correctas porque el desfase de la lámina es geométrico e independiente del color.",
      "La lámina dejaría de introducir un desfase de exactamente 90 grados (\\(\\pi/2\\)), lo que distorsionaría el estado de polarización medido e invalidaría las ecuaciones del borrador de Stokes.",
      "El compensador se volvería opaco por resonancia de absorción.",
      "Las intensidades \\(I_5\\) e \\(I_6\\) se volverían idénticas independientemente del estado de la luz."
    ],
    "correct_index": 1,
    "correct_text": "La lámina dejaría de introducir un desfase de exactamente 90 grados (\\(\\pi/2\\)), lo que distorsionaría el estado de polarización medido e invalidaría las ecuaciones del borrador de Stokes.",
    "justification": "El retardo de fase \\(\\Gamma\\) introducido por una lámina birrefringente depende de la longitud de onda: \\(\\Gamma = \\frac{2\\pi \\Delta n e}{\\lambda}\\). Como \\(\\Gamma\\) es inversamente proporcional a \\(\\lambda\\), una lámina tallada para dar un desfase de cuarto de onda (\\(\\pi/2\\) radianes o 90°) para la luz amarilla de sodio dará un desfase distinto para cualquier otra longitud de onda, por lo que el analizador circular ya no proyectará las componentes correctas en el osciloscopio y fallará la deducción de \\(s_3\\).",
    "matched_page": "9-16"
  },
  {
    "id": "O_Ex12",
    "text": "De acuerdo con las expresiones obtenidas en la calibración con polarizadores reales, ¿cómo calculamos el parámetro de Stokes \\(s_2\\) a partir de las intensidades medidas con el polarizador orientado a \\(45^\\circ\\) (\\(I_3\\)) y a \\(135^\\circ\\) (\\(I_4\\))?",
    "options": [
      "\\(s_2 = I_3 - I_4\\)",
      "\\(s_2 = \\frac{I_3 - I_4}{k_1^2 - k_2^2}\\), donde los coeficientes de transmisión corrigen las imperfecciones de los polarizadores no ideales.",
      "\\(s_2 = (I_3 + I_4) / (k_1^2 + k_2^2)\\)",
      "\\(s_2 = \\sqrt{(I_3^2 - I_4^2) / I_0}\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(s_2 = \\frac{I_3 - I_4}{k_1^2 - k_2^2}\\), donde los coeficientes de transmisión corrigen las imperfecciones de los polarizadores no ideales.",
    "justification": "Con polarizadores reales con factores de transmisión \\(k_1\\) y \\(k_2\\), las intensidades medidas son \\(I_3 = \\frac{1}{2}(k_1^2 + k_2^2) s_0 + \\frac{1}{2}(k_1^2 - k_2^2) s_2\\) e \\(I_4 = \\frac{1}{2}(k_1^2 + k_2^2) s_0 - \\frac{1}{2}(k_1^2 - k_2^2) s_2\\). Al restar ambas expresiones obtenemos \\(I_3 - I_4 = (k_1^2 - k_2^2) s_2\\), de donde se despeja \\(s_2 = (I_3 - I_4) / (k_1^2 - k_2^2)\\). El denominador corrige el hecho de que un polarizador real disminuye el contraste debido a fugas (\\(k_2 > 0\\)) y absorción (\\(k_1 < 1\\)).",
    "matched_page": "9-16"
  },
  {
    "id": "O_Ex13",
    "text": "En el experimento de Young con el biprisma de Fresnel, al realizar el ajuste de la rendija simple de entrada del colimador, ¿qué compromiso experimental debe alcanzar el alumno respecto a la anchura de su abertura?",
    "options": [
      "Se debe abrir al máximo posible para evitar la difracción en los bordes de la rendija.",
      "Debe ser lo bastante estrecha para garantizar la coherencia espacial y nitidez de las franjas, pero lo suficientemente ancha para asegurar que llegue luz con suficiente intensidad al microscopio para permitir su medida.",
      "Debe tener un ancho equivalente exacto al diámetro de la lente colimadora para colimar por difracción de borde.",
      "Debe cerrarse por completo y realizar la lectura utilizando únicamente la iluminación ambiental de fondo de la habitación."
    ],
    "correct_index": 1,
    "correct_text": "Debe ser lo bastante estrecha para garantizar la coherencia espacial y nitidez de las franjas, pero lo suficientemente ancha para asegurar que llegue luz con suficiente intensidad al microscopio para permitir su medida.",
    "justification": "La lámpara de vapor de sodio es una fuente espacialmente extensa e incoherente. Estrechar la rendija de entrada limita transversalmente la procedencia espacial de los frentes de onda, lo que aumenta la coherencia espacial en los focos virtuales creados por el biprisma e incrementa el contraste y nitidez de las franjas. Sin embargo, una abertura muy pequeña disminuye drásticamente el flujo de luz total. Por tanto, operativamente se debe buscar un término medio para ver franjas nítidas y brillantes a la vez.",
    "matched_page": "14-16"
  },
  {
    "id": "O_Ex14",
    "text": "Debido a que la distancia \\(d\\) (separación entre los dos focos virtuales coherentes generados por el biprisma) es sumamente pequeña, el guion exige determinarla mediante el método de la lente auxiliar (lente delgada colocada entre el biprisma y el microscopio). Si las separaciones de las imágenes proyectadas para las dos posiciones de enfoque válidas son \\(d_1\\) y \\(d_2\\), ¿cómo se calcula la separación real \\(d\\)?",
    "options": [
      "\\(d = \\frac{d_1 + d_2}{2}\\)",
      "\\(d = \\sqrt{d_1 \\cdot d_2}\\)",
      "\\(d = d_1 \\cdot d_2\\)",
      "\\(d = |d_1 - d_2|\\)"
    ],
    "correct_index": 1,
    "correct_text": "\\(d = \\sqrt{d_1 \\cdot d_2}\\)",
    "justification": "El método de la lente auxiliar utiliza el principio de puntos conjugados de Bessel. Para una distancia fija rendija-microscopio, existen dos posiciones de la lente convergente que forman una imagen nítida de las fuentes virtuales. Las magnificaciones de la lente en estas posiciones son recíprocas (\\(m_1 \\cdot m_2 = 1\\)). Las distancias entre las imágenes de las dos fuentes medidas en el microscopio para cada posición de enfoque son \\(d_1 = m_1 d\\) y \\(d_2 = m_2 d\\). Al multiplicar ambas:\n\\[d_1 \\cdot d_2 = m_1 m_2 d^2 = (1) d^2 \\implies d = \\sqrt{d_1 \\cdot d_2}\\]\nEsta relación permite obtener la separación \\(d\\) con gran precisión utilizando la escala micrómetro del ocular.",
    "matched_page": "14-16"
  },
  {
    "id": "O_Ex15",
    "text": "En el microscopio ocular de la práctica medimos la distancia transversal del patrón de franjas consecutivas (interfranja). Si alejamos el microscopio del plano del biprisma (aumentando la distancia \\(D\\) al plano de las rendijas virtuales), ¿cómo varía el espaciado del patrón de interferencia?",
    "options": [
      "Las franjas se estrechan debido a la dispersión en el aire.",
      "La distancia interfranja aumenta proporcionalmente a la distancia \\(D\\), haciendo las franjas más anchas y legibles.",
      "La interfranja se reduce a la mitad por la ley del inverso del cuadrado de la distancia.",
      "La interfranja permanece constante porque solo depende de la longitud de onda de la lámpara de sodio."
    ],
    "correct_index": 1,
    "correct_text": "La distancia interfranja aumenta proporcionalmente a la distancia \\(D\\), haciendo las franjas más anchas y legibles.",
    "justification": "La distancia entre máximos adyacentes en el patrón de Young (interfranja) viene dada por la ecuación \\(i = \\frac{\\lambda D}{d}\\). Al ser la longitud de onda del sodio \\(\\lambda\\) y la separación entre focos virtuales \\(d\\) constantes, la interfranja \\(i\\) es directamente proporcional a la distancia \\(D\\) al plano de observación. Por tanto, al retirar el microscopio hacia atrás, las franjas de interferencia se ensanchan de forma estrictamente lineal con \\(D\\).",
    "matched_page": "14-16"
  },
  {
    "id": "O_Ex16",
    "text": "Para lograr observar con nitidez el patrón de franjas de interferencia en el microscopio micrómetro de la práctica del biprisma de Fresnel, ¿qué alineación mecánica y geométrica es imprescindible realizar en el banco de trabajo?",
    "options": [
      "Alinear la rendija de entrada rotándola hasta que sea perfectamente paralela a la arista central del biprisma de Fresnel y al hilo del retículo del microscopio.",
      "Colocar la rendija perpendicular a la arista del biprisma y girar el detector 45 grados.",
      "Desconectar la rendija del colimador y colocar la red de difracción en incidencia oblicua.",
      "Inclinar la base del microscopio un ángulo igual al ángulo de refracción límite de la mica."
    ],
    "correct_index": 0,
    "correct_text": "Alinear la rendija de entrada rotándola hasta que sea perfectamente paralela a la arista central del biprisma de Fresnel y al hilo del retículo del microscopio.",
    "justification": "En el biprisma de Fresnel, el frente de onda se escinde por la arista central paralela a la base de los dos prismas adyacentes. Si la rendija de entrada (que actúa como fuente coherente) está rotada o inclinada respecto a la arista del biprisma, los frentes de onda difractados a lo largo de la altura de la rendija llegarán al microscopio con diferentes desfases relativos transversales. La superposición incoherente de estos desfases difumina e impide observar el patrón. Es operativo y necesario girar el colimador de entrada hasta que su rendija sea exactamente paralela a la arista del biprisma.",
    "matched_page": "14-16"
  }
];











// Estado del Quiz
let state = {
    pool: 'official', // 'official' o 'extra'
    questions: [...QUIZ_DATABASE],
    currentIndex: 0,
    userAnswers: new Array(QUIZ_DATABASE.length).fill(null), // guarda índices 0-3 o null
    verified: new Array(QUIZ_DATABASE.length).fill(false),  // para modo práctica
    mode: 'practice', // 'practice' o 'exam'
    examTimeSeconds: 1800, // 30 minutos
    examTimerInterval: null,
    examTimeElapsed: 0,
    examSubmitted: false,
    activeReviewTab: 'all', // 'all', 'correct', 'failed'
    onlyFailedMode: false, // si estamos repasando solo fallos
    roomName: '',
    userName: '',
    isSyncing: false,
    roomSyncInterval: null
};

// Categorías
function getCategoryName(id) {
    if (id.includes('_Ex')) return 'Preguntas Extra';
    if (id.startsWith('O')) return 'Óptica';
    if (id.startsWith('C')) return 'Física Cuántica';
    if (id.startsWith('E')) return 'Electromagnetismo';
    return 'General';
}

// Inicialización de DOM y Eventos
document.addEventListener('DOMContentLoaded', () => {
    initPoolSelectors();
    initModeSelectors();
    initQuiz();
    initReviewBoard();
    
    // Botones de Navegación
    document.getElementById('btn-prev').addEventListener('click', prevQuestion);
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-verify').addEventListener('click', verifyAnswer);
    document.getElementById('btn-submit-exam').addEventListener('click', submitExam);
    
    // Botones de reinicio
    document.getElementById('btn-restart').addEventListener('click', () => resetQuiz(false));
    document.getElementById('btn-restart-failed').addEventListener('click', () => resetQuiz(true));
    document.getElementById('btn-restart-exam').addEventListener('click', () => resetQuiz(false));
    
    // Listeners del Leaderboard
    document.getElementById('btn-share-score').addEventListener('click', toggleShareBox);
    document.getElementById('btn-generate-card').addEventListener('click', generateShareCard);
    document.getElementById('btn-copy-card').addEventListener('click', copyShareCard);
    document.getElementById('btn-add-friend-score').addEventListener('click', addFriendScore);
    
    // Listeners del Leaderboard Online
    document.getElementById('btn-connect-room').addEventListener('click', connectRoom);
    document.getElementById('btn-disconnect-room').addEventListener('click', disconnectRoom);
    document.getElementById('btn-sync-room').addEventListener('click', () => syncOnlineLeaderboard(true));
});

// Selección de Modo
function initModeSelectors() {
    const practiceTab = document.getElementById('tab-mode-practice');
    const examTab = document.getElementById('tab-mode-exam');
    
    practiceTab.addEventListener('click', () => switchMode('practice'));
    examTab.addEventListener('click', () => switchMode('exam'));
}

function switchMode(mode) {
    if (state.mode === mode) return;
    
    // Confirmar si hay progreso
    const hasProgress = state.userAnswers.some(ans => ans !== null);
    if (hasProgress && !confirm('Se perderá tu progreso actual al cambiar de modo. ¿Deseas continuar?')) {
        return;
    }
    
    state.mode = mode;
    document.getElementById('tab-mode-practice').classList.toggle('active', mode === 'practice');
    document.getElementById('tab-mode-exam').classList.toggle('active', mode === 'exam');
    
    document.body.className = mode + '-mode-active';
    
    resetQuiz(false);
}

function initPoolSelectors() {
    const officialTab = document.getElementById('tab-pool-official');
    const extraTab = document.getElementById('tab-pool-extra');
    
    if (officialTab && extraTab) {
        officialTab.addEventListener('click', () => switchPool('official'));
        extraTab.addEventListener('click', () => switchPool('extra'));
    }
}

function switchPool(pool) {
    if (state.pool === pool) return;
    
    // Guardar progreso actual del pool que dejamos
    saveStateToLocalStorage();
    
    state.pool = pool;
    document.getElementById('tab-pool-official').classList.toggle('active', pool === 'official');
    document.getElementById('tab-pool-extra').classList.toggle('active', pool === 'extra');
    
    const loaded = loadStateFromLocalStorage();
    if (!loaded) {
        resetQuiz(false);
    } else {
        // Aplicar clases y modos visuales
        document.body.className = state.mode + '-mode-active';
        document.getElementById('tab-mode-practice').classList.toggle('active', state.mode === 'practice');
        document.getElementById('tab-mode-exam').classList.toggle('active', state.mode === 'exam');
        
        if (state.mode === 'exam') {
            document.getElementById('btn-verify').classList.add('hidden');
            document.getElementById('btn-submit-exam').classList.remove('hidden');
            document.getElementById('timer-container').classList.remove('hidden');
            if (!state.examSubmitted) {
                resetQuiz(false);
            } else {
                document.getElementById('quiz-play-container').classList.add('hidden');
                document.getElementById('exam-results-card').classList.remove('hidden');
                document.getElementById('review-board-card').classList.remove('hidden');
                document.getElementById('leaderboard-card').classList.remove('hidden');
                renderReviewBoard();
                renderLeaderboard();
            }
        } else {
            document.getElementById('btn-verify').classList.remove('hidden');
            document.getElementById('btn-submit-exam').classList.add('hidden');
            document.getElementById('timer-container').classList.add('hidden');
            
            const answeredCount = state.userAnswers.filter(ans => ans !== null).length;
            if (answeredCount === state.questions.length) {
                document.getElementById('review-board-card').classList.remove('hidden');
                renderReviewBoard();
            } else {
                document.getElementById('review-board-card').classList.add('hidden');
            }
        }
        
        if (state.roomName) {
            updateRoomUIConnected(state.roomName, state.userName);
            syncOnlineLeaderboard(false);
        } else {
            updateRoomUIDisconnected();
        }
        
        updateProgress();
        renderQuestion(state.currentIndex);
        updateStats();
    }
    
    localStorage.setItem('lab_physics_active_pool', pool);
}

function toggleDetailRow(el, stats) {
    if (!el) return;
    const row = el.closest('.detail-row');
    if (stats.total === 0) {
        if (row) row.classList.add('hidden');
    } else {
        if (row) row.classList.remove('hidden');
        el.textContent = `${stats.correct} de ${stats.total}`;
    }
}

// --- FUNCIONES DE ALEATORIZACIÓN (SHUFFLE) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function prepareQuestions(originalQuestions, shuffleQuestions = true, shuffleOptions = true) {
    let prepped = originalQuestions.map(q => {
        // Clonar la pregunta para no modificar la base de datos estática
        let cloned = {
            id: q.id,
            text: q.text,
            options: [...q.options],
            correct_index: q.correct_index,
            justification: q.justification,
            matched_page: q.matched_page
        };
        
        if (shuffleOptions) {
            const correctText = cloned.options[cloned.correct_index];
            shuffleArray(cloned.options);
            cloned.correct_index = cloned.options.indexOf(correctText);
        }
        
        return cloned;
    });
    
    if (shuffleQuestions) {
        shuffleArray(prepped);
    }
    
    return prepped;
}

// Llenado / Reinicio del Quiz
function resetQuiz(onlyFailed = false) {
    // Detener temporizador si existe
    if (state.examTimerInterval) {
        clearInterval(state.examTimerInterval);
        state.examTimerInterval = null;
    }
    
    state.onlyFailedMode = onlyFailed;
    
    // Filter database based on the selected pool
    const activeDatabase = state.pool === 'official' 
        ? QUIZ_DATABASE.filter(q => !q.id.includes('_Ex'))
        : QUIZ_DATABASE.filter(q => q.id.includes('_Ex'));
    
    if (onlyFailed) {
        // Filtrar preguntas que se fallaron la última vez
        const failedIds = [];
        state.userAnswers.forEach((ans, idx) => {
            const q = state.questions[idx];
            if (q && ans !== q.correct_index) {
                failedIds.push(q.id);
            }
        });
        
        if (failedIds.length === 0) {
            alert('¡No tienes preguntas falladas para repasar!');
            state.onlyFailedMode = false;
            // Práctica: sin barajar
            state.questions = prepareQuestions(activeDatabase, false, false);
        } else {
            const originalFailed = failedIds.map(id => activeDatabase.find(q => q.id === id)).filter(Boolean);
            // Práctica de fallos: sin barajar
            state.questions = prepareQuestions(originalFailed, false, false);
        }
    } else {
        if (state.mode === 'exam') {
            // Modo Examen: Barajar preguntas y opciones
            state.questions = prepareQuestions(activeDatabase, true, true);
        } else {
            // Modo Práctica: Secuencial, sin barajar
            state.questions = prepareQuestions(activeDatabase, false, false);
        }
    }
    
    state.currentIndex = 0;
    state.userAnswers = new Array(state.questions.length).fill(null);
    state.verified = new Array(state.questions.length).fill(false);
    state.examTimeElapsed = 0;
    state.examSubmitted = false;
    
    // UI elements resetting
    document.getElementById('exam-results-card').classList.add('hidden');
    document.getElementById('quiz-play-container').classList.remove('hidden');
    document.getElementById('review-board-card').classList.add('hidden');
    // Cerrar la caja de compartir
    document.getElementById('share-box-container').classList.add('hidden');
    document.getElementById('share-name-input').value = '';
    document.getElementById('share-card-text').value = '';
    
    if (state.mode === 'exam') {
        // Ocultar verificación en modo examen
        document.getElementById('btn-verify').classList.add('hidden');
        document.getElementById('btn-submit-exam').classList.remove('hidden');
        document.getElementById('timer-container').classList.remove('hidden');
        startExamTimer();
    } else {
        document.getElementById('btn-verify').classList.remove('hidden');
        document.getElementById('btn-submit-exam').classList.add('hidden');
        document.getElementById('timer-container').classList.add('hidden');
    }
    
    updateProgress();
    renderQuestion(0);
    updateStats();
    saveStateToLocalStorage();
}

function initQuiz() {
    // Restaurar selección de banco de preguntas anterior
    const savedPool = localStorage.getItem('lab_physics_active_pool');
    if (savedPool === 'extra') {
        state.pool = 'extra';
        document.getElementById('tab-pool-official').classList.remove('active');
        document.getElementById('tab-pool-extra').classList.add('active');
    } else {
        state.pool = 'official';
        document.getElementById('tab-pool-official').classList.add('active');
        document.getElementById('tab-pool-extra').classList.remove('active');
    }

    const loaded = loadStateFromLocalStorage();
    if (loaded) {
        // Aplicar clases y modos visuales cargados
        document.body.className = state.mode + '-mode-active';
        document.getElementById('tab-mode-practice').classList.toggle('active', state.mode === 'practice');
        document.getElementById('tab-mode-exam').classList.toggle('active', state.mode === 'exam');
        
        if (state.mode === 'exam') {
            document.getElementById('btn-verify').classList.add('hidden');
            document.getElementById('btn-submit-exam').classList.remove('hidden');
            document.getElementById('timer-container').classList.remove('hidden');
            if (!state.examSubmitted) {
                // Si recargan a mitad de examen, vuelve a empezar de cero con barajado fresco
                resetQuiz(false);
            } else {
                // Si ya fue enviado, mostrar directamente los resultados y el tablón
                document.getElementById('quiz-play-container').classList.add('hidden');
                document.getElementById('exam-results-card').classList.remove('hidden');
                document.getElementById('review-board-card').classList.remove('hidden');
                document.getElementById('leaderboard-card').classList.remove('hidden');
                renderReviewBoard();
                renderLeaderboard();
            }
        } else {
            document.getElementById('btn-verify').classList.remove('hidden');
            document.getElementById('btn-submit-exam').classList.add('hidden');
            document.getElementById('timer-container').classList.add('hidden');
            // Si el modo práctica está completo, mostrar el tablón
            const answeredCount = state.userAnswers.filter(ans => ans !== null).length;
            if (answeredCount === state.questions.length) {
                document.getElementById('review-board-card').classList.remove('hidden');
                renderReviewBoard();
            }
        }
        
        updateProgress();
        renderQuestion(state.currentIndex);
        updateStats();
    } else {
        resetQuiz(false);
    }
    
    // Inicializar conexión a sala si ya estaba guardada
    initRoomConnection();
}

// Temporizador Modo Examen
function startExamTimer() {
    const timerVal = document.getElementById('timer-val');
    state.examTimeElapsed = 0;
    
    const updateTimerUI = () => {
        const remaining = state.examTimeSeconds - state.examTimeElapsed;
        if (remaining <= 0) {
            timerVal.textContent = "00:00";
            clearInterval(state.examTimerInterval);
            alert('¡Se ha agotado el tiempo del examen! Se enviará automáticamente.');
            submitExam();
            return;
        }
        
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        timerVal.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Alerta visual de poco tiempo
        if (remaining < 60) {
            timerVal.classList.add('low-time');
        } else {
            timerVal.classList.remove('low-time');
        }
    };
    
    updateTimerUI();
    state.examTimerInterval = setInterval(() => {
        state.examTimeElapsed++;
        updateTimerUI();
    }, 1000);
}

// Renderizar Pregunta
function renderQuestion(index) {
    if (index < 0 || index >= state.questions.length) return;
    
    state.currentIndex = index;
    const q = state.questions[index];
    
    // Categoría y Número
    document.getElementById('question-category').textContent = getCategoryName(q.id);
    document.getElementById('question-number').textContent = `Pregunta ${index + 1} de ${state.questions.length} [${q.id}]`;
    
    // Texto de Pregunta
    document.getElementById('question-text').textContent = q.text;
    
    // Opciones
    const optionsContainer = document.getElementById('options-list');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((optText, optIdx) => {
        const li = document.createElement('li');
        li.className = 'option-item';
        li.id = `option-${optIdx}`;
        
        const isSelected = state.userAnswers[index] === optIdx;
        if (isSelected) li.classList.add('selected');
        
        // Mostrar acierto/fallo en modo práctica si ya ha sido verificada
        if (state.mode === 'practice' && state.verified[index]) {
            if (optIdx === q.correct_index) {
                li.classList.add('correct');
            } else if (isSelected) {
                li.classList.add('wrong');
            }
            li.classList.add('disabled');
        }
        
        // Elementos internos
        const checkbox = document.createElement('div');
        checkbox.className = 'opt-checkbox';
        if (state.mode === 'practice' && state.verified[index] && optIdx === q.correct_index) {
            checkbox.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        } else if (state.mode === 'practice' && state.verified[index] && isSelected && optIdx !== q.correct_index) {
            checkbox.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        } else if (isSelected) {
            checkbox.classList.add('checked');
        }
        
        const textSpan = document.createElement('span');
        textSpan.className = 'opt-text';
        textSpan.textContent = optText;
        
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        
        // Clic en opción
        if (!(state.mode === 'practice' && state.verified[index])) {
            li.addEventListener('click', () => selectOption(optIdx));
        }
        
        optionsContainer.appendChild(li);
    });
    
    // Justificación (Mostrar en práctica si ya fue verificada, ocultar en examen)
    const justCard = document.getElementById('justification-card');
    if (state.mode === 'practice' && state.verified[index]) {
        justCard.classList.remove('hidden');
        document.getElementById('justification-content').innerHTML = `
            <p class="justification-correct"><strong>Respuesta correcta:</strong> ${q.options[q.correct_index]}</p>
            <p class="justification-text">${q.justification || 'No hay justificación disponible para esta pregunta.'}</p>
            <p class="justification-source"><small>Pág. PDF original: ${q.matched_page}</small></p>
        `;
        document.getElementById('btn-verify').classList.add('hidden');
    } else {
        justCard.classList.add('hidden');
        if (state.mode === 'practice') {
            document.getElementById('btn-verify').classList.remove('hidden');
        }
    }
    
    // Estado de botones de navegación
    document.getElementById('btn-prev').disabled = index === 0;
    
        // Si estamos en la última pregunta del examen, el botón siguiente cambia
    const nextBtn = document.getElementById('btn-next');
    if (index === state.questions.length - 1) {
        if (state.mode === 'exam') {
            nextBtn.textContent = 'Enviar Examen';
            nextBtn.classList.add('highlight-btn');
        } else {
            nextBtn.textContent = 'Ver Resultados';
            nextBtn.classList.add('highlight-btn');
        }
    } else {
        nextBtn.textContent = 'Siguiente';
        nextBtn.classList.remove('highlight-btn');
    }
    triggerMathJax();
}

// Seleccionar Opción
function selectOption(optIndex) {
    const currentQIdx = state.currentIndex;
    state.userAnswers[currentQIdx] = optIndex;
    
    // Actualizar visualmente la selección
    const listItems = document.querySelectorAll('#options-list .option-item');
    listItems.forEach((li, idx) => {
        const isSelected = idx === optIndex;
        li.classList.toggle('selected', isSelected);
        
        const checkbox = li.querySelector('.opt-checkbox');
        checkbox.classList.toggle('checked', isSelected);
    });
    
    updateProgress();
    updateStats();
    saveStateToLocalStorage();
}

// Actualizar Barra de Progreso y Marcadores
function updateProgress() {
    const answeredCount = state.userAnswers.filter(ans => ans !== null).length;
    const totalCount = state.questions.length;
    const pct = totalCount > 0 ? (answeredCount / totalCount) * 100 : 0;
    
    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('progress-text').textContent = `${pct.toFixed(0)}% Completado (${answeredCount}/${totalCount})`;
}

function updateStats() {
    if (state.mode === 'practice') {
        let correct = 0;
        let wrong = 0;
        
        state.verified.forEach((ver, idx) => {
            if (ver) {
                if (state.userAnswers[idx] === state.questions[idx].correct_index) {
                    correct++;
                } else {
                    wrong++;
                }
            }
        });
        
        document.getElementById('stat-correct').textContent = correct;
        document.getElementById('stat-wrong').textContent = wrong;
    } else {
        const answered = state.userAnswers.filter(ans => ans !== null).length;
        document.getElementById('stat-correct').textContent = answered;
        document.getElementById('stat-wrong').textContent = state.questions.length - answered;
    }
}

// Verificar Respuesta (Modo Práctica)
function verifyAnswer() {
    const index = state.currentIndex;
    if (state.userAnswers[index] === null) {
        alert('Por favor, selecciona una respuesta antes de verificar.');
        return;
    }
    
    state.verified[index] = true;
    
    renderQuestion(index);
    updateStats();
    saveStateToLocalStorage();
}

// Navegación
function prevQuestion() {
    if (state.currentIndex > 0) {
        renderQuestion(state.currentIndex - 1);
        saveStateToLocalStorage();
    }
}

function nextQuestion() {
    if (state.currentIndex < state.questions.length - 1) {
        renderQuestion(state.currentIndex + 1);
        saveStateToLocalStorage();
    } else {
        if (state.mode === 'exam') {
            if (confirm('¿Estás seguro de que deseas enviar el examen?')) {
                submitExam();
            }
        } else {
            showPracticeResults();
        }
    }
}

// Enviar Examen
function submitExam() {
    if (state.examTimerInterval) {
        clearInterval(state.examTimerInterval);
    }
    state.examSubmitted = true;
    
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    
    const categoryStats = {
        'Ópt': { correct: 0, total: 0 },
        'Cuá': { correct: 0, total: 0 },
        'Ele': { correct: 0, total: 0 },
        'Ext': { correct: 0, total: 0 }
    };
    
    state.questions.forEach((q, idx) => {
        let cat = 'Ele';
        if (q.id.includes('_Ex')) cat = 'Ext';
        else if (q.id.startsWith('O')) cat = 'Ópt';
        else if (q.id.startsWith('C')) cat = 'Cuá';
        
        categoryStats[cat].total++;
        
        const ans = state.userAnswers[idx];
        if (ans === null) {
            unanswered++;
        } else if (ans === q.correct_index) {
            correct++;
            categoryStats[cat].correct++;
        } else {
            wrong++;
        }
    });
    
    document.getElementById('quiz-play-container').classList.add('hidden');
    document.getElementById('exam-results-card').classList.remove('hidden');
    
    const total = state.questions.length;
    const scorePct = total > 0 ? (correct / total) * 100 : 0;
    
    document.getElementById('results-score-text').textContent = `${correct} / ${total}`;
    document.getElementById('results-percent-text').textContent = `${scorePct.toFixed(0)}%`;
    document.getElementById('results-time-text').textContent = formatTime(state.examTimeElapsed);
    
    const pctCircle = document.getElementById('results-percent-container');
    pctCircle.className = 'results-percent-circle';
    if (scorePct >= 70) {
        pctCircle.classList.add('pass');
        triggerConfetti();
    } else if (scorePct >= 50) {
        pctCircle.classList.add('warning');
    } else {
        pctCircle.classList.add('fail');
    }
    
    const detailOpt = document.getElementById('results-detail-opt');
    const detailQua = document.getElementById('results-detail-qua');
    const detailEle = document.getElementById('results-detail-ele');
    const detailExtra = document.getElementById('results-detail-extra');
    
    toggleDetailRow(detailOpt, categoryStats['Ópt']);
    toggleDetailRow(detailQua, categoryStats['Cuá']);
    toggleDetailRow(detailEle, categoryStats['Ele']);
    toggleDetailRow(detailExtra, categoryStats['Ext']);
    
    renderReviewBoard();
    document.getElementById('review-board-card').classList.remove('hidden');
    document.getElementById('leaderboard-card').classList.remove('hidden');
    renderLeaderboard();
    saveStateToLocalStorage();
    
    // Guardar y sincronizar automáticamente si están conectados a una sala con usuario definido
    if (state.roomName && state.userName) {
        saveToLeaderboard(state.userName, correct, state.examTimeElapsed);
    } else if (state.roomName) {
        syncOnlineLeaderboard(false);
    }
}

// Resultados en Modo Práctica
function showPracticeResults() {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    
    state.questions.forEach((q, idx) => {
        const ans = state.userAnswers[idx];
        if (ans === null) {
            unanswered++;
        } else if (ans === q.correct_index) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    const total = state.questions.length;
    const scorePct = total > 0 ? (correct / total) * 100 : 0;
    
    if (scorePct === 100) {
        triggerConfetti();
    }
    
    alert(`¡Práctica completada!\nAciertos: ${correct}\nFallos: ${wrong}\nSin responder: ${unanswered}\nPorcentaje de acierto: ${scorePct.toFixed(0)}%`);
    
    renderReviewBoard();
    document.getElementById('review-board-card').classList.remove('hidden');
    document.getElementById('review-board-card').scrollIntoView({ behavior: 'smooth' });
}

// Formatear Tiempo
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Inicialización de la Lista de Repaso
function initReviewBoard() {
    const tabs = ['all', 'correct', 'failed'];
    tabs.forEach(tabId => {
        const tabEl = document.getElementById(`tab-rev-${tabId}`);
        tabEl.addEventListener('click', () => {
            state.activeReviewTab = tabId;
            tabs.forEach(t => document.getElementById(`tab-rev-${t}`).classList.remove('active'));
            tabEl.classList.add('active');
            renderReviewBoard();
        });
    });
}

// Renderizar la Lista de Repaso
function renderReviewBoard() {
    const container = document.getElementById('review-list-container');
    container.innerHTML = '';
    
    const filter = state.activeReviewTab;
    let count = 0;
    
    state.questions.forEach((q, idx) => {
        const userAnsIdx = state.userAnswers[idx];
        const isCorrect = userAnsIdx === q.correct_index;
        
        if (filter === 'correct' && !isCorrect) return;
        if (filter === 'failed' && (userAnsIdx === null || isCorrect)) return;
        
        count++;
        
        const card = document.createElement('div');
        card.className = `review-item-card ${userAnsIdx === null ? 'unanswered' : (isCorrect ? 'correct' : 'wrong')}`;
        
        const header = document.createElement('div');
        header.className = 'review-item-header';
        
        const title = document.createElement('span');
        title.className = 'review-item-title';
        title.innerHTML = `<strong>${q.id}</strong> - ${q.text.substring(0, 100)}...`;
        
        const badge = document.createElement('span');
        badge.className = `review-badge ${userAnsIdx === null ? 'unanswered' : (isCorrect ? 'correct' : 'wrong')}`;
        badge.textContent = userAnsIdx === null ? 'Sin responder' : (isCorrect ? 'Correcta' : 'Fallada');
        
        header.appendChild(title);
        header.appendChild(badge);
        
        const details = document.createElement('div');
        details.className = 'review-item-details hidden';
        
        const optionsList = document.createElement('ul');
        optionsList.className = 'review-options-list';
        
        q.options.forEach((optText, optIdx) => {
            const li = document.createElement('li');
            li.className = 'review-opt-item';
            
            if (optIdx === q.correct_index) {
                li.classList.add('correct');
            }
            if (optIdx === userAnsIdx && !isCorrect) {
                li.classList.add('wrong');
            }
            
            let iconMarkup = '<div class="opt-dot"></div>';
            if (optIdx === q.correct_index) {
                iconMarkup = '<svg class="icon-small text-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            } else if (optIdx === userAnsIdx && !isCorrect) {
                iconMarkup = '<svg class="icon-small text-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            }
            
            li.innerHTML = `${iconMarkup}<span>${optText}</span>`;
            optionsList.appendChild(li);
        });
        
        const justDiv = document.createElement('div');
        justDiv.className = 'review-justification';
        justDiv.innerHTML = `
            <h5>Explicación y Justificación Física:</h5>
            <p>${q.justification || 'No hay justificación disponible para esta pregunta.'}</p>
            <p class="review-meta"><small>Categoría: ${getCategoryName(q.id)} | Práctica de origen | Pág. PDF: ${q.matched_page}</small></p>
        `;
        
        details.appendChild(optionsList);
        details.appendChild(justDiv);
        
        card.appendChild(header);
        card.appendChild(details);
        
        header.addEventListener('click', () => {
            details.classList.toggle('hidden');
            card.classList.toggle('expanded');
        });
        
        container.appendChild(card);
    });
    
    if (count === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'empty-review-msg';
        emptyMsg.textContent = 'No hay preguntas en esta lista.';
        container.appendChild(emptyMsg);
    }
    triggerMathJax();
}

// Confeti Animado (Canvas Puro)
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#a855f7', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
    const particles = [];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }
    
    let animationFrameId;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let remaining = false;
        particles.forEach(p => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - (p.r / 2)) * 15;
            
            if (p.y < canvas.height) {
                remaining = true;
            }
            
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + (p.r / 2), p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + (p.r / 2));
            ctx.stroke();
        });
        
        if (remaining) {
            animationFrameId = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    draw();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// MathJax and Offline fallback
function triggerMathJax() {
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
        window.MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
    }
}

function cleanLatexForOffline(text) {
    if (!text) return '';
    return text.replace(/\\\((.*?)\\\)/g, (match, math) => {
        let clean = math;
        const replacements = [
            [/\\sin\b/g, 'sin'],
            [/\\cos\b/g, 'cos'],
            [/\\theta\b/g, 'θ'],
            [/\\lambda\b/g, 'λ'],
            [/\\Delta\b/g, 'Δ'],
            [/\\hbar\b/g, 'ℏ'],
            [/\\omega\b/g, 'ω'],
            [/\\mu_B\b/g, 'μ_B'],
            [/\\mu\b/g, 'μ'],
            [/\\approx\b/g, '≈'],
            [/\\le\b/g, '≤'],
            [/\\ge\b/g, '≥'],
            [/\\leq\b/g, '≤'],
            [/\\geq\b/g, '≥'],
            [/\\cdot\b/g, '·'],
            [/\\times\b/g, '×'],
            [/\\parallel\b/g, '∥'],
            [/\\hat\s*([A-Za-z])/g, '$1̂'],
            [/\\propto\b/g, '∝'],
            [/_0/g, '₀'],
            [/_1/g, '₁'],
            [/_2/g, '₂'],
            [/_3/g, '₃'],
            [/_i/g, 'ᵢ'],
            [/_f/g, '𝒻'],
            [/_n/g, 'ₙ'],
            [/_v/g, 'ᵥ'],
            [/_d/g, 'd'],
            [/_\{?exp\}?/g, '₍exp₎'],
            [/_\{?calc\}?/g, '₍calc₎'],
            [/_\{?real\}?/g, '₍real₎'],
            [/_\{?eq\}?/g, '₍eq₎'],
            [/_\{?RF\}?/g, '₍RF₎'],
            [/_\{?ext\}?/g, '₍ext₎'],
            [/_\{?movil\}?/g, '₍móvil₎'],
            [/_\{?iman\}?/g, '₍imán₎'],
            [/_\{?imp\}?/g, '₍imp₎'],
            [/_\{?Hall\}?/g, '₍Hall₎'],
            [/_\{?H\}?/g, '₍H₎'],
            [/_\{?s\}?/g, '₍s₎'],
            [/_\{?r\}?/g, '₍r₎'],
            [/_\{?x\}/g, 'ₓ'],
            [/_\{?y\}/g, 'ᵧ'],
            [/_\{?z\}/g, 'z'],
            [/\^2/g, '²'],
            [/\^3/g, '³'],
            [/\^\s*\\prime/g, "'"],
            [/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)'],
            [/\\sqrt\{([^}]+)\}/g, '√($1)'],
            [/\\sqrt\b/g, '√'],
            [/\\vec\{?([A-Za-z])\}?/g, '→$1'],
            [/\\circ/g, '°'],
            [/\{/g, ''],
            [/\}/g, ''],
            [/\\/g, '']
        ];
        replacements.forEach(([regex, repl]) => {
            clean = clean.replace(regex, repl);
        });
        return clean.trim();
    });
}

// Check if MathJax fails to load (offline mode) after 2 seconds
setTimeout(() => {
    if (typeof MathJax === 'undefined' || !MathJax.typesetPromise) {
        console.log('MathJax not detected (offline). Converting equations to Unicode text...');
        QUIZ_DATABASE.forEach(q => {
            q.justification = cleanLatexForOffline(q.justification);
        });
        // Update currently rendered question if any
        if (state && typeof renderQuestion === 'function') {
            renderQuestion(state.currentIndex);
        }
    }
}, 2000);


// --- PERSISTENCIA CON LOCALSTORAGE ---
function getLocalStorageKey() {
    return state.pool === 'official' ? 'lab_physics_quiz_state_v1' : 'lab_physics_quiz_state_extra_v1';
}

function saveStateToLocalStorage() {
    try {
        const dataToSave = {
            userAnswers: state.userAnswers,
            verified: state.verified,
            mode: state.mode,
            onlyFailedMode: state.onlyFailedMode,
            examSubmitted: state.examSubmitted,
            examTimeElapsed: state.examTimeElapsed,
            currentIndex: state.currentIndex,
            // Guardamos la lista de preguntas completa (con su orden y opciones barajadas)
            questions: state.questions
        };
        localStorage.setItem(getLocalStorageKey(), JSON.stringify(dataToSave));
    } catch (e) {
        console.error('Error al guardar el estado en localStorage:', e);
    }
}

function loadStateFromLocalStorage() {
    const raw = localStorage.getItem(getLocalStorageKey());
    if (!raw) return false;
    
    try {
        const saved = JSON.parse(raw);
        state.mode = saved.mode || 'practice';
        state.onlyFailedMode = saved.onlyFailedMode || false;
        state.examSubmitted = saved.examSubmitted || false;
        state.examTimeElapsed = saved.examTimeElapsed || 0;
        state.currentIndex = saved.currentIndex || 0;
        
        // Reconstruir lista de preguntas activas
        if (saved.questions && saved.questions.length > 0) {
            state.questions = saved.questions;
        } else if (saved.activeQuestionIds && saved.activeQuestionIds.length > 0) {
            // Fallback de retrocompatibilidad
            state.questions = saved.activeQuestionIds.map(id => {
                return QUIZ_DATABASE.find(q => q.id === id);
            }).filter(Boolean);
        } else {
            state.questions = [...QUIZ_DATABASE];
        }
        
        state.userAnswers = saved.userAnswers || new Array(state.questions.length).fill(null);
        state.verified = saved.verified || new Array(state.questions.length).fill(false);
        
        return true;
    } catch (e) {
        console.error('Error al cargar el estado desde localStorage:', e);
        return false;
    }
}


// --- CLASIFICACIÓN Y COMPARTIR RESULTADOS ---
function getLeaderboardKey() {
    return state.pool === 'official' ? 'lab_physics_leaderboard_v1' : 'lab_physics_leaderboard_extra_v1';
}

// Generar código de verificación (Hash anti-trampa)
function generateVerificationCode(name, score, time) {
    const salt = "fisica_lab_3_secret_2026";
    const str = `${name.trim().toLowerCase()}-${score}-${time}-${salt}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
}

// Alternar caja de compartir
function toggleShareBox() {
    const box = document.getElementById('share-box-container');
    box.classList.toggle('hidden');
}

// Generar tarjeta
function generateShareCard() {
    const nameInput = document.getElementById('share-name-input');
    const name = nameInput.value.trim();
    if (!name) {
        alert('Por favor, introduce tu nombre antes de generar la tarjeta.');
        return;
    }
    
    // Contar aciertos del examen finalizado
    let correct = 0;
    state.questions.forEach((q, idx) => {
        if (state.userAnswers[idx] === q.correct_index) {
            correct++;
        }
    });
    
    const time = state.examTimeElapsed;
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    
    const code = generateVerificationCode(name, correct, time);
    
    const text = `🏆 QUIZ EXAMEN LAB III - RESULTADO 🏆\n👤 Estudiante: ${name}\n✅ Respuestas correctas: ${correct} de ${state.questions.length}\n⏱️ Tiempo empleado: ${mins}m ${secs}s (${time} segundos)\n🔑 Código de verificación: ${code}`;
    
    document.getElementById('share-card-text').value = text;
    
    // Agregar también al leaderboard local de este ordenador
    saveToLeaderboard(name, correct, time);
}

// Copiar tarjeta
function copyShareCard() {
    const textEl = document.getElementById('share-card-text');
    if (!textEl.value) {
        alert('Genera primero la tarjeta antes de copiarla.');
        return;
    }
    
    textEl.select();
    textEl.setSelectionRange(0, 99999); // Para móviles
    
    try {
        navigator.clipboard.writeText(textEl.value);
        alert('¡Tarjeta de puntuación copiada al portapapeles! Envíala a tus amigos por WhatsApp.');
    } catch (err) {
        // Fallback
        document.execCommand('copy');
        alert('¡Tarjeta de puntuación copiada al portapapeles!');
    }
}

// Parsear y verificar tarjeta pegada
function parseShareCard(text) {
    const nameMatch = text.match(/👤 Estudiante:\s*([^\r\n]+)/);
    const scoreMatch = text.match(/✅ Respuestas correctas:\s*(\d+)\s*de\s*\d+/);
    const timeMatch = text.match(/⏱️ Tiempo empleado:\s*.*\((\d+)\s*segundos\)/);
    const codeMatch = text.match(/🔑 Código de verificación:\s*([a-f0-9]+)/i);
    
    if (!nameMatch || !scoreMatch || !timeMatch || !codeMatch) {
        return { error: "Formato de tarjeta no válido. Asegúrate de copiar el mensaje completo." };
    }
    
    const name = nameMatch[1].trim();
    const score = parseInt(scoreMatch[1], 10);
    const time = parseInt(timeMatch[1], 10);
    const code = codeMatch[1].trim();
    
    const computedCode = generateVerificationCode(name, score, time);
    if (code !== computedCode) {
        return { error: "¡Alerta de seguridad! El código de verificación no coincide. La puntuación ha sido modificada." };
    }
    
    return { name, score, time };
}

// Guardar en el ranking local
function saveToLeaderboard(name, score, time) {
    let leaderboard = getLeaderboard();
    const code = generateVerificationCode(name, score, time);
    
    // Evitar duplicados idénticos en el mismo intento
    const exists = leaderboard.some(entry => entry.name.toLowerCase() === name.toLowerCase() && entry.score === score && entry.time === time);
    if (exists) return;
    
    // Si ya existe el mismo usuario con menor puntuación, o mayor tiempo, lo actualizamos o dejamos el mejor
    const userIndex = leaderboard.findIndex(entry => entry.name.toLowerCase() === name.toLowerCase());
    if (userIndex !== -1) {
        const oldEntry = leaderboard[userIndex];
        // Conservar el mejor intento (más aciertos, o igual aciertos pero menor tiempo)
        if (score > oldEntry.score || (score === oldEntry.score && time < oldEntry.time)) {
            leaderboard[userIndex] = { name, score, time, code };
        }
    } else {
        leaderboard.push({ name, score, time, code });
    }
    
    localStorage.setItem(getLeaderboardKey(), JSON.stringify(leaderboard));
    renderLeaderboard();
    
    // Si está conectado a una sala, sincronizar y subir a la nube
    if (state.roomName) {
        syncOnlineLeaderboard(false);
    }
}

function getLeaderboard() {
    const raw = localStorage.getItem(getLeaderboardKey());
    if (!raw) return [];
    try {
        return JSON.parse(raw);
    } catch(e) {
        return [];
    }
}

// Añadir resultado de amigo pegado
function addFriendScore() {
    const pasteArea = document.getElementById('leaderboard-paste-area');
    const text = pasteArea.value.trim();
    if (!text) {
        alert('Por favor, pega el mensaje de resultado de tu amigo.');
        return;
    }
    
    const result = parseShareCard(text);
    if (result.error) {
        alert(result.error);
        return;
    }
    
    saveToLeaderboard(result.name, result.score, result.time);
    pasteArea.value = '';
    alert(`¡Resultado de ${result.name} verificado y añadido al ranking!`);
}

// Eliminar entrada del ranking
function deleteLeaderboardEntry(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este resultado de la clasificación?')) {
        let leaderboard = getLeaderboard();
        // Ordenar antes de borrar para borrar el índice correcto
        leaderboard.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.time - b.time;
        });
        
        leaderboard.splice(index, 1);
        localStorage.setItem(getLeaderboardKey(), JSON.stringify(leaderboard));
        renderLeaderboard();
    }
}

// Renderizar la tabla de clasificación
function renderLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody');
    tbody.innerHTML = '';
    
    let leaderboard = getLeaderboard();
    
    // Ordenar: 1º por aciertos (descendente), 2º por tiempo (ascendente)
    leaderboard.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.time - b.time;
    });
    
    leaderboard.forEach((entry, idx) => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid var(--card-border)';
        if (idx === 0) {
            tr.style.background = 'rgba(245, 158, 11, 0.05)'; // Color oro para el 1º
        }
        
        const rankTd = document.createElement('td');
        rankTd.style.padding = '0.75rem 0.5rem; font-weight: 700;';
        let medal = idx + 1;
        if (idx === 0) medal = '🥇';
        else if (idx === 1) medal = '🥈';
        else if (idx === 2) medal = '🥉';
        rankTd.innerHTML = medal;
        
        const nameTd = document.createElement('td');
        nameTd.style.padding = '0.75rem 0.5rem;';
        nameTd.textContent = entry.name;
        if (idx === 0) nameTd.style.color = 'var(--color-orange)';
        
        const scoreTd = document.createElement('td');
        scoreTd.style.padding = '0.75rem 0.5rem; text-align: center; font-weight: bold;';
        scoreTd.textContent = `${entry.score} / ${QUIZ_DATABASE.length}`;
        
        const timeTd = document.createElement('td');
        timeTd.style.padding = '0.75rem 0.5rem; text-align: center;';
        timeTd.textContent = formatTime(entry.time);
        
        const actionTd = document.createElement('td');
        actionTd.style.padding = '0.75rem 0.5rem; text-align: center;';
        actionTd.innerHTML = `<button class="btn secondary-btn" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; border-radius: 4px;" onclick="deleteLeaderboardEntry(${idx})">Eliminar</button>`;
        
        tr.appendChild(rankTd);
        tr.appendChild(nameTd);
        tr.appendChild(scoreTd);
        tr.appendChild(timeTd);
        tr.appendChild(actionTd);
        
        tbody.appendChild(tr);
    });
    
    if (leaderboard.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 5;
        td.style.padding = '2rem; text-align: center; color: var(--text-secondary); font-style: italic;';
        td.textContent = 'No hay resultados registrados en la clasificación.';
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

// --- FUNCIONALIDAD DE SALA ONLINE (SINCRONIZACIÓN AUTOMÁTICA) ---
const ONLINE_APP_KEY = "gfhy4gqr";

function initRoomConnection() {
    const savedRoom = localStorage.getItem('lab_physics_room_name');
    const savedUser = localStorage.getItem('lab_physics_user_name');
    if (savedRoom && savedUser) {
        state.roomName = savedRoom;
        state.userName = savedUser;
        const inputEl = document.getElementById('room-name-input');
        if (inputEl) inputEl.value = savedRoom;
        const userEl = document.getElementById('user-name-input');
        if (userEl) userEl.value = savedUser;
        updateRoomUIConnected(savedRoom, savedUser);
        syncOnlineLeaderboard(false);
        startRoomPolling();
    } else {
        updateRoomUIDisconnected();
    }
}

function connectRoom() {
    const userInput = document.getElementById('user-name-input');
    const roomInput = document.getElementById('room-name-input');
    const user = userInput ? userInput.value.trim() : '';
    const room = roomInput ? roomInput.value.trim() : '';
    
    if (!user) {
        alert('Por favor, escribe tu nombre o alias.');
        return;
    }
    if (!room) {
        alert('Por favor, escribe un nombre de sala.');
        return;
    }
    
    // Limpiar nombre: solo caracteres alfanuméricos, guiones y barras bajas
    const cleanRoomName = room.toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (!cleanRoomName) {
        alert('El nombre de la sala no es válido. Usa letras, números, guiones y barras bajas.');
        return;
    }
    
    state.roomName = cleanRoomName;
    state.userName = user;
    localStorage.setItem('lab_physics_room_name', cleanRoomName);
    localStorage.setItem('lab_physics_user_name', user);
    
    updateRoomUIConnected(cleanRoomName, user);
    syncOnlineLeaderboard(true);
    startRoomPolling();
}

function disconnectRoom() {
    stopRoomPolling();
    state.roomName = '';
    state.userName = '';
    localStorage.removeItem('lab_physics_room_name');
    localStorage.removeItem('lab_physics_user_name');
    
    const inputEl = document.getElementById('room-name-input');
    if (inputEl) inputEl.value = '';
    const userEl = document.getElementById('user-name-input');
    if (userEl) userEl.value = '';
    
    updateRoomUIDisconnected();
    renderLeaderboard();
}

function syncOnlineLeaderboard(isManual = false) {
    if (!state.roomName || state.isSyncing) return;
    
    state.isSyncing = true;
    const indicator = document.getElementById('room-status-indicator');
    const syncBtn = document.getElementById('btn-sync-room');
    const syncIcon = syncBtn ? syncBtn.querySelector('.sync-icon') : null;
    
    // Estado de UI de Sincronizando
    if (indicator) {
        indicator.className = 'room-status syncing';
        indicator.querySelector('.status-text').textContent = 'Sincronizando ranking...';
    }
    if (syncIcon) {
        syncIcon.classList.add('rotating');
    }
    
    let cleanRoomName = state.roomName.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (state.pool === 'extra') {
        cleanRoomName += '-extra';
    }
    
    fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/${ONLINE_APP_KEY}/${cleanRoomName}?cb=${Date.now()}`)
        .then(res => res.json())
        .then(rawVal => {
            let serverList = [];
            if (rawVal && rawVal !== '""' && rawVal !== 'null') {
                try {
                    // Limpiar comillas extras devueltas por el serializador JSON de immanuel.co
                    const cleanedRaw = rawVal.trim().replace(/^"|"$/g, '');
                    if (cleanedRaw) {
                        // Reconstruir caracteres seguros Base64
                        let b64Str = cleanedRaw.replace(/-/g, '+').replace(/_/g, '/');
                        const pad = 4 - (b64Str.length % 4);
                        if (pad < 4) b64Str += '='.repeat(pad);
                        
                        // Decodificar Base64 (compatible con UTF-8)
                        const jsonStr = decodeURIComponent(escape(atob(b64Str)));
                        const parsed = JSON.parse(jsonStr);
                        if (Array.isArray(parsed)) {
                            // Validar firma de cada registro del servidor para descartar trampas
                            serverList = parsed.filter(entry => {
                                if (!entry.name || typeof entry.score !== 'number' || typeof entry.time !== 'number') {
                                    return false;
                                }
                                const expectedCode = generateVerificationCode(entry.name, entry.score, entry.time);
                                return entry.code === expectedCode;
                            });
                        }
                    }
                } catch (e) {
                    console.error("Error al procesar ranking de la sala:", e);
                }
            }
            
            // Unir con puntuaciones guardadas localmente
            let localLeaderboard = getLeaderboard();
            let mergedMap = new Map();
            
            // Insertar datos del servidor
            serverList.forEach(entry => {
                const key = entry.name.toLowerCase();
                mergedMap.set(key, entry);
            });
            
            // Insertar datos locales
            localLeaderboard.forEach(entry => {
                const key = entry.name.toLowerCase();
                const expectedCode = generateVerificationCode(entry.name, entry.score, entry.time);
                if (!entry.code) {
                    entry.code = expectedCode;
                }
                
                // Solo si la firma local es válida
                if (entry.code === expectedCode) {
                    if (mergedMap.has(key)) {
                        const serverEntry = mergedMap.get(key);
                        // Conservar el mejor intento (puntuación desc, luego tiempo asc)
                        if (entry.score > serverEntry.score || (entry.score === serverEntry.score && entry.time < serverEntry.time)) {
                            mergedMap.set(key, entry);
                        }
                    } else {
                        mergedMap.set(key, entry);
                    }
                }
            });
            
            const mergedList = Array.from(mergedMap.values());
            
            // Guardar localmente el ranking consolidado
            localStorage.setItem(getLeaderboardKey(), JSON.stringify(mergedList));
            
            // Comprobar si hay nuevos datos locales que subir al servidor
            let hasNewData = false;
            mergedList.forEach(mergedEntry => {
                const serverEntry = serverList.find(s => s.name.toLowerCase() === mergedEntry.name.toLowerCase());
                if (!serverEntry || serverEntry.score !== mergedEntry.score || serverEntry.time !== mergedEntry.time) {
                    hasNewData = true;
                }
            });
            
            if (hasNewData && mergedList.length > 0) {
                // Codificar array a UTF-8 y luego Base64
                const jsonStr = JSON.stringify(mergedList);
                let b64Str = btoa(unescape(encodeURIComponent(jsonStr)));
                // URL-Safe Base64 y remover '=' de padding
                let safeB64Str = b64Str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
                
                return fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue?appKey=${ONLINE_APP_KEY}&key=${cleanRoomName}&value=${safeB64Str}`, {
                    method: 'POST'
                })
                .then(() => {
                    console.log("Ranking de la sala actualizado en la nube.");
                    finishSync(true);
                });
            } else {
                console.log("Sincronización finalizada. Sin datos locales que subir.");
                finishSync(true);
            }
        })
        .catch(err => {
            console.error("Fallo al sincronizar ranking online:", err);
            finishSync(false);
            if (isManual) {
                alert("No se ha podido sincronizar con la sala. Revisa tu conexión de red.");
            }
        });
        
    function finishSync(success) {
        state.isSyncing = false;
        if (syncIcon) syncIcon.classList.remove('rotating');
        
        if (indicator) {
            if (success) {
                indicator.className = 'room-status connected';
                indicator.querySelector('.status-text').textContent = `Conectado como ${state.userName} en la sala: ${state.roomName}`;
            } else {
                indicator.className = 'room-status disconnected';
                indicator.querySelector('.status-text').textContent = `Error al sincronizar sala: ${state.roomName}`;
            }
        }
        renderLeaderboard();
    }
}

function startRoomPolling() {
    stopRoomPolling();
    // Consultar cada 20 segundos de forma pasiva si la tabla es visible en pantalla
    state.roomSyncInterval = setInterval(() => {
        const lbCard = document.getElementById('leaderboard-card');
        if (lbCard && !lbCard.classList.contains('hidden')) {
            syncOnlineLeaderboard(false);
        }
    }, 20000);
}

function stopRoomPolling() {
    if (state.roomSyncInterval) {
        clearInterval(state.roomSyncInterval);
        state.roomSyncInterval = null;
    }
}

function updateRoomUIConnected(roomName, userName) {
    const indicator = document.getElementById('room-status-indicator');
    if (indicator) {
        indicator.className = 'room-status connected';
        indicator.querySelector('.status-text').textContent = `Conectado como ${userName} en la sala: ${roomName}`;
    }
    
    const btnConnect = document.getElementById('btn-connect-room');
    if (btnConnect) btnConnect.classList.add('hidden');
    const inputRoom = document.getElementById('room-name-input');
    if (inputRoom) inputRoom.classList.add('hidden');
    const inputUser = document.getElementById('user-name-input');
    if (inputUser) inputUser.classList.add('hidden');
    
    const btnSync = document.getElementById('btn-sync-room');
    if (btnSync) btnSync.classList.remove('hidden');
    const btnDisconnect = document.getElementById('btn-disconnect-room');
    if (btnDisconnect) btnDisconnect.classList.remove('hidden');
}

function updateRoomUIDisconnected() {
    const indicator = document.getElementById('room-status-indicator');
    if (indicator) {
        indicator.className = 'room-status disconnected';
        indicator.querySelector('.status-text').textContent = 'Sin conectar a ninguna sala';
    }
    
    const btnConnect = document.getElementById('btn-connect-room');
    if (btnConnect) btnConnect.classList.remove('hidden');
    const inputRoom = document.getElementById('room-name-input');
    if (inputRoom) inputRoom.classList.remove('hidden');
    const inputUser = document.getElementById('user-name-input');
    if (inputUser) inputUser.classList.remove('hidden');
    
    const btnSync = document.getElementById('btn-sync-room');
    if (btnSync) btnSync.classList.add('hidden');
    const btnDisconnect = document.getElementById('btn-disconnect-room');
    if (btnDisconnect) btnDisconnect.classList.add('hidden');
}

