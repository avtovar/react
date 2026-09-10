import { useState } from 'react'
// ↑ Hook de React para crear ESTADO dentro de un componente funcional

import styles from './Item.module.css'
// ↑ Importa el CSS Module del Item (estilos encapsulados de la tarjeta)

function Item({ nombre, precio, stock, imagen }) {
  // ↑ Desestructuración de props: recibe los datos de UN solo producto.
  //   El `id` sí llega con {...prod} pero no se necesita acá: se usa
  //   únicamente como `key` en ItemList.jsx.
  //   Este es el componente "presentacional" o "dumb": se encarga de la apariencia.

  const [esFavorito, setEsFavorito] = useState(false)
  // ↑ useState declara una variable de estado:
  //   - esFavorito   -> el VALOR actual (arranca en false)
  //   - setEsFavorito-> la FUNCIÓN que lo cambia
  //   Cada <Item /> tiene SU PROPIO estado: por eso cada producto
  //   maneja su favorito de forma independiente (requisito clave del ejercicio).

  const marcarComoFavorito = () => {
    // ↑ Función que alterna ("toggle") el valor del booleano.
    //   La escribimos con el patrón callback: setEsFavorito(prev => !prev)
    //   para que, pase lo que pase, invierta el valor anterior:
    //   si estaba true pasa a false y viceversa.
    setEsFavorito((prev) => !prev)
  }

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
             loading="lazy": solo descarga la imagen cuando queda visible */
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        {/* ↑ h3 muestra el nombre que recibió por props */}
        <p className={styles.precio}>{precioFormateado}</p>
        {/* ↑ p muestra el precio ya formateado */}
        <p className={styles.stock}>Stock disponible: {stock}</p>

        <div className={styles.acciones}>
          {/* ↑ Fila que agrupa el botón y la estrella de favoritos */}
          <button className={styles.boton} type="button">
            Añadir producto
          </button>

          <button
            className={styles.botonFavorito}
            type="button"
            onClick={marcarComoFavorito}
            aria-pressed={esFavorito}
            aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {/* ↑ onClick={marcarComoFavorito}: al hacer clic, React llama a la función.
                 aria-pressed expone el estado a lectores de pantalla (accesibilidad). */}
            <svg
              className={esFavorito ? styles.estrellaActiva : styles.estrella}
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              {/* ↑ La estrella cambia de estilo según esFavorito.
                   Si es true usa estrellaActiva (rellena/dorada),
                   si es false usa estrella (vacía). "Otro clic y vuelve a su estado original!" */}
              <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.5 6.1 20.7l1.3-6.6-4.9-4.6 6.6-.8z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item
// ↑ Exporta el componente para que ItemList lo pueda importar.
//   Se crea UNA instancia por cada producto del catálogo (vía .map()).
