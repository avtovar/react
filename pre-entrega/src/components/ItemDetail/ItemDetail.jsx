import { useState } from 'react'
// ↑ useState: hook para crear ESTADO dentro del componente funcional.
//   Acá controlamos la cantidad elegida del selector (1, 2, 3...).

import { Link } from 'react-router-dom'
// ↑ Link: enlaces internos del router (volver al catálogo, ir al carrito).

import { useCart } from '../../context/CartContext.jsx'
// ↑ useCart: hook custom del CartContext. Desde el detalle el usuario debe
//   poder agregar al carrito llamando a agregarAlCarrito (Requerimiento #4.2).

import { formatearPrecio } from '../../utils/formato.js'
// ↑ Función utilitaria de formato de precio en pesos argentinos.

import styles from './ItemDetail.module.css'
// ↑ CSS Module del detalle: estilos encapsulados de esta vista.

function ItemDetail({ producto }) {
  // ↑ Desestructuración de props: recibe EL PRODUCTO COMPLETO desde el
  //   contenedor (que lo buscó por id en la URL con useParams).

  const { agregarAlCarrito } = useCart()
  // ↑ La función del contexto para agregar productos al carrito.

  const [cantidad, setCantidad] = useState(1)
  // ↑ cantidad -> la cantidad elegida en el selector. Arranca en 1.
  //   setCantidad -> la función que la cambia.

  const incrementar = () => {
    // ↑ Sube la cantidad con límite: no se puede superar el stock.
    setCantidad((prev) => (prev < producto.stock ? prev + 1 : prev))
  }

  const decrementar = () => {
    // ↑ Baja la cantidad con piso: nunca menos de 1.
    setCantidad((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const manejarAgregar = () => {
    // ↑ Función que conecta este detalle con el Context del carrito.
    agregarAlCarrito(producto, cantidad)
    // ↑ Agrega `cantidad` unidades del producto actual.
    //   El CartProvider suma si ya existía (topado por el stock).
    //   El CartWidget del nav se actualiza en tiempo real.

    setCantidad(1)
    // ↑ Reseteamos el selector para la próxima compra.
  }

  return (
    // ↓ <article> es la vista de detalle: dos columnas cuando hay espacio.
    <article className={styles.detalle}>
      <div className={styles.imagenContenedor}>
        {/* ↑ La imagen grande del producto */}
        <img className={styles.imagen} src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className={styles.info}>
        <p className={styles.categoria}>{producto.categoria}</p>
        <h1 className={styles.nombre}>{producto.nombre}</h1>
        <p className={styles.precio}>{formatearPrecio(producto.precio)}</p>
        {/* ↑ Precio formateado con Intl.NumberFormat es-AR (Requerimiento
             del enunciado: precios formateados con ARS) */}
        <p className={styles.descripcion}>{producto.descripcion}</p>

        <p className={styles.stock}>Stock disponible: {producto.stock}</p>

        <div className={styles.comprar}>
          {/* ↑ El bloque interactivo: selector de cantidad + botón */}
          <div
            className={styles.selector}
            role="group"
            aria-label="Cantidad de unidades"
          >
            {/* ↑ Selector de cantidad con botones - y + */}
            <button
              className={styles.botonSelector}
              type="button"
              onClick={decrementar}
              aria-label="Disminuir cantidad"
            >
              −
            </button>
            <span className={styles.cantidad} aria-live="polite">
              {cantidad}
            </span>
            <button
              className={styles.botonSelector}
              type="button"
              onClick={incrementar}
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>

          <button
            className={styles.botonAgregar}
            type="button"
            onClick={manejarAgregar}
            // ↑ Al hacer clic → agregarAlCarrito(producto, cantidad)
          >
            Agregar {cantidad > 1 ? `${cantidad} unidades` : 'al carrito'}
          </button>
          {/* ↑ Botón VISIBLE y claro como pide el enunciado. Si hay más de
               1 unidad elegida, el texto lo refleja. */}
        </div>

        <div className={styles.enlaces}>
          <Link className={styles.enlace} to="/productos">
            ← Seguir comprando
          </Link>
          <Link className={styles.enlaceCarrito} to="/carrito">
            Ver mi carrito
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail
// ↑ Exporta el componente para que ItemDetailContainer lo pueda importar.