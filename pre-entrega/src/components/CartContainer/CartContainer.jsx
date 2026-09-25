import { Link } from 'react-router-dom'
// ↑ Link: enlace interno del router (volver a comprar / seguir navegando).

import { useCart } from '../../context/CartContext.jsx'
// ↑ useCart: hook custom del CartContext. La vista /carrito consume la
//   información DIRECTAMENTE del contexto global (Requerimiento #4.4).

import { formatearPrecio } from '../../utils/formato.js'
// ↑ Función utilitaria de formato de precio en ARS.

import styles from './CartContainer.module.css'
// ↑ CSS Module del carrito: estilos encapsulados de esta vista.

function CartContainer() {
  // ↑ Componente de la vista /carrito: lista los productos agregados,
  //   permite quitar uno por uno o vaciar todo, y muestra el total.

  const { carrito, quitarDelCarrito, vaciarCarrito, cantidadTotal, total } =
    useCart()
  // ↑ Todo lo que necesitamos sale del Context: no hay fetch ni estado local.
  //   carrito          -> array de ítems { id, nombre, precio, imagen, cantidad }
  //   quitarDelCarrito -> elimina un ítem por id
  //   vaciarCarrito    -> elimina todos los ítems
  //   cantidadTotal    -> suma de unidades (para el resumen)
  //   total            -> suma en dinero (para el resumen)

  if (carrito.length === 0) {
    // ↑ El carrito está vacío: experiencia de usuario clara + enlace al catálogo.
    return (
      <section className={styles.vacio} aria-label="Carrito vacío">
        <h2 className={styles.titulo}>Tu carrito está vacío</h2>
        <p className={styles.textoVacio}>
          Todavía no agregaste ningún producto. Andá al catálogo y elegí
          tus favoritos de TechNova.
        </p>
        <Link className={styles.botonIr} to="/productos">
          Ir al catálogo
        </Link>
      </section>
    )
  }

  return (
    <section className={styles.seccion} aria-label="Detalle del carrito">
      <h2 className={styles.titulo}>Tu carrito de compras</h2>

      <div className={styles.grilla}>
        {/* ↑ Grilla de 2 columnas: lista de ítems (izq.) + resumen (der.) */}

        <div className={styles.lista}>
          {/* ---- Cada ítem del carrito ---- */}
          {carrito.map((item) => (
            // ↑ .map() recorre el array del contexto y dibuja UNA fila por ítem.
            <article className={styles.item} key={item.id}>
              <Link className={styles.itemImagenEnlace} to={`/producto/${item.id}`}>
                <img
                  className={styles.itemImagen}
                  src={item.imagen}
                  alt={item.nombre}
                />
              </Link>

              <div className={styles.itemInfo}>
                <h3 className={styles.itemNombre}>{item.nombre}</h3>
                <p className={styles.itemPrecio}>
                  {formatearPrecio(item.precio)}
                </p>
                <p className={styles.itemCantidad}>
                  Cantidad: {item.cantidad}
                </p>
                <p className={styles.itemSubtotal}>
                  Subtotal: {formatearPrecio(item.precio * item.cantidad)}
                </p>
              </div>

              <button
                className={styles.botonQuitar}
                type="button"
                onClick={() => quitarDelCarrito(item.id)}
                // ↑ Quita ESTE ítem del carrito (por su id).
                aria-label={`Quitar ${item.nombre} del carrito`}
              >
                Quitar
              </button>
            </article>
          ))}
        </div>

        {/* ---- Resumen del pedido ---- */}
        <aside className={styles.resumen} aria-label="Resumen de la compra">
          <h3 className={styles.resumenTitulo}>Resumen</h3>

          <div className={styles.fila}>
            <span>Productos</span>
            <span>{cantidadTotal}</span>
          </div>

          <div className={styles.filaTotal}>
            <span>Total</span>
            {/* ↑ Total en dinero calculado en el CartProvider:
                 suma de precio × cantidad de cada ítem */}
            <strong>{formatearPrecio(total)}</strong>
          </div>

          <button
            className={styles.botonVaciar}
            type="button"
            onClick={vaciarCarrito}
            // ↑ Vacía TODO el carrito con una sola llamada al contexto.
          >
            Vaciar carrito
          </button>

          <Link className={styles.botonSeguir} to="/productos">
            Seguir comprando
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default CartContainer
// ↑ Exporta el componente para que App.jsx lo pueda importar.