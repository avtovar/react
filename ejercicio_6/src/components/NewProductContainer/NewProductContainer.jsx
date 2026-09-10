import { useState } from 'react'
// ↑ useState: hook de React para crear ESTADO dentro de un componente funcional.
//   Este componente es el "Contenedor" (inteligente) del patrón Contenedor/Presentacional:
//   guarda toda la lógica y le pasa datos + funciones al formulario visual por props.

import ProductForm from '../ProductForm/ProductForm.jsx'
// ↑ Importa el componente "Presentacional": SOLO se encarga de mostrar los campos.

import styles from './NewProductContainer.module.css'
// ↑ Importa el CSS Module del contenedor (estilos encapsulados de la sección).

// Clave de API de Imgbb (servicio donde subimos las imágenes del producto).
// Se lee de la variable de entorno VITE_IMGBB_API_KEY. Si no está definida,
// usa el texto de ejemplo "TU-API-KEY". Para obtener tu clave: registrate en
// imgbb.com → "Acerca" → "API" → "GET API-KEY". Creá un archivo .env en la
// raíz con: VITE_IMGBB_API_KEY=tu-clave-aca
const API_KEY = import.meta.env.VITE_IMGBB_API_KEY ?? 'TU-API-KEY'

function NewProductContainer() {
  // ↑ El "cerebro" del formulario: dueño de los estados y de la lógica de envío.

  // ---- 1. Estado con los datos del formulario (formulario controlado) ----
  const [datosForm, setDatosForm] = useState({
    // ↑ cada campo del formulario tiene su valor acá. El input muestra
    //   value={datosForm.campo} y onChange actualiza este objeto.
    nombre: '',
    precio: '',
    stock: '',
  })

  // ---- 2. Estado para guardar el archivo de imagen seleccionado ----
  const [imagenFile, setImagenFile] = useState(null)
  // ↑ arranca en null porque el usuario todavía no eligió ninguna imagen.

  // ---- 3. Estado de carga (¡LO NUEVO DEL EJERCICIO 6!) ----
  const [loading, setLoading] = useState(false)
  // ↑ controla si el proceso de subida está en curso.
  //   Inicializado en FALSE: recién se activa cuando el usuario envía el formulario.

  // ---- Función genérica para actualizar los campos de texto ----
  const handleFormChange = (evento) => {
    // ↑ Se dispara en CADA tecla que escribe el usuario (onChange).
    const { name, value } = evento.target
    // ↑ Desestructura el input: name = cuál campo es, value = qué escribió.

    setDatosForm((previos) => ({
      // ↑ Actualizamos el objeto de forma INMUTABLE (spread operator):
      ...previos,
      // ↑ copiamos todas las propiedades anteriores...
      [name]: value,
      // ↑ ...y SOLO modificamos la que cambió (nombre, precio o stock).
    }))
  }

  // ---- Función para capturar el archivo de imagen ----
  const handleImageChange = (evento) => {
    // ↑ Se dispara cuando el usuario elige un archivo en el input de tipo "file".
    setImagenFile(evento.target.files[0])
    // ↑ evento.target.files es un array con los archivos elegidos.
    //   Como solo permitimos uno, tomamos el primero (índice 0).
  }

  // ---- Función que maneja el ENVÍO del formulario (async) ----
  const handleFormSubmit = async (evento) => {
    // ↑ async porque adentro usamos await para la subida a Imgbb.
    evento.preventDefault()
    // ↑ ¡El paso más importante! Evita que el navegador recargue la página.

    setLoading(true)
    // ↑ REQ 2: la PRIMERA acción del envío es activar el estado de carga.
    //   Así el botón se deshabilita y se muestra "Subiendo imagen..." mientras tanto.

    // Validamos que el usuario haya seleccionado una imagen antes de subirla.
    if (!imagenFile) {
      alert('Por favor, seleccioná una imagen para el producto.')
      setLoading(false)
      // ↑ Como no entramos al flujo de subida, apagamos la carga manualmente
      //   y cortamos la ejecución con return.
      return
    }

    // ---- Lógica para subir la imagen a Imgbb ----
    const formData = new FormData()
    // ↑ Objeto ESPECIAL diseñado para enviar archivos y datos de formulario.
    formData.append('image', imagenFile)
    // ↑ Adjuntamos la imagen con el campo "image" que espera la API de Imgbb.

    try {
      // ↑ Todo lo que puede fallar va dentro del try.
      console.log('Subiendo imagen a Imgbb...')

      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        {
          method: 'POST',
          body: formData,
        },
      )
      // ↑ fetch devuelve una "promesa"; await espera a que Imgbb responda.

      const datosImgbb = await respuestaImgbb.json()
      // ↑ Convertimos la respuesta en un objeto JavaScript.

      if (datosImgbb.success) {
        // ↑ Si Imgbb respondió con success:true, tenemos la URL de la imagen.
        console.log('Imagen subida con éxito. URL:', datosImgbb.data.url)

        // Unimos la URL de la imagen con el resto de los datos del formulario.
        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url,
        }

        // Por el momento solo mostramos el producto final en consola.
        // En el futuro esto sería un fetch POST a nuestro propio backend.
        console.log(
          'Enviando los siguientes datos COMPLETOS a la API:',
          productoCompleto,
        )
      } else {
        // Si Imgbb no confirmó el éxito, lanzamos un error a propósito
        // para que caiga en el bloque catch.
        throw new Error('La subida de la imagen a Imgbb falló.')
      }
    } catch (error) {
      // ↑ Si algo salió mal en el try, el error cae acá.
      console.error('Error en el proceso de envío:', error)
      alert('Hubo un error al subir la imagen. Por favor, intentá de nuevo.')
    } finally {
      // ↑ REQ 3: el bloque finally se ejecuta SIEMPRE (éxito o error).
      //   Es LA práctica recomendada para apagar el estado de carga:
      //   nunca queda "trabado" en loading.
      setLoading(false)
    }
  }

  return (
    <section className={styles.seccion} id="nuevo-producto">
      {/* ↑ <section> semántica para el bloque "Cargar producto".
           id="nuevo-producto" es el destino del enlace del nav. */}
      <h2 className={styles.titulo}>Cargar producto</h2>
      <p className={styles.descripcion}>
        Completá los datos y subí una imagen. Mientras se carga, el botón se
        deshabilita para evitar envíos duplicados.
      </p>

      {/* ↓ REQ 4: le pasamos TODOS los datos y funciones al formulario visual,
           incluida la prop loading (el estado de carga del ejercicio). */}
      <ProductForm
        datosForm={datosForm}
        handleFormChange={handleFormChange}
        handleImageChange={handleImageChange}
        handleFormSubmit={handleFormSubmit}
        loading={loading}
      />
    </section>
  )
}

export default NewProductContainer
// ↑ Exporta el componente para que App.jsx lo pueda importar y renderizar.