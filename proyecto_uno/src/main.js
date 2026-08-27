import './style.css'
// ↑ importa los estilos globales: hace que Vite los aplique a toda la página
import javascriptLogo from './assets/javascript.svg'
// ↑ importa la imagen como módulo: Vite devuelve la URL lista para usar
import viteLogo from './assets/vite.svg'
// ↑ lo mismo para el logo de Vite
import heroImg from './assets/hero.png'
// ↑ y para la imagen de fondo del hero
import { setupCounter } from './counter.js'
// ↑ importa la función exportada por counter.js (la usamos más abajo)

// document es el navegador: querySelector busca el primer elemento que matchee
// ese selector CSS (el <div id="app"> de index.html). innerHTML le inyecta un
// string de HTML; como va entre backticks (` `) es un "template literal" y puede
// interpolar variables con ${...}.
document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.js</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img class="button-icon" src="${javascriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`
// ↑ la sección #center tiene el logo, título y el botón del contador (inicialmente
// vacío: su texto lo rellena setupCounter()). #next-steps son los enlaces de la
// comunidad. Las etiquetas ${...} inyectan las URLs de las imágenes importadas.

setupCounter(document.querySelector('#counter'))
// ↑ le pasa el botón a setupCounter, que se encarga de su texto y de sumar clics
