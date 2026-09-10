import styles from './TarjetaContacto.module.css'
// ↑ Importa el CSS Module de la tarjeta (estilos encapsulados).

function TarjetaContacto({ foto, nombre, puesto, email }) {
  // ↑ Desestructuración de props: recibe los datos de UNA sola persona
  //   (el `id` llega con {...persona} pero se usa únicamente como `key`
  //   en Directorio.jsx, no se necesita acá).
  //   Este es un componente "presentacional" (o dumb): solo se encarga
  //   de la apariencia, no tiene estados ni lógica.

  return (
    // ↓ <article> es la tarjeta de contacto (contenedor semántico independiente)
    <article className={styles.tarjeta}>
      <div className={styles.imagenContenedor}>
        {/* ↑ Contenedor con aspect-ratio 1:1 → la foto queda perfectamente cuadrada */}
        <img
          className={styles.imagen}
          src={foto}
          alt={`Foto de ${nombre}`}
          loading="lazy"
          /* ↑ alt: si la imagen no carga, se muestra una descripción accesible.
             loading="lazy": solo descarga la foto cuando queda visible en pantalla */
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        {/* ↑ h3 muestra el nombre que recibió por props */}
        <p className={styles.puesto}>{puesto}</p>
        {/* ↑ p muestra el puesto/cargo en la empresa */}
        <a className={styles.email} href={`mailto:${email}`}>
          {email}
        </a>
        {/* ↑ Enlace a mailto: al hacer clic se abre el cliente de correo,
             algo natural en una tarjeta de contacto real */}
      </div>
    </article>
  )
}

export default TarjetaContacto
// ↑ Exporta el componente para que Directorio.jsx lo pueda importar.
//   Se crea UNA instancia por cada persona del equipo (vía .map()).