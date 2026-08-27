import { StrictMode } from 'react'
// ↑ Herramienta de React que detecta errores/malas prácticas en desarrollo

import { createRoot } from 'react-dom/client'
// ↑ Función que conecta React con el HTML real del navegador

import './index.css'
// ↑ Importa los estilos GLOBALES (paleta de colores + reset). Se aplican a toda la app

import App from './App.jsx'
// ↑ Importa el componente raíz de la aplicación

createRoot(document.getElementById('root')).render(
  // ↑ Busca el <div id="root"> del index.html y lo convierte en la "raíz" de React
  <StrictMode>
    <App />
    {/* ↑ Renderiza el componente App dentro de esa raíz */}
  </StrictMode>,
)