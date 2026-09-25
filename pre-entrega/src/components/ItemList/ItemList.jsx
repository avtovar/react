import Item from '../Item/Item.jsx'
// ↑ Importa el componente "exhibidor" (presentacional). Importación por defecto.

import styles from './ItemList.module.css'
// ↑ CSS Module de la grilla de productos.

function ItemList({ productos }) {
  // ↑ Desestructuración de props: recibe la lista completa de productos
  //   que el "Cerebro" (ItemListContainer) le pasó.

  return (
    <div className={styles.grilla}>
      {/* ↑ Contenedor CSS Grid: acomoda las tarjetas en una grilla
           responsive (ver ItemList.module.css). */}
      {productos.map((prod) => (
        // ↑ .map() recorre el array y devuelve una <Item /> por cada producto.
        <Item key={prod.id} {...prod} />
        // ↑ key ÚNICA: React usa el id para identificar cada tarjeta.
        //   {...prod}: el spread operator pasa todas las propiedades
        //   (id, nombre, precio, stock, categoria, descripcion, imagen)
        //   como props individuales a Item.
      ))}
    </div>
  )
}

export default ItemList
// ↑ Exporta el componente para que ItemListContainer lo pueda importar.