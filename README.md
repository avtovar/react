# React — Aprendizaje y Ejercicios

Repositorio con los proyectos de práctica de React + Vite, ordenados por clase y ejercicio. Los ejercicios son del curso **TalentoLab / Talento Tech** y se construyeron de forma incremental: cada ejercicio continúa y mejora el anterior.

## Ejercicios

### [ejercicio_1 — Primeros pasos](./ejercicio_1%20Primeros%20pasos/)
Primera toma de contacto con React: un **posteo dividido en 3 componentes** (`Encabezado`, `CuerpoPosteo` y `PieDePosteo`) agrupados con **fragmentos** (`<>...</>`), que permiten devolver varios elementos sin agregar un `<div>` extra al HTML.

### [ejercicio_2 — Lista de asistentes](./ejercicio_2/)
Componente reutilizable **`Asistente`** que recibe `nombre`, `tarea` y `emoji` por **props**. Los datos viven en un **array externo** al componente y se renderiza una tarjeta por persona con **`.map()`**, usando una **`key` única** para que React identifique cada ítem de la lista.

### [ejercicio_3 — Catálogo de productos](./ejercicio_3/)
Primera versión del e-commerce TechNova: componente reutilizable **`TarjetaProducto`** (imagen, nombre, precio) + **`Layout`** con header y footer. Los productos se renderizan en una **grilla con `.map()`**, separando los datos (array externo) de la presentación e incluyendo contador de artículos.

### [ejercicio_4 — E-commerce con favoritos](./ejercicio_4/)
Catálogo completo con **estado local**: cada producto tiene su propia estrella de favorito usando **`useState`** y el patrón **toggle** (`setEsFavorito(prev => !prev)`). Introduce la cadena de componentes **`ItemListContainer` → `ItemList` → `Item`** (contenedor "cerebro" → organizador → exhibidor), **precios formateados** con `Intl.NumberFormat` (`es-AR`, ARS) y **CSS Modules** para encapsular los estilos.

### [ejercicio_5 — Directorio del equipo](./ejercicio_5/)
Carga de "Creadores del sitio" desde un **JSON local** (`/data/nosotros.json`) usando **`useEffect` + `fetch`**, con los tres estados pedidos: `nosotros`, `cargando` y `error`. Renderizado condicional profesional: mensaje **"Cargando equipo..."** con animación, **mensaje de error visible** ante fallos, y una **grilla de tarjetas** (`TarjetaContacto` presentacional: foto, nombre, puesto y email `mailto:`) ubicada **al principio del footer**. El equipo incluye al autor con su foto real.

### [ejercicio_6 — Formulario de carga con indicador de progreso](./ejercicio_6/)
Formulario de alta de producto aplicando el **patrón Contenedor/Presentacional**: `NewProductContainer` (estados `datosForm`, `imagenFile` y `loading`) delega la vista en `ProductForm`. El formulario es **controlado** (`value` + `onChange`), sube la imagen a **Imgbb** con `fetch` + `FormData` (clave vía `.env`) y muestra un **indicador de carga**: `setLoading(true)` al enviar, botón **deshabilitado con spinner** (ternario) y `setLoading(false)` en el bloque **`finally`** para no quedarse trabado ni permitir dobles envíos. El catálogo usa **fotos reales** de los productos (`public/images/productos`).

## Proyectos de práctica

### [clase_1 — Proyecto base](./clase_1/)
Template oficial de **React + Vite** generado en la primera clase, con **Oxlint** configurado y gestionado con **pnpm**. Sirve como punto de partida: estructura `src/` (App, estilos, `main.jsx`), `public/` y scripts de `dev`/`build`/`lint`/`preview`. Incluye su propia `DOCUMENTACION.md` y `README.md`.

### [proyecto_uno — Práctica inicial con Vite](./proyecto_uno/)
Primer contacto con Vite usando **JavaScript vanilla** (sin React): un **counter** y estilos básicos en `.css`. Útil para entender cómo funciona Vite (HMR, `main.js`, `package.json`) antes de meterse con React. Tiene también su `DOCUMENTACION.md`.

### [Cases_reactjs — Casos de estudio](./Cases_reactjs/)
Repositorio de estudio para repasar **casos y ejemplos de React.js**. Es una carpeta con su propio `.git` (contiene `README.md` y `.github`), pensada como material de referencia del curso.

### [vite.dev — Documentación de Vite](./vite.dev/)
Copia local del **sitio oficial de documentación de Vite** ([vite.dev](https://vite.dev)) para consultar como material de referencia offline: guías, características y changelogs.

### [informacion — Material de clase](./informacion/)
Carpeta reservada para guardar **apuntes y material de las clases** (_vacía por ahora_).

### [media — Recursos multimedia](./media/)
Carpeta reservada para **imágenes y recursos multimedia** de los proyectos (_vacía por ahora_).

## Cómo correr un proyecto

Cada carpeta con `package.json` es un proyecto Vite independiente:

```bash
cd "ejercicio_6"     # o la carpeta que quieras
npm install          # solo la primera vez
npm run dev          # levanta el servidor de desarrollo (http://localhost:5173)
```

Otros comandos disponibles en los proyectos:

```bash
npm run build        # genera la versión de producción en /dist
npm run lint         # analiza el código con Oxlint
npm run preview      # previsualiza la build de producción
```

> Nota: el ejercicio 6 necesita una clave de API de Imgbb para subir imágenes. Copiá `.env.example` como `.env` y completá `VITE_IMGBB_API_KEY` con tu clave (registro gratis en imgbb.com).

## Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [Oxlint](https://oxc.rs)
- CSS Modules para los estilos de los últimos ejercicios