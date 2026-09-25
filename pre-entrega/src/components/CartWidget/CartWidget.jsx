import { Link } from 'react-router-dom'
// ↑ Link: enlace interno de React Router. Lleva a la ruta /carrito.

import { useCart } from '../../context/CartContext.jsx'
// ↑ useCart: hook custom del CartContext. Lee la cantidad total de productos
//   para que el contador del carrito se actualice en tiempo real.

import styles from './CartWidget.module.css'
// ↑ CSS Module del CartWidget: estilos encapsulados del ícono.

function CartWidget() {
  // ↑ Componente del ícono del carrito + contador numérico.
  //   Requerimiento #4.3: el NavBar debe mostrar un ícono de carrito con
  //   indicador numérico mostrando la cantidad total de productos.

  const { cantidadTotal } = useCart()
  // ↑ Desestructuramos SOLO la cantidad total del contexto. Como useCart()
  //   lee el estado global del CartProvider, este número siempre está
  //   actualizado: si agregás un producto, el contador sube al instante.

  return (
    <Link
      className={styles.enlaceCarrito}
      to="/carrito"
      aria-label={`Carrito de compras con ${cantidadTotal} productos`}
      // ↑ aria-label accesible: un lector de pantalla anuncia la cantidad.
    >
      <svg
        className={styles.icono}
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
      >
        {/* ↑ Ícono del carrito (SVG inline) */}
        <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7.2 14h9.6L19 4H5.8L7.2 14z" />
      </svg>

      <span className={styles.texto}>Carrito</span>

      {cantidadTotal > 0 ? (
        // ↑ Solo mostramos el "badge" con el número si hay al menos 1 producto.
        <span className={styles.contador}>
          {cantidadTotal}
          {/* ↑ Cantidad TOTAL de unidades, calculada en CartProvider
               (suma la cantidad de cada ítem). Se actualiza en tiempo real. */}
        </span>
      ) : null}
    </Link>
  )
}

export default CartWidget
// ↑ Exporta el componente para que NavBar.jsx lo pueda importar.