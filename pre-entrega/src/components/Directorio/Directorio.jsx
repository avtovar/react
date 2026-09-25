import { useEffect, useState } from 'react'
// ↑ useEffect: hook para ejecutar código al montar el componente (la llamada fetch).
//   useState: hook para crear ESTADO dentro del componente.

import TarjetaContacto from '../TarjetaContacto/TarjetaContacto.jsx'
// ↑ Importa la tarjeta "presentacional": se encarga SOLO de la apariencia de una persona.

import styles from './Directorio.module.css'
// ↑ Importa el CSS Module del Directorio (estilos encapsulados de la sección).

function Directorio() {
  // ↑ Este es el componente "inteligente" o contenedor: maneja la lógica
  //   del fetch y los tres estados que pide el ejercicio.

  // ---- Los tres estados pedidos por el enunciado ----
  const [nosotros, setNosotros] = useState([])
  // ↑ nosotros -> array con los datos del equipo. Arranca vacío: [].
  //   setNosotros -> función que lo actualiza cuando llegan los datos.

  const [cargando, setCargando] = useState(true)
  // ↑ cargando -> controla si todavía estamos esperando la respuesta.
  //   Arranca en true porque el fetch se dispara recién al montar.

  const [error, setError] = useState(null)
  // ↑ error -> guarda un mensaje si la llamada falla. Arranca en null (sin error).

  useEffect(() => {
    // ↑ useEffect recibe una función que se ejecuta UNA vez al montar el componente.
    //   Acá se hace la llamada fetch a nuestro archivo JSON local.

    fetch('/data/nosotros.json')
      // ↑ /data/nosotros.json vive dentro de public/ por lo que Vite lo sirve
      //   como un archivo estático en la raíz de la app (sin pasar por build).
      .then((respuesta) => {
        // ↑ Primero verificamos si el servidor respondió bien (código 2xx).
        if (!respuesta.ok) {
          // ↑ Si NO está ok (404, 500, etc.) lanzamos un error a propósito
          //   para que caiga en el .catch() y se actualice el estado error.
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        return respuesta.json()
        // ↑ Convierte la respuesta en un objeto JavaScript (nuestro array).
      })
      .then((datos) => {
        setNosotros(datos)
        // ↑ Guardamos el array de personas en el estado nosotros.
      })
      .catch((err) => {
        setError(err.message)
        // ↑ Si algo falla (red, JSON inválido, error HTTP) guardamos el mensaje.
      })
      .finally(() => {
        setCargando(false)
        // ↑ Pase lo que pase (éxito o error), ya no estamos cargando.
        //   Así el estado cargando queda en false SIEMPRE.
      })
  }, [])
  // ↑ El array vacío [] como segundo argumento hace que el efecto corra
  //   una sola vez, justo cuando el componente se monta en pantalla.

  // ---- Renderizado condicional (la experiencia de usuario del ejercicio) ----
  if (cargando) {
    // ↑ Mientras cargando sea true, mostramos un mensaje claro al usuario.
    return (
      <p className={styles.mensaje} role="status">
        Cargando equipo...
      </p>
    )
  }

  if (error) {
    // ↑ Si la llamada falló y el estado error se actualizó, mostramos
    //   un mensaje de error visible (con role="alert" para accesibilidad).
    return (
      <div className={styles.mensajeError} role="alert">
        <strong>No pudimos cargar el equipo.</strong>
        <span>{error}</span>
      </div>
    )
  }

  return (
    <section className={styles.seccion} id="equipo" aria-label="Creadores del sitio">
      {/* ↑ <section> semántica para el bloque "Nuestro equipo".
           id="equipo" es el destino del enlace "Equipo" del nav. */}
      <h2 className={styles.titulo}>Creadores del sitio</h2>
      {/* ↑ Título de la sección que prepara a las tarjetas que siguen */}

      <div className={styles.grilla}>
        {/* ↑ Contenedor CSS Grid: acomoda las tarjetas en una grilla prolija
             y ordenada (ver Directorio.module.css). */}
        {nosotros.map((persona) => (
          // ↑ .map() recorre el array de personas y devuelve una tarjeta por cada una.
          <TarjetaContacto key={persona.id} {...persona} />
          // ↑ key ÚNICA: React usa el id para identificar cada tarjeta.
          //   {...persona}: el spread operator pasa id, nombre, email, puesto y
          //   foto como props individuales a TarjetaContacto.
        ))}
      </div>
    </section>
  )
}

export default Directorio
// ↑ Exporta el componente para que Layout.jsx lo pueda importar.