import Asistente from './Asistente.jsx'
// ↑ Importa el componente reutilizable Asistente (definido en Asistente.jsx)

// ---- Array de datos: cada objeto representa un asistente al evento ----
const asistentes = [
  // ↑ Guardamos los datos en una constante FUERA del componente App,
  //   así queda separada la "data" del "código de presentación"
  { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '💻' },
  { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '🎨' },
  { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '⚙️' },
  { nombre: 'Ali Tovar', tarea: 'Ingeniero de QA', emoji: '🧪' },
]

function App() {
  return (
    <>
      {/* ↑ Fragmento: agrupa elementos SIN crear un <div> extra en el HTML final */}
      <h1>Lista de Asistentes</h1>

      {asistentes.map((asistente) => (
        // ↑ .map() recorre el array y devuelve un <Asistente /> por cada persona.
        //   El resultado es un array de componentes que React renderiza en orden.
        <Asistente
          key={asistente.nombre}
          // ↑ key ÚNICA: le dice a React cómo identificar cada ítem de la lista.
          //   Sin key, React no puede optimizar y muestra un warning.
          nombre={asistente.nombre}
          tarea={asistente.tarea}
          emoji={asistente.emoji}
          // ↑ Las props (nombre, tarea, emoji) viajan del padre al hijo.
        />
      ))}
    </>
  )
}

export default App
// ↑ Exporta el componente para que main.jsx lo pueda importar