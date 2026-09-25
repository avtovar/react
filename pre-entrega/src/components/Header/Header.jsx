import { Link } from 'react-router-dom'
// ↑ Link: enlace interno de React Router. Navega entre rutas SIN recargar
//   la página (requisito del Requerimiento #3).

import NavBar from '../NavBar/NavBar.jsx'
// ↑ NavBar: la barra de navegación principal con los enlaces a las rutas
//   y el CartWidget. El Header la incluye (Requerimiento #1: Layout contiene
//   un Header con su nav).

import styles from './Header.module.css'
// ↑ CSS Module del Header: estilos encapsulados del encabezado.

function Header() {
  // ↑ Componente del encabezado de la app: el logo de TechNova a la
  //   izquierda y el NavBar a la derecha.

  return (
    // ↓ Header "sticky": queda fijo arriba al hacer scroll (ver CSS).
    <header className={styles.header}>
      <div className={styles.contenido}>
        {/* ↑ Contenedor centrado: logo a la izquierda, nav a la derecha */}
        <Link className={styles.marca} to="/" aria-label="TechNova - Inicio">
          {/* ↑ Hacemos el logo un <Link to="/">: clic → vuelve al inicio. */}
          <svg
            className={styles.marcaLogo}
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
          >
            {/* ↑ SVG inline del rayo: no necesita un archivo de imagen */}
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
          <span className={styles.marcaNombre}>
            Tech<span>Nova</span>
            {/* ↑ El <span> resalta "Nova" con el color del acento */}
          </span>
        </Link>

        <NavBar />
        {/* ↑ La barra de navegación: "Inicio", "Productos" y el CartWidget. */}
      </div>
    </header>
  )
}

export default Header
// ↑ Exporta el componente para que Layout.jsx lo pueda importar.