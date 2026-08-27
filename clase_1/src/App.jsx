import { useState } from 'react'
// ↑ hook de React para crear estado dentro de un componente funcional
import reactLogo from './assets/react.svg'
// ↑ importa la imagen como módulo: Vite devuelve la URL para usarla en src
import viteLogo from './assets/vite.svg'
// ↑ lo mismo para el logo de Vite
import heroImg from './assets/hero.png'
// ↑ y para la imagen de fondo del hero
import './App.css'
// ↑ importa los estilos de este componente (layout del App)

function App() {
  // ↑ un componente de React es una función que devuelve JSX
  const [count, setCount] = useState(0)
  // ↑ desestructuración: count (valor actual) y setCount (función para cambiarlo)
  // ↑ se lee "count vale 0 y, cuando llamemos a setCount, React vuelve a dibujar"

  return (
    // ↑ JSX: parece HTML pero es JavaScript; los {} inyectan valores
    <>
      {/* ↑ fragment: agrupa varios elementos sin agregar una etiqueta extra */}
      <section id="center">
        <div className="hero">
          {/* ↑ className es la forma de React de poner la clase CSS */}
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          {/* ↑ src={} inyecta la URL de la imagen importada */}
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        {/* ↑ un clic llama a setCount: recibe el valor anterior y devuelve count + 1 */}
        {/* ↑ React actualiza el estado y vuelve a dibujar el botón */}
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
          {/* ↑ muestra el valor actual del estado */}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {/* ↑ sección de los enlaces de la comunidad de Vite */}
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
// ↑ exporta el componente para que main.jsx pueda importarlo y montarlo
