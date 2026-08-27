import { StrictMode } from 'react'
// ↑ StrictMode es un componente de React que en desarrollo detecta errores
import { createRoot } from 'react-dom/client'
// ↑ createRoot conecta React con el DOM real del navegador
import './index.css'
// ↑ importa los estilos globales: los aplica a toda la página
import App from './App.jsx'
// ↑ importa el componente App (export default) para mostrarlo

createRoot(document.getElementById('root')).render(
  // ↑ busca el div con id="root" de index.html y crea la "raíz" de React
  // ↑ .render() dibuja el JSX que le pasamos dentro de ese div
  <StrictMode>
    <App />
  </StrictMode>,
  // ↑ App es el componente principal de la app
)
