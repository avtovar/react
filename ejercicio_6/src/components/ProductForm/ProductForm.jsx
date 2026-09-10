import styles from './ProductForm.module.css'
// ↑ Importa el CSS Module del formulario (estilos encapsulados).

function ProductForm({
  datosForm,
  handleFormChange,
  handleImageChange,
  handleFormSubmit,
  loading,
  imagenFile,
}) {
  // ↑ Desestructuración de props. Este es el componente "Presentacional" (o dumb):
  //   NO tiene estado ni lógica. SOLO muestra los campos y conecta las funciones
  //   que recibe por props (las maneja el contenedor NewProductContainer).
  //   👉 loading es LA PROP NUEVA DEL EJERCICIO: llega desde NewProductContainer.

  return (
    // ↓ <form> con onSubmit={handleFormSubmit}: cuando el usuario presiona
    //   el botón de envío, se ejecuta la lógica del contenedor.
    <form className={styles.formulario} onSubmit={handleFormSubmit}>
      {/* ---- Campo nombre (input controlado) ---- */}
      <label className={styles.campo}>
        <span className={styles.etiqueta}>Nombre del producto</span>
        <input
          className={styles.input}
          type="text"
          name="nombre"
          placeholder="Ej: Auriculares Quantum Pro"
          value={datosForm.nombre}
          onChange={handleFormChange}
          required
          /* ↑ FORMULARIO CONTROLADO: value viene del estado y onChange lo
               actualiza. React es la única fuente de verdad del input. */
        />
      </label>

      {/* ---- Campo precio ---- */}
      <label className={styles.campo}>
        <span className={styles.etiqueta}>Precio</span>
        <input
          className={styles.input}
          type="number"
          name="precio"
          placeholder="Ej: 149999"
          value={datosForm.precio}
          onChange={handleFormChange}
          min="0"
          step="1"
          required
        />
      </label>

      {/* ---- Campo stock ---- */}
      <label className={styles.campo}>
        <span className={styles.etiqueta}>Stock disponible</span>
        <input
          className={styles.input}
          type="number"
          name="stock"
          placeholder="Ej: 12"
          value={datosForm.stock}
          onChange={handleFormChange}
          min="0"
          step="1"
          required
        />
      </label>

      {/* ---- Campo imagen (input de tipo file) ---- */}
      <label className={styles.campo}>
        <span className={styles.etiqueta}>Imagen del producto</span>
        <input
          className={styles.inputArchivo}
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleImageChange}
          required
          /* ↑ accept="image/*" filtra el selector para mostrar solo imágenes */
        />
      </label>

      {/* ---- Feedback visual del archivo elegido (mejora de UX) ---- */}
      {imagenFile && (
        <p className={styles.archivoElegido}>
          Imagen seleccionada: {imagenFile.name}
        </p>
      )}

      {/* ---- Botón de envío con estado de carga ----
           REQ del ejercicio: el texto y el estado cambian dinámicamente
           con un OPERADOR TERNARIO según la prop loading:
           loading=true  → "Subiendo imagen..." + spinner + disabled
           loading=false → "Guardar producto" + botón habilitado */}
      <button
        className={styles.boton}
        type="submit"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? (
          <>
            {/* ↑ Mientras carga mostramos un spinner girando (SVG + animación) */}
            <svg
              className={styles.spinner}
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="40 20"
              />
            </svg>
            Subiendo imagen...
          </>
        ) : (
          'Guardar producto'
        )}
      </button>
    </form>
  )
}

export default ProductForm
// ↑ Exporta el componente para que NewProductContainer lo pueda importar.
//   Es reutilizable: solo recibe props y no sabe de dónde vienen los datos.