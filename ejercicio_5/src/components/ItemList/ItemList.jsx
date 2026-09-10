import Item from '../Item/Item.jsx'
// ↑ Importa el componente "exhibidor" (presentacional). Importación por defecto.

function ItemList({ productos }) {
  // ↑ Desestructuración de props: recibe la lista completa de productos
  //   que el "Cerebro" (ItemListContainer) le pasó.

  return (
    <div className="item-list">
      {/* ↑ Contenedor flex que agrupa todos los Item.
          Se estiliza desde App.css (clase global). */}
      {productos.map((prod) => (
        // ↑ .map() recorre el array y devuelve un <Item /> por cada producto.
        <Item key={prod.id} {...prod} />
        // ↑ key ÚNICA: ayuda a React a identificar cada ítem de la lista.
        //   {...prod}: el spread operator pasa todas las propiedades del objeto
        //   (id, nombre, precio, stock, imagen) como props individuales a Item.
      ))}
    </div>
  )
}

export default ItemList
// ↑ Exporta el componente para que ItemListContainer lo pueda importar.
