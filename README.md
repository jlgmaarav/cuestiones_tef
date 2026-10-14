# Cuestiones de Técnicas Experimentales de Física

Aplicación estática para practicar TEF III y Física Nuclear de TEF IV. Abre `index.html` para TEF III o `index.html?course=iv` para TEF IV, preferiblemente mediante un servidor local.

## TEF IV

- **Exámenes anteriores:** 38 cuestiones, de las que 10 conservan el test y la clave de 2021–2022 y 28 son adaptaciones identificadas de desarrollos.
- **Preguntas nuevas:** 30 cuestiones conceptuales elaboradas a partir de P1, P3–P6, la introducción de los guiones y el Tema 5. Siguen el enfoque de los exámenes disponibles: explicar detectores y fenómenos, interpretar resultados y detectar errores de medida. No requieren hacer cuentas. Las cuatro gráficas son esquemas cualitativos con descripciones accesibles y sin escalas numéricas.
- **Examen:** unión de los dos bancos, con preguntas y opciones barajadas. El plazo de TEF IV es de una hora y continúa al recargar o cambiar temporalmente a práctica. Los exámenes anteriores todavía en curso se amplían conservando el tiempo consumido; los ya entregados conservan su resultado. TEF III mantiene sus 30 minutos.
- P2 está excluida: cámara de niebla, espectrometría alfa, frenado de alfas y dispersión de Rutherford. Se mantienen las cuestiones alfa de las prácticas realizadas y la teoría de desintegración nuclear.

El progreso de los dos bloques de práctica y el examen se guarda por separado en este navegador. La revisión conceptual usa sesiones y rankings v6: las versiones anteriores no se importan, para no conservar intentos realizados con las preguntas numéricas retiradas o con opciones descompensadas. Al restaurar una sesión vigente se reconstruyen los enunciados, soluciones y referencias desde el banco actual; el contenido retirado no puede volver desde el almacenamiento.

Los resultados finales se conservan al recargar. TEF III mantiene su banco de 101 cuestiones y sus dos grupos de 53 y 48.

## Verificación

Con Node.js 22 o posterior, sin instalar paquetes:

```sh
node --test tests/quiz.test.cjs
```

Las pruebas cubren recuentos, procedencia, clave oficial, exclusiones, referencias, ausencia de ejercicios numéricos en las nuevas, gráficas cualitativas accesibles, 100 barajados, cambios de bloque y modo, sesiones retiradas, recarga, vencimiento del examen y regresión de TEF III. Se comprueba además que elegir siempre la opción más larga o más corta, por caracteres o palabras, no supera los 7,5/30 aciertos esperados al responder al azar, resolviendo los empates según el orden barajado. La corrección física de los enunciados y la correspondencia documental se revisan además con los originales; una prueba de estructura no sustituye esa revisión.

Para servir la web localmente con Python:

```sh
python -m http.server 5179 --bind 127.0.0.1
```

Abre `http://127.0.0.1:5179/index.html?course=iv`.

Consulta [la auditoría documental](docs/tef-iv-audit.md) para la procedencia individual, las correcciones y las limitaciones de la recopilación. Los PDF docentes originales no se redistribuyen en este repositorio.
