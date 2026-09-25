import { Routes, Route, Link } from 'react-router-dom'
// ↑ Routes: contenedor donde se declaran todas las rutas (una a la vez).
//   Route: define UNA ruta (path + componente que renderiza).
//   Link: enlace "interno" de React Router (navega sin recargar la página).

import Layout from './components/Layout/Layout.jsx'
// ↑ Layout: el "esqueleto" de la página (Header + nav + contenido + Footer).
//   Todos los requerimientos visuales de la app pasan por acá.

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
// ↑ Requerimiento #2: el contenedor que carga los productos desde
//   /data/productos.json usando fetch y useEffect (estados cargando/error/datos).

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
// ↑ Requerimiento #3 y #4: vista de detalle de un producto (ruta /producto/:id).
//   Usa useParams para leer el id de la URL y agregar al carrito.

import CartContainer from './components/CartContainer/CartContainer.jsx'
// ↑ Requerimiento #4: vista del carrito (ruta /carrito). Lee el estado
//   directamente del CartContext con el hook useCart().

import './App.css'
// ↑ Estilos globales de la sección principal (hero de bienvenida, etc.).

function App() {
  // ↑ Componente raíz: su única responsabilidad es DECLARAR LAS RUTAS.
  //   Todo el contenido se renderiza dentro de <Layout>, que aporta
  //   Header, nav y Footer (Requerimiento #1).

  return (
    <Layout>
      {/* ↑ <Routes> es el "semáforo" de React Router: según la URL actual,
           renderiza UN solo elemento (el que coincida con el path). */}
      <Routes>
        <Route
          path="/"
          // ↑ Ruta principal: "/" → vista de bienvenida (Requerimiento #3).
          element={
            <section className="hero">
              {/* ↑ Hero de bienvenida con la identidad visual de TechNova */}
              <h1 className="hero__titulo">Tecnología que marca la diferencia</h1>
              <p className="hero__descripcion">
                En TechNova vas a encontrar los mejores productos tecnológicos
                al mejor precio. Explorá el catálogo, elegí tus favoritos y
                agregalos al carrito: todo sin recargar la página.
              </p>
              <Link className="hero__boton" to="/productos">
                {/* ↑ <Link to="/productos">: navegación fluida hacia el catálogo */}
                Ver catálogo
              </Link>
            </section>
          }
        />

        <Route
          path="/productos"
          // ↑ Ruta del catálogo completo: carga los productos "desde una API".
          element={<ItemListContainer />}
        />

        <Route
          path="/producto/:id"
          // ↑ Ruta DE DETALLE: :id es un parámetro dinámico de la URL.
          //   ItemDetailContainer lo lee con useParams() para buscar el producto.
          element={<ItemDetailContainer />}
        />

        <Route
          path="/carrito"
          // ↑ Ruta del carrito: muestra lo que el usuario agregó (useCart).
          element={<CartContainer />}
        />
      </Routes>
    </Layout>
  )
}

export default App
// ↑ Exporta el componente para que main.jsx (dentro del BrowserRouter
//   y del CartProvider) lo pueda importar.