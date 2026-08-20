import Encabezado from './Encabezado.jsx'
import CuerpoPosteo from './CuerpoPosteo.jsx'
import PieDePosteo from './PieDePosteo.jsx'
// ↑ Importa los 3 componentes hijos

function App() {
  return (
    <>
      {/* ↑ Fragmento: agrupa elementos SIN crear un <div> extra en el HTML final */}
      <Encabezado />
      <CuerpoPosteo />
      <PieDePosteo />
    </>
  )
}

export default App
// ↑ Exporta el componente para que main.jsx lo pueda importar