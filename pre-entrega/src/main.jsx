import { StrictMode } from 'react'
// ↑ StrictMode: herramienta de desarrollo que detecta problemas de React
//   (ejecuta los efectos dos veces en desarrollo para encontrarlos).

import { createRoot } from 'react-dom/client'
// ↑ createRoot: función de React 19 que monta la app en el DOM moderno.

import { BrowserRouter } from 'react-router-dom'
// ↑ BrowserRouter: el router de react-router-dom. Escucha la URL del navegador
//   (modo History API) y decide qué ruta de <Routes> mostrar en App.jsx.
//   Verifica el Requerimiento #3: la app DEBE envolverse en BrowserRouter.

import { CartProvider } from './context/CartProvider.jsx'
// ↑ CartProvider (Requerimiento #4): el componente de Context que guarda el
//   estado global del carrito. Envuelve toda la app para que cualquier
//   componente pueda usar el hook useCart().

import './index.css'
// ↑ Estilos GLOBALES de la app (paleta TechNova, variables CSS, reset).

import App from './App.jsx'
// ↑ App: el componente raíz que define las rutas de la aplicación.

createRoot(document.getElementById('root')).render(
  // ↑ Tomamos el <div id="root"> del index.html y montamos la app ahí.
  <StrictMode>
    {/* ↑ En dev ejecuta efectos dos veces para detectar errores; en build no. */}
    <BrowserRouter>
      {/* ↑ 1) El router "escucha" la URL: requisito obligatorio del enunciado. */}
      <CartProvider>
        {/* ↑ 2) El proveedor del carrito está DENTRO del router, así puede
             usar Link/NavLink internamente si hiciera falta. */}
        <App />
        {/* ↑ 3) La app con todas las rutas. */}
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)