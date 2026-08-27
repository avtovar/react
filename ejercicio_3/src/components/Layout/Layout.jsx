import './Layout.css'
// ↑ Importa los estilos del Layout (Header, nav y Footer)

function Layout({ children }) {
  // ↑ Desestructuración de props: { children } es el "contenido" que el
  //   componente padre (App.jsx) envuelve. Layout lo coloca entre el Header y el Footer.

  return (
    // ↓ .layout es el contenedor flex que ocupa toda la altura de la pantalla
    //   y apila Header (arriba), main (centro) y Footer (abajo).
    <div className="layout">
      <header className="header">
        {/* ↑ Header "sticky": queda fijo arriba al hacer scroll (ver Layout.css) */}
        <div className="container header__contenido">
          <a className="marca" href="#inicio" aria-label="TechNova - Inicio">
            {/* ↑ Logo de la marca: un <a> que vuelve al inicio */}
            <svg
              className="marca__logo"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              {/* ↑ SVG inline del rayo: no necesita un archivo de imagen */}
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            <span className="marca__nombre">
              Tech<span>Nova</span>
              {/* ↑ El <span> resalta "Nova" con el color del acento */}
            </span>
          </a>

          <nav className="nav" aria-label="Navegación principal">
            {/* ↑ Barra de navegación con enlaces de ejemplo */}
            <a className="nav__enlace nav__enlace--activo" href="#inicio">
              Inicio
            </a>
            <a className="nav__enlace" href="#productos">
              Productos
            </a>
            <a className="nav__enlace" href="#contacto">
              Contacto
            </a>
            <a className="nav__enlace nav__enlace--carrito" href="#carrito">
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
              >
                {/* ↑ Ícono del carrito (SVG inline) */}
                <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7.2 14h9.6L19 4H5.8L7.2 14z" />
              </svg>
              Carrito
            </a>
          </nav>
        </div>
      </header>

      <main className="main">
        {/* ↑ El contenido principal de la página */}
        <div className="container">{children}</div>
        {/* ↑ {children} = todo lo que App.jsx ponga dentro de <Layout> */}
      </main>

      <footer className="footer">
        {/* ↑ Pie de página: se mantiene abajo porque .main tiene flex: 1 */}
        <div className="container footer__contenido">
          <p className="footer__texto">
            © 2026 TechNova — Todos los derechos reservados
          </p>
          <p className="footer__texto">
            Hecho con React para el ejercicio de TalentoLab
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
// ↑ Exporta el componente para que App.jsx lo pueda importar y reutilizar.