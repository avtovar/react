import Layout from './components/Layout/Layout.jsx'
import TarjetaProducto from './components/TarjetaProducto/TarjetaProducto.jsx'
// ↑ Importa los componentes reutilizables (Layout y TarjetaProducto)

import './App.css'
// ↑ Importa los estilos de la sección (hero, catálogo y grid)

// ---- Array de datos: cada objeto representa un producto del catálogo ----
const productos = [
  // ↑ Guardamos los datos en una constante FUERA del componente App,
  //   así queda separada la "data" del "código de presentación".
  //   La imagen usa picsum.photos (placeholder aleatorio) solo para simular el catálogo.
  {
    id: 1,
    nombre: 'Auriculares Quantum Pro',
    precio: 149999,
    imagen: 'https://picsum.photos/seed/auriculares/400/400',
  },
  {
    id: 2,
    nombre: 'Smartwatch Pulse X',
    precio: 179999,
    imagen: 'https://picsum.photos/seed/smartwatch/400/400',
  },
  {
    id: 3,
    nombre: 'Parlante Bluetooth Boom',
    precio: 89999,
    imagen: 'https://picsum.photos/seed/parlante/400/400',
  },
  {
    id: 4,
    nombre: 'Teclado Mecánico RGB',
    precio: 119999,
    imagen: 'https://picsum.photos/seed/teclado/400/400',
  },
  {
    id: 5,
    nombre: 'Cámara Web 4K Stream',
    precio: 99999,
    imagen: 'https://picsum.photos/seed/camara/400/400',
  },
  {
    id: 6,
    nombre: 'Laptop Nova Ultra 16',
    precio: 1299999,
    imagen: 'https://picsum.photos/seed/laptop/400/400',
  },
]

function App() {
  return (
    // ↓ <Layout> es el "esqueleto" de la página: Header + contenido + Footer.
    //   Todo lo que escribimos adentro viaja al Layout como {children}.
    <Layout>
      <section className="hero" id="inicio">
        {/* ↑ id="inicio" es el destino del enlace "Inicio" del nav */}
        <h1 className="hero__titulo">Tecnología que marca la diferencia</h1>
        <p className="hero__descripcion">
          Descubrí los últimos lanzamientos en gadgets, audio y computación
          para llevar tu día a día al siguiente nivel.
        </p>
      </section>

      <section className="catalogo" id="productos">
        {/* ↑ id="productos" es el destino del enlace "Productos" del nav */}
        <div className="catalogo__encabezado">
          <h2 className="catalogo__titulo">Nuestros productos</h2>
          <p className="catalogo__contador">{productos.length} artículos</p>
          {/* ↑ {productos.length} "inyecta" el valor JS (6) dentro del JSX */}
        </div>

        <div className="grid">
          {/* ↑ Grid: los productos se acomodan en columnas (ver App.css) */}
          {productos.map((producto) => (
            // ↑ .map() recorre el array y devuelve un <TarjetaProducto /> por producto.
            //   Las props (imagen, nombre, precio) viajan del padre al hijo.
            <TarjetaProducto
              key={producto.id}
              // ↑ key ÚNICA: le dice a React cómo identificar cada ítem de la lista
              imagen={producto.imagen}
              nombre={producto.nombre}
              precio={producto.precio}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default App
// ↑ Exporta el componente para que main.jsx lo pueda importar