import { useEffect, useState } from 'react'
// ↑ useEffect: hook para ejecutar el fetch al montar el componente.
//   useState: hook para crear ESTADO dentro del componente.

import { useParams, Link } from 'react-router-dom'
// ↑ useParams: hook de React Router que lee los "parámetros" de la URL
//   (en la ruta /producto/:id, devuelve { id: "lo-que-venga" }).
//   Link: enlace interno para volver al catálogo (Requerimiento #3.1).

import ItemDetail from '../ItemDetail/ItemDetail.jsx'
// ↑ ItemDetail: el componente "presentacional" que muestra el detalle
//   del producto ya cargado (imagen grande, precio, descripción, cantidad).

import styles from './ItemDetailContainer.module.css'
// ↑ CSS Module del contenedor: estilos encapsulados de esta vista.

function ItemDetailContainer() {
  // ↑ Componente "contenedor": busca el producto según el id de la URL,
  //   con los estados carga/error/datos (igual patrón que el catálogo).

  const { id } = useParams()
  // ↑ useParams() lee la URL y extrae el valor de :id. Ejemplo: para la ruta
  //   /producto/monitor-curvo-27, id = "monitor-curvo-27".

  const [producto, setProducto] = useState(null)
  // ↑ producto -> el objeto encontrado (o null mientras carga).
  const [cargando, setCargando] = useState(true)
  // ↑ cargando -> true hasta que termina el fetch.
  const [error, setError] = useState(null)
  // ↑ error -> mensaje si falla la carga.

  useEffect(() => {
    // ↑ Este efecto corre cada vez que CAMBIA el id (porque id está en el
    //   array de dependencias [id]). Así, si navegamos de un producto a
    //   otro, el detalle se vuelve a cargar con el nuevo id.

    fetch('/data/productos.json')
      // ↑ Misma "API" local que el catálogo: cargamos todos los productos.
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`)
        }
        return respuesta.json()
      })
      .then((datos) => {
        const encontrado = datos.find((prod) => String(prod.id) === String(id))
        // ↑ Buscamos el producto cuyo id coincida con el parámetro de la URL.
        //   String() en ambos lados: el id de la URL SIEMPRE es texto,
        //   así que comparamos como strings por las dudas.
        if (!encontrado) {
          // ↑ Si no existe ningún producto con ese id, guardamos un error claro.
          setError(`No encontramos el producto con id "${id}".`)
          return
        }
        setProducto(encontrado)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [id])
  // ↑ [id] como dependencia: si el usuario navega a otro /producto/xxx,
  //   el useEffect se vuelve a ejecutar con el nuevo id.

  // ---- Renderizado condicional ----
  if (cargando) {
    /* ↑ Mientras carga, mostramos un mensaje con role="status" */
    return (
      <p className={styles.mensaje} role="status">
        Cargando producto...
      </p>
    )
  }

  if (error) {
    /* ↑ Si hubo error, mostramos el mensaje y un enlace para volver */
    return (
      <div className={styles.mensajeError} role="alert">
        <strong>No pudimos cargar el producto.</strong>
        <span>{error}</span>
        <Link className={styles.enlaceVolver} to="/productos">
          ← Volver al catálogo
        </Link>
      </div>
    )
  }

  if (producto) {
    /* ↑ Si encontramos el producto, se lo pasamos al presentacional */
    return <ItemDetail producto={producto} />
  }

  return null
  // ↑ Fallback de seguridad (no debería llegar acá).
}

export default ItemDetailContainer
// ↑ Exporta el componente para que App.jsx lo pueda importar.