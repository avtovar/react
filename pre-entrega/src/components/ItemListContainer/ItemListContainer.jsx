import { useEffect, useState } from 'react'
// ↑ useEffect: hook para ejecutar código al montar el componente (el fetch).
//   useState: hook para crear ESTADO dentro del componente funcional.

import ItemList from '../ItemList/ItemList.jsx'
// ↑ Importa el componente "organizador": recibe el array de productos y
//   lo recorre generando un <Item /> por cada uno.

import styles from './ItemListContainer.module.css'
// ↑ CSS Module del contenedor: estilos encapsulados de la sección.

function ItemListContainer() {
  // ↑ Componente "contenedor" o "inteligente": maneja la lógica de
  //   carga de datos con fetch + los tres estados pedidos (cargando,
  //   error, datos). Verifica el Requerimiento #2.1.

  // ---- Los tres estados del ejercicio ----
  const [productos, setProductos] = useState([])
  // ↑ productos -> array con los datos del catálogo. Arranca vacío: [].
  //   setProductos -> función que lo actualiza cuando llegan los datos.

  const [cargando, setCargando] = useState(true)
  // ↑ cargando -> controla si todavía esperamos la respuesta del "servidor".
  //   Arranca en true porque el fetch se dispara recién al montar.

  const [error, setError] = useState(null)
  // ↑ error -> guarda un mensaje si la llamada falla. Arranca en null.

  useEffect(() => {
    // ↑ useEffect ejecuta esta función UNA vez al montar el componente
    //   (el segundo argumento [] lo garantiza).

    // Simulamos una API local: el archivo productos.json vive en public/ y
    // Vite lo sirve como archivo estático en la raíz. Pero el código es
    // IDÉNTICO al de una API externa real (misma fetch, mismos estados).

    fetch('/data/productos.json')
      // ↑ fetch del archivo local de productos (la "API" del ejercicio).
      .then((respuesta) => {
        // ↑ Primero verificamos que el servidor respondió bien (código 2xx).
        if (!respuesta.ok) {
          // ↑ Si NO está ok (404, 500, etc.) lanzamos un error a propósito
          //   para que caiga en el .catch() y se actualice el estado error.
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        return respuesta.json()
        // ↑ Convierte la respuesta en un objeto JavaScript (nuestro array).
      })
      .then((datos) => {
        setProductos(datos)
        // ↑ Guardamos el array de productos en el estado productos.
      })
      .catch((err) => {
        setError(err.message)
        // ↑ Si algo falla (red, JSON inválido, error HTTP) guardamos el mensaje.
      })
      .finally(() => {
        setCargando(false)
        // ↑ Pase lo que pase (éxito o error), ya no estamos cargando.
      })
  }, [])
  // ↑ El array vacío [] como segundo argumento hace que el efecto corra
  //   una sola vez, justo cuando el componente se monta en pantalla.

  // ---- Renderizado condicional (la experiencia de usuario del ejercicio) ----
  if (cargando) {
    // ↑ Mientras cargando sea true, mostramos un mensaje claro al usuario.
    return (
      <p className={styles.mensaje} role="status">
        Cargando productos...
      </p>
    )
  }

  if (error) {
    // ↑ Si la llamada falló, mostramos un error visible (role="alert").
    return (
      <div className={styles.mensajeError} role="alert">
        <strong>No pudimos cargar los productos.</strong>
        <span>{error}</span>
      </div>
    )
  }

  return (
    <section className={styles.seccion} aria-label="Catálogo de productos">
      {/* ↑ <section> semántica para el bloque del catálogo */}
      <h2 className={styles.titulo}>Nuestros productos</h2>
      {/* ↑ Título de la sección que prepara a las tarjetas que siguen */}

      <ItemList productos={productos} />
      {/* ↑ Le pasa la lista completa al "organizador" para que la recorra.
           Flujo del Requerimiento #2: Container -> List -> Item. */}
    </section>
  )
}

export default ItemListContainer
// ↑ Exporta el componente para que App.jsx lo pueda importar.