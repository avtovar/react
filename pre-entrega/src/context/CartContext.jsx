import { createContext, useContext } from 'react'
// ↑ createContext: crea el "contenedor" de estado global que van a usar
//   todos los componentes del carrito.
//   useContext: hook que permitirá LEER ese contenedor desde cualquier componente.

// ============================================================
// CART CONTEXT — el "estado global" del carrito de compras
// ============================================================
// Este archivo exporta DOS piezas que trabajan juntas:
//
//   1. CartContext: el contenedor en sí (un objeto con la forma del carrito).
//   2. useCart: el hook custom que cualquier componente usa para leer o
//      modificar el carrito SIN tener que importar el contexto a mano:
//          const { agregarAlCarrito, cantidadTotal } = useCart()
//
// El "cerebro" que guarda los datos (CartProvider) vive en un archivo
// aparte (src/context/CartProvider.jsx) para mantener las responsabilidades
// prolijas: acá se define el contexto, allá se administra el estado.
// ============================================================

export const CartContext = createContext(null)
// ↑ createContext(null) crea el contexto con un valor inicial null.
//   El valor REAL lo va a proveer <CartProvider> más arriba en el árbol
//   (en main.jsx envolvemos toda la app). Mientras no haya provider,
//   useCart() devolvería null y por eso el hook lanza un error claro.

export function useCart() {
  // ↑ Hook custom: la "API pública" del carrito. Con una sola línea
  //   cualquier componente accede a todo el estado y a todas las funciones.
  const contexto = useContext(CartContext)
  // ↑ Leemos el valor que <CartProvider> inyectó en el contexto.

  if (contexto === null) {
    // ↑ Si no hay un <CartProvider> arriba, el contexto vale null.
    //   Mejor lanzar un error claro que fallar en silencio más adelante.
    throw new Error('useCart debe usarse dentro de un <CartProvider>.')
  }

  return contexto
  // ↑ Devolvemos el objeto completo: { carrito, agregarAlCarrito,
  //   quitarDelCarrito, vaciarCarrito, cantidadTotal, total }.
  //   Cada componente desestructura solo lo que necesita.
}