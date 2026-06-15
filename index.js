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
    "justification": "La fuerza magnética que experimenta el circuito obedece a la ley de Lorentz: \\(\\vec{F} = \\int I d\\vec{l} \\times \\vec{B}\\). Para que el vector resultante \\(\\vec{F}\\) se invierta (\\(-\\vec{F}\\)), el operador de paridad espacial debe romper la simetría del producto vectorial. Si se invierte la corriente en todos los elementos (opción c), se invierte tanto \\(d\\vec{l}\\) como \\(\\vec{B}\\), resultando en \\((-I d\\vec{l}) \\times (-\\vec{B}) = I d\\vec{l} \\times \\vec{B}\\), dejando la fuerza invariante. Por ello, solo debe invertirse una de las fuentes (el circuito impreso o el electroimán)."
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
  }
];









// Estado del Quiz
let state = {
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
    onlyFailedMode: false // si estamos repasando solo fallos
};

// Categorías
function getCategoryName(id) {
    if (id.startsWith('O')) return 'Óptica';
    if (id.startsWith('C')) return 'Física Cuántica';
    if (id.startsWith('E')) return 'Electromagnetismo';
    return 'General';
}

// Inicialización de DOM y Eventos
document.addEventListener('DOMContentLoaded', () => {
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

// Llenado / Reinicio del Quiz
function resetQuiz(onlyFailed = false) {
    // Detener temporizador si existe
    if (state.examTimerInterval) {
        clearInterval(state.examTimerInterval);
        state.examTimerInterval = null;
    }
    
    state.onlyFailedMode = onlyFailed;
    
    if (onlyFailed) {
        // Filtrar preguntas que se fallaron la última vez
        const failedIndices = [];
        state.userAnswers.forEach((ans, idx) => {
            const q = state.questions[idx];
            if (ans !== q.correct_index) {
                failedIndices.push(idx);
            }
        });
        
        if (failedIndices.length === 0) {
            alert('¡No tienes preguntas falladas para repasar!');
            state.onlyFailedMode = false;
            state.questions = [...QUIZ_DATABASE];
        } else {
            state.questions = failedIndices.map(idx => QUIZ_DATABASE[idx]);
        }
    } else {
        state.questions = [...QUIZ_DATABASE];
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
                startExamTimer();
            } else {
                // Si ya fue enviado, mostrar directamente los resultados y el tablón
                document.getElementById('quiz-play-container').classList.add('hidden');
                document.getElementById('exam-results-card').classList.remove('hidden');
                document.getElementById('review-board-card').classList.remove('hidden');
                renderReviewBoard();
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
        'Ele': { correct: 0, total: 0 }
    };
    
    state.questions.forEach((q, idx) => {
        let cat = 'Ele';
        if (q.id.startsWith('O')) cat = 'Ópt';
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
    
    document.getElementById('results-detail-opt').textContent = `${categoryStats['Ópt'].correct} de ${categoryStats['Ópt'].total}`;
    document.getElementById('results-detail-qua').textContent = `${categoryStats['Cuá'].correct} de ${categoryStats['Cuá'].total}`;
    document.getElementById('results-detail-ele').textContent = `${categoryStats['Ele'].correct} de ${categoryStats['Ele'].total}`;
    
    renderReviewBoard();
    document.getElementById('review-board-card').classList.remove('hidden');
    saveStateToLocalStorage();
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
const LOCAL_STORAGE_KEY = 'lab_physics_quiz_state_v1';

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
            // Guardamos los IDs de las preguntas activas para reconstruir state.questions
            activeQuestionIds: state.questions.map(q => q.id)
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
        console.error('Error al guardar el estado en localStorage:', e);
    }
}

function loadStateFromLocalStorage() {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return false;
    
    try {
        const saved = JSON.parse(raw);
        state.mode = saved.mode || 'practice';
        state.onlyFailedMode = saved.onlyFailedMode || false;
        state.examSubmitted = saved.examSubmitted || false;
        state.examTimeElapsed = saved.examTimeElapsed || 0;
        state.currentIndex = saved.currentIndex || 0;
        
        // Reconstruir lista de preguntas activas
        if (saved.activeQuestionIds && saved.activeQuestionIds.length > 0) {
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
