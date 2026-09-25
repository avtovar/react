import { NavLink } from 'react-router-dom'
// ↑ NavLink: igual que <Link> pero además detecta cuándo su `to` coincide
//   con la URL actual para aplicar un estilo "activo" (ver CSS: .activo).

import CartWidget from '../CartWidget/CartWidget.jsx'
// ↑ CartWidget: el ícono de carrito con el indicador numérico de productos
//   agregados, leído en tiempo real desde el CartContext (Requerimiento #4.3).

import styles from './NavBar.module.css'
// ↑ CSS Module del NavBar: estilos encapsulados de la barra.

function NavBar() {
  // ↑ La navegación principal de la app. Usa NavLink para cada ruta
  //   (Requerimiento #3.2: navegación fluida, sin recargas de página).

  return (
    <nav className={styles.nav} aria-label="Navegación principal">
      {/* ↑ <nav> semántico: barra de navegación de la página */}

      <NavLink
        to="/"
        end
        // ↑ `end` hace que "/" solo esté "activo" cuando la URL es EXACTAMENTE
        //   "/" (y no por ejemplo /productos, que también empieza con "/").
        className={({ isActive }) =>
          isActive ? `${styles.enlace} ${styles.activo}` : styles.enlace
        }
        // ↑ className como función: React Router pasa { isActive } y nosotros
        //   armamos la clase CSS según corresponda (enlace activo o no).
      >
        Inicio
      </NavLink>

      <NavLink
        to="/productos"
        className={({ isActive }) =>
          isActive ? `${styles.enlace} ${styles.activo}` : styles.enlace
        }
      >
        Productos
      </NavLink>

      <CartWidget />
      {/* ↑ El carrito con su contador en tiempo real, también como enlace
           interno (lleva a la ruta /carrito). */}
    </nav>
  )
}

export default NavBar
// ↑ Exporta el componente para que Header.jsx lo pueda importar.