export function setupCounter(element) {
  // ↑ la palabra export permite usarla desde otro archivo (main.js)
  // ↑ recibe el elemento del DOM (el botón) por parámetro
  let counter = 0
  // ↑ variable local que guarda cuántos clics lleva (el "estado" del contador)
  const setCounter = (count) => {
    // ↑ función flecha que actualiza el valor y vuelve a pintar el texto
    counter = count
    element.innerHTML = `Count is ${counter}`
    // ↑ reescribe el texto del botón con el número actual
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  // ↑ cada click suma 1 al contador y lo muestra
  setCounter(0)
  // ↑ al inicio muestra "Count is 0"
}
