import './App.css'
// ↑ Importa los estilos del componente principal

function App() {
  // ↑ Componente raíz. Por ahora solo muestra un cartel de bienvenida;
  //   cuando tengamos el enunciado, acá arranca la navegación con React Router.
  return (
    <main className="app">
      <h1>Ejercicio 7 — React Router</h1>
      <p>
        Acá vamos a implementar la navegación entre vistas con
        react-router-dom (rutas estáticas y componente Link).
      </p>
    </main>
  )
}

export default App
// ↑ Exporta el componente para que main.jsx lo pueda importar