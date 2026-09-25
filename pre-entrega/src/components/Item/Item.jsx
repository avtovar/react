import { Link } from 'react-router-dom'
// ↑ Link: enlace interno del router. Lleva a la vista de detalle del producto
//   (ruta /producto/:id) sin recargar la página (Requerimiento #3.2).

import { useCart } from '../../context/CartContext.jsx'
// ↑ useCart: hook custom del CartContext. Lo usamos para el botón
//   rápido "Agregar" que suma 1 unidad desde la propia tarjeta.

import { formatearPrecio } from '../../utils/formato.js'
// ↑ Función utilitaria: formatea el precio con Intl.NumberFormat es-AR
//   (moneda ARS), igual que en el detalle y el carrito.

import styles from './Item.module.css'
// ↑ CSS Module del Item: estilos encapsulados de la tarjeta.

function Item({ id, nombre, precio, stock, categoria, descripcion, imagen }) {
  // ↑ Desestructuración de props: recibe los datos de UN solo producto.
  //   Este es un componente "presentacional" que además incluye el enlace
  //   a su detalle y un atajo para agregar al carrito (Requerimiento #2.2).

  const { agregarAlCarrito } = useCart()
  // ↑ Obtenemos la función para agregar al carrito desde el contexto global.
  //   Gracias al CartProvider, este botón actualiza el CartWidget al instante.

  const producto = { id, nombre, precio, stock, categoria, descripcion, imagen }
  // ↑ Arma un objeto completo para pasárselo a agregarAlCarrito(producto, 1).

  return (
    // ↓ <article> es la tarjeta del producto (contenedor semántico independiente)
    <article className={styles.tarjeta}>
      <Link className={styles.enlaceImagen} to={`/producto/${id}`}>
        {/* ↑ Toda la imagen es un enlace a la ruta de detalle /producto/:id */}
        <div className={styles.imagenContenedor}>
          {/* ↑ Contenedor con aspect-ratio 1:1 → la foto queda cuadrada */}
          <img
            className={styles.imagen}
            src={imagen}
            alt={nombre}
            loading="lazy"
            /* ↑ alt={nombre}: accessible; loading="lazy": descarga solo
                 cuando la imagen queda visible en pantalla */
          />
        </div>
      </Link>

      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        {/* ↑ h3 muestra el nombre que recibió por props */}
        <p className={styles.categoria}>{categoria}</p>
        {/* ↑ La categoría del producto como secundario */}
        <p className={styles.precio}>{formatearPrecio(precio)}</p>
        {/* ↑ Precio formateado en ARS con la utilidad compartida */}
        <p className={styles.stock}>Stock disponible: {stock}</p>

        <div className={styles.acciones}>
          {/* ↑ Fila que agrupa: ver detalle + agregar al carrito */}
          <Link className={styles.botonDetalle} to={`/producto/${id}`}>
            {/* ↑ Botón principal: navega a la vista de detalle del producto */}
            Ver detalle
          </Link>

          <button
            className={styles.botonAgregar}
            type="button"
            onClick={() => agregarAlCarrito(producto, 1)}
            // ↑ Al hacer clic agregamos 1 unidad de este producto al carrito.
            //   El CartProvider suma cantidad si ya existía y el CartWidget
            //   se actualiza solo.
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item
// ↑ Exporta el componente para que ItemList lo pueda importar.
//   Se crea UNA instancia por cada producto del catálogo (vía .map()).