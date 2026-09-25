import Header from '../Header/Header.jsx'
// ↑ Header: el encabezado de la app (logo + barra de navegación + carrito).
//   Cumple con el Requerimiento #1: Layout DEBE contener un Header.

import Footer from '../Footer/Footer.jsx'
// ↑ Footer: el pie de página con información de la empresa y las tarjetas
//   del equipo (Directorio). Requerimiento #1 y #1.3.

import styles from './Layout.module.css'
// ↑ CSS Module del Layout: estilos encapsulados del "esqueleto".

function Layout({ children }) {
  // ↑ Desestructuración de props: { children } es el contenido que App.jsx
  //   coloca entre el Header y el Footer (en este caso, el <Routes> completo).

  return (
    // ↓ .layout es el contenedor flex que ocupa toda la altura de la pantalla
    //   y apila: Header (arriba), main (centro, flex:1) y Footer (abajo).
    <div className={styles.layout}>
      <Header />
      {/* ↑ Header "sticky": queda fijo arriba al hacer scroll. Incluye
           el <NavBar /> con los enlaces de navegación (Requerimiento #3). */}

      <main className={styles.main}>
        {/* ↑ El contenido principal. flex:1 en CSS hace que el footer
             se pegue SIEMPRE al final de la pantalla. */}
        <div className={styles.container}>{children}</div>
        {/* ↑ {children} = el <Routes> de App.jsx: según la URL se muestra
             el hero, el catálogo, el detalle o el carrito. */}
      </main>

      <Footer />
      {/* ↑ Footer con datos de la empresa y el Directorio del equipo. */}
    </div>
  )
}

export default Layout
// ↑ Exporta el componente para que App.jsx lo pueda importar.