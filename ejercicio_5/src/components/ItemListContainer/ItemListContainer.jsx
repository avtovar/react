import ItemList from '../ItemList/ItemList.jsx'
// ↑ Importa el componente "organizador". Esta es la importación por defecto.

import styles from './ItemListContainer.module.css'
// ↑ Importa el CSS Module del propio ItemListContainer.

function ItemListContainer({ mensaje }) {
  // ↑ Desestructuración de props: este componente contenedor recibe un "mensaje"
  //   desde App.jsx. Además es el dueño de los datos del catálogo.

  // ---- Array de datos: cada objeto representa un producto del catálogo ----
  const productos = [
    // ↑ Guardamos los datos en una constante DENTRO del contenedor (el "cerebro").
    //   En una app real esto sería una llamada a una API o base de datos.
    //   La imagen usa picsum.photos (placeholder aleatorio) para simular el catálogo.
    {
      id: 1,
      nombre: 'Auriculares Quantum Pro',
      precio: 149999,
      stock: 12,
      imagen: 'https://picsum.photos/seed/auriculares/400/400',
    },
    {
      id: 2,
      nombre: 'Smartwatch Pulse X',
      precio: 179999,
      stock: 8,
      imagen: 'https://picsum.photos/seed/smartwatch/400/400',
    },
    {
      id: 3,
      nombre: 'Parlante Bluetooth Boom',
      precio: 89999,
      stock: 20,
      imagen: 'https://picsum.photos/seed/parlante/400/400',
    },
    {
      id: 4,
      nombre: 'Teclado Mecánico RGB',
      precio: 119999,
      stock: 15,
      imagen: 'https://picsum.photos/seed/teclado/400/400',
    },
  ]

  return (
    <section className={styles.seccion}>
      {/* ↑ <section> es el bloque visual de la sección de productos */}
      <h2 className={styles.subtitulo}>{mensaje}</h2>
      {/* ↑ {mensaje} inyecta el texto que App.jsx le pasó al contenedor */}

      <div className={styles.productos}>
        {/* ↑ Contenedor flex que ordena las tarjetas en fila */}
        <ItemList productos={productos} />
        {/* ↑ Le pasa la lista completa al "organizador" para que la recorra */}
      </div>
    </section>
  )
}

export default ItemListContainer
// ↑ Exporta el componente para que App.jsx lo pueda importar.
