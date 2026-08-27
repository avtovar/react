import styles from './TarjetaProducto.module.css'
// ↑ Importa el CSS Module. Los estilos de este archivo quedan "encapsulados":
//   React genera nombres de clase únicos para que NO choquen con otros componentes.
//   Por eso acá usamos styles.tarjeta, styles.nombre, etc.

function TarjetaProducto({ imagen, nombre, precio }) {
  // ↑ Desestructuración de props: el componente recibe 3 datos del padre
  //   (equivale a: function TarjetaProducto(props) { ... props.imagen ... })

  const precioFormateado = new Intl.NumberFormat('es-AR', {
    // ↑ Intl.NumberFormat formatea el número según una región (Argentina)
    style: 'currency', //    lo muestra como moneda: "$149.999"
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(precio)

  return (
    // ↓ <article> es la tarjeta del producto (contenedor semántico independiente)
    <article className={styles.tarjeta}>
      <div className={styles.imagenContenedor}>
        {/* ↑ Contenedor con aspect-ratio 1:1 → la foto queda perfectamente cuadrada */}
        <img
          className={styles.imagen}
          src={imagen}
          alt={nombre}
          loading="lazy"
          /* ↑ alt={nombre}: si la imagen no carga, se muestra el nombre del producto.
             loading="lazy": solo descarga la imagen cuando queda visible en pantalla */
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        {/* ↑ h3 muestra el nombre que recibió por props */}
        <p className={styles.precio}>{precioFormateado}</p>
        {/* ↑ p muestra el precio ya formateado */}
        <button className={styles.boton} type="button">
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default TarjetaProducto
// ↑ Exporta el componente para que App.jsx lo pueda importar y reutilizar
//   (6 veces, una por cada producto del catálogo).