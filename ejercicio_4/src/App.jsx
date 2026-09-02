import Layout from './components/Layout/Layout.jsx'
// ↑ Importa el componente Layout (Header + contenido + Footer)

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
// ↑ Importa el "Cerebro": el contenedor que tiene los datos del catálogo

import './App.css'
// ↑ Importa los estilos globales de la sección (hero y clase .item-list)

function App() {
  return (
    // ↓ <Layout> es el "esqueleto" de la página: Header + contenido + Footer.
    //   Todo lo que escribimos adentro viaja al Layout como {children}.
    <Layout>
      <section className="hero" id="inicio">
        {/* ↑ id="inicio" es el destino del enlace "Inicio" del nav */}
        <h1 className="hero__titulo">Tecnología que marca la diferencia</h1>
        <p className="hero__descripcion">
          Elegí tus favoritos: cada producto tiene su propia estrella.
          Hacé clic para marcarlo o desmarcarlo con useState.
        </p>
      </section>

      <section id="productos">
        {/* ↑ id="productos" es el destino del enlace "Productos" del nav */}
        <ItemListContainer mensaje="Nuestros productos destacados" />
        {/* ↑ Le pasamos al contenedor un "mensaje" (prop) para el subtítulo.
             A partir de acá el flujo es: Container -> List -> Item */}
      </section>
    </Layout>
  )
}

export default App
// ↑ Exporta el componente para que main.jsx lo pueda importar
