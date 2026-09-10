import Layout from './components/Layout/Layout.jsx'
// ↑ Importa el componente Layout (Header + contenido + Footer)

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
// ↑ Importa el "Cerebro": el contenedor que tiene los datos del catálogo

import NewProductContainer from './components/NewProductContainer/NewProductContainer.jsx'
// ↑ Importa el "Contenedor inteligente" del formulario de carga de producto:
//   maneja los estados (datosForm, imagenFile y loading) y sube la imagen a Imgbb.

import './App.css'
// ↑ Importa los estilos globales de la sección (hero y clase .item-list)

function App() {
  return (
    // ↓ <Layout> es el "esqueleto" de la página: Header + contenido + Footer.
    //   En el footer, el Layout incluye el <Directorio /> con nuestro equipo
    //   (los creadores del sitio), cargado desde /data/nosotros.json.
    <Layout>
      <section className="hero" id="inicio">
        {/* ↑ id="inicio" es el destino del enlace "Inicio" del nav */}
        <h1 className="hero__titulo">Tecnología que marca la diferencia</h1>
        <p className="hero__descripcion">
          Elegí tus favoritos: cada producto tiene su propia estrella.
          Cargá tus propios productos con el formulario de la clase 6, con
          indicador de carga incluido.
        </p>
      </section>

      <section id="productos">
        {/* ↑ id="productos" es el destino del enlace "Productos" del nav */}
        <ItemListContainer mensaje="Nuestros productos destacados" />
        {/* ↑ Le pasamos al contenedor un "mensaje" (prop) para el subtítulo.
             A partir de acá el flujo es: Container -> List -> Item */}
      </section>

      <NewProductContainer />
      {/* ↑ ¡Aquí está el formulario de la clase 6!
           Al enviarlo: setLoading(true) → sube la imagen a Imgbb →
           setLoading(false) en el finally. El botón muestra el progreso. */}
    </Layout>
  )
}

export default App
// ↑ Exporta el componente para que main.jsx lo pueda importar
