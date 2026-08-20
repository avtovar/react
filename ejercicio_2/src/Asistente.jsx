function Asistente({ nombre, tarea, emoji }) {
  // ↑ Desestructuración de props: las 3 props llegan "ya abiertas"
  //   (equivale a: function Asistente(props) { ... props.nombre ... })

  return (
    // ↓ Acá hay JSX: parece HTML pero es JavaScript con superpoderes.
    //   Las llaves { } permiten "inyectar" valores de JavaScript en el JSX.
    <div className="asistente">
      {/* ↑ className = atributo HTML "class", pero en JSX se escribe className */}
      <h3>{nombre}</h3>
      {/* ↑ h3 muestra el nombre que recibió por props */}
      <p>
        {emoji} {tarea}
      </p>
      {/* ↑ p muestra el emoji y la tarea */}
    </div>
  )
}

export default Asistente
// ↑ Exporta el componente para que App.jsx lo pueda importar y reutilizar