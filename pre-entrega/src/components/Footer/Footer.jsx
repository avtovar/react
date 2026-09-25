import Directorio from '../Directorio/Directorio.jsx'
// ↑ Directorio: la sección que carga /data/nosotros.json con fetch+useEffect
//   y muestra las tarjetas de contacto del equipo. Vivía en el ejercicio 6
//   y se reutiliza acá porque el footer DEBE mostrar el equipo
//   (Requerimiento #1.3: tarjetas de al menos 3 personas).

import styles from './Footer.module.css'
// ↑ CSS Module del Footer: estilos encapsulados del pie de página.

function Footer() {
  // ↑ Pie de página: información de la empresa + Directorio del equipo.
  //   Requerimiento #1.2: el footer debe tener información de la empresa
  //   y las tarjetas de los creadores (Directorio / TarjetaContacto).

  return (
    // ↓ <footer> semántico: el cierre de la página.
    <footer className={styles.footer}>
      <div className={styles.contenido}>
        <div className={styles.empresa}>
          {/* ↑ Bloque con la información de la empresa */}
          <div className={styles.marca}>
            <svg
              className={styles.marcaLogo}
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
            >
              {/* ↑ El mismo rayo del header: identidad visual consistente */}
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            <span className={styles.marcaNombre}>
              Tech<span>Nova</span>
            </span>
          </div>

          <p className={styles.texto}>
            Tienda de tecnología con los mejores productos al mejor precio.
          </p>
          <p className={styles.datos}>
            contacto@technova.dev
            <br />
            Av. Tecnológica 1234, Ciudad Autónoma de Buenos Aires
          </p>
          <p className={styles.datos}>Atención de lunes a viernes, de 9 a 18 h</p>
        </div>

        <Directorio />
        {/* ↑ El Directorio muestra "Cargando equipo...", un error, o la grilla
             de tarjetas de contacto con las personas del equipo (3 o más,
             cargadas desde /data/nosotros.json). */}
      </div>

      <div className={styles.legal}>
        {/* ↑ Franja final con el copyright */}
        <p className={styles.legalTexto}>
          © 2026 TechNova — Todos los derechos reservados
        </p>
        <p className={styles.legalTexto}>
          Hecho con React Router y Context API para la pre-entrega de TalentoLab
        </p>
      </div>
    </footer>
  )
}

export default Footer
// ↑ Exporta el componente para que Layout.jsx lo pueda importar.