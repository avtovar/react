import { useState } from 'react'
// ↑ useState: hook de React para crear ESTADO dentro del componente.

import { CartContext } from './CartContext.jsx'
// ↑ Importamos el contexto que creamos en el archivo hermano.
//   <CartProvider> va a "rellenar" ese contexto con el estado real del carrito.

// ============================================================
// CART PROVIDER — el "cerebro" del carrito de compras
// ============================================================
// Este componente NO se ve en pantalla: su único trabajo es guardar
// el estado global del carrito con useState y exponerlo a todos los
// componentes que estén DENTRO de él (en main.jsx envuelve a <App />).
//
//   <CartProvider>          ← guarda el estado con useState
//     <App />               ← cualquier componente puede llamar a useCart()
//     ...
//   </CartProvider>
// ============================================================

export function CartProvider({ children }) {
  // ↑ Desestructuración de props: { children } son todos los componentes
  //   que viven "dentro" de este provider (la app completa).

  const [carrito, setCarrito] = useState([])
  // ↑ carrito -> el array de productos agregados. Cada ítem tiene la forma:
  //     { id, nombre, precio, imagen, stock, cantidad }
  //   setCarrito -> la función que lo actualiza. Arranca vacío: [].

  // ---- Funciones que cualquier componente puede usar ----

  function agregarAlCarrito(producto, cantidad = 1) {
    // ↑ Agrega un producto (o suma cantidad si ya estaba en el carrito).
    //   Hacemos la actualización con el patrón callback (prev => ...)
    //   porque depende del valor ANTERIOR del estado.

    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id)
      // ↑ ¿El producto ya estaba en el carrito? Lo buscamos por id.

      if (existente) {
        // ↑ Si ya estaba, NO duplicamos la línea: sumamos la cantidad nueva
        //   al ítem existente (sin pasarnos del stock disponible).
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: Math.min(item.cantidad + cantidad, item.stock) }
            : item,
        )
      }

      // ↑ Si no estaba, creamos un ítem nuevo con la cantidad pedida
      //   y lo agregamos al final del array (operador spread + push inmutable).
      return [...prev, { ...producto, cantidad }]
    })
  }

  function quitarDelCarrito(id) {
    // ↑ Elimina el producto del carrito por su id.
    //   filter() devuelve un NUEVO array sin el ítem que coincida.
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  function vaciarCarrito() {
    // ↑ Deja el carrito vacío (se usa en el botón "Vaciar carrito").
    setCarrito([])
  }

  // ---- Valores derivados (se calculan en CADA render) ----

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0)
  // ↑ Cantidad total de unidades: suma la `cantidad` de todos los ítems.
  //   Es el número que muestra el CartWidget en la barra de navegación.

  const total = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)
  // ↑ Total en dinero: precio unitario × cantidad, sumado por cada ítem.
  //   Es lo que muestra la vista /carrito.

  return (
    // ↓ El provider "envuelve" a los hijos y les inyecta el valor del contexto.
    //   Todo componente dentro de <CartProvider> puede hacer useCart() y
    //   desestructurar lo que necesite de este objeto.
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,
        cantidadTotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
// ↑ Exportación por defecto también disponible: main.jsx usa { CartProvider }.