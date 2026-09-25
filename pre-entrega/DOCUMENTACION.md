# Documentación - pre-entrega

Proyecto de **pre-entrega obligatoria** del curso **TalentoLab / Talento Tech** (React.js): e-commerce **TechNova** con catálogo cargado desde un JSON local (simulando una API), **sistema de ruteo** con `react-router-dom` (4 rutas mínimas) y **carrito de compras con Context API** (`CartContext` + `CartWidget`). Construido sobre el material de los ejercicios 1 a 6 (Layout, Directorio, paleta TechNova, patrón Contenedor/Presentacional).

**Stack:** React 19 + Vite 8 + Oxlint + CSS Modules + react-router-dom 7.

## Estructura

- `index.html` — Punto de entrada del navegador: `<div id="root">` donde React monta la app.
- `package.json` — Manifiesto del proyecto (scripts `dev`, `build`, `lint`, `preview`) y dependencias (React, Vite, Oxlint, react-router-dom).
- `vite.config.js` — Configuración de Vite con el plugin de React.
- `.oxlintrc.json` — Reglas de Oxlint para React (hooks y exportación de componentes).
- `public/favicon.svg` — Ícono del sitio.
- `public/data/productos.json` — La "API" local: 7 productos con id, nombre, precio, stock, descripción, categoría e imagen.
- `public/data/nosotros.json` — Equipo de 7 personas (foto, nombre, puesto, email) para el Directorio del footer.
- `public/images/productos/` — Fotos reales de 4 productos (los otros usan placeholder).
- `public/images/avatar*.png`, `avatar-ali.jpg` — Fotos del Directorio.

### src/

- `main.jsx` — Raíz: envuelve la app en `BrowserRouter` (ruteo) + `CartProvider` (contexto del carrito).
- `App.jsx` — Declara las 4 rutas obligatorias con `<Routes>`/`<Route>` y el hero de bienvenida.
- `App.css` — Estilos globales del hero de la vista `/`.
- `index.css` — Paleta de colores TechNova como variables CSS + reset (tema oscuro).

### src/context/
- `CartContext.jsx` — Crea el contexto global del carrito (`createContext`) y exporta el hook custom `useCart()`.
- `CartProvider.jsx` — El "cerebro": guarda el estado con `useState` y expone `agregarAlCarrito`, `quitarDelCarrito`, `vaciarCarrito`, `cantidadTotal` y `total`.

### src/utils/
- `formato.js` — `formatearPrecio()` con `Intl.NumberFormat` (es-AR, ARS).

### src/components/
- `Layout/Layout.jsx` — Esqueleto de la página: `Header` + `main` (contenido) + `Footer` (Requerimiento #1).
- `Header/Header.jsx` — Barra superior sticky con el logo TechNova + `<NavBar />`.
- `NavBar/NavBar.jsx` — Navegación con `NavLink` (estilo activo) + `CartWidget`.
- `CartWidget/CartWidget.jsx` — Ícono de carrito con contador numérico en tiempo real (lee `useCart()`).
- `Footer/Footer.jsx` — Info de la empresa + Directorio del equipo + copyright.
- `Directorio/Directorio.jsx` — Carga `nosotros.json` con `fetch` + `useEffect` (cargando/error/datos).
- `TarjetaContacto/TarjetaContacto.jsx` — Tarjeta presentacional de persona (foto, nombre, puesto, email `mailto:`).
- `ItemListContainer/ItemListContainer.jsx` — Contenedor "inteligente": carga `productos.json` con `fetch` + `useEffect` (3 estados).
- `ItemList/ItemList.jsx` — Grilla que recorre los productos y renderiza un `<Item />` por cada uno.
- `Item/Item.jsx` — Tarjeta de producto (recibe datos por props): "Ver detalle" + botón rápido para agregar.
- `ItemDetailContainer/ItemDetailContainer.jsx` — Lee el `:id` de la URL con `useParams()` y busca el producto.
- `ItemDetail/ItemDetail.jsx` — Vista de detalle con selector de cantidad (−/+) y botón "Agregar al carrito" (`agregarAlCarrito`).
- `CartContainer/CartContainer.jsx` — Vista `/carrito`: lista de ítems, quitar, vaciar, resumen y total (lee del contexto).

## Comandos

```
npm install     -> instala las dependencias (solo la primera vez)
npm run dev     -> levanta el servidor de desarrollo (http://localhost:5173)
npm run lint    -> chequea errores de código con Oxlint
npm run build   -> genera la versión de producción en /dist (para Netlify/Vercel)
npm run preview -> previsualiza la build de producción
```

## Conceptos clave que se ven en este proyecto

1. **React Router (`react-router-dom`)** — Navegación entre "páginas" en una SPA sin recargar el navegador. `BrowserRouter` envuelve la app, `<Routes>`/`<Route>` declaran las rutas, `<Link>`/`<NavLink>` navegan, y `useParams()` lee los parámetros dinámicos de la URL (`/producto/:id`).
2. **Context API** — Estado GLOBAL sin pasar props por cada nivel: `createContext` crea el contenedor, `Provider` lo "rellena" con estado y funciones, y `useContext`/hook custom (`useCart`) lo lee desde cualquier componente.
3. **`fetch` + `useEffect` con 3 estados** — El patrón para cargar datos "de una API": `cargando` (arranca true), `error` (si el fetch falla) y `datos` (cuando llegan). Se combina con renderizado condicional.
4. **Patrón Contenedor/Presentacional** — Los "cerebros" (`ItemListContainer`, `ItemDetailContainer`, `CartProvider`) manejan la lógica y los datos; los "visuales" (`Item`, `ItemDetail`, `TarjetaContacto`) solo reciben props y renderizan.
5. **`Intl.NumberFormat`** — Formato de precios en pesos argentinos (`es-AR`, `ARS`) desde `utils/formato.js`.
6. **CSS Modules** — `import styles from '...module.css'` + `className={styles.algo}`: React genera nombres de clase únicos para que los estilos no pisen a otros componentes.

## Árbol de dependencias

```
index.html
  └─ src/main.jsx
       ├─ src/index.css          ✅ importado y aplicado (estilos globales)
       ├─ react-router-dom       ✅ BrowserRouter (ruteo)
       ├─ src/context/CartProvider.jsx   ✅ <CartProvider> envuelve <App />
       │    └─ src/context/CartContext.jsx ✅ createContext + useCart (usado por CartWidget, ItemDetail, CartContainer, Item, NavBar…)
       └─ src/App.jsx            ✅ <Routes> con las 4 rutas obligatorias
            ├─ src/App.css       ✅ importado y aplicado (hero)
            └─ src/components/Layout/Layout.jsx ✅ (envuelve todas las rutas)
                 ├─ src/components/Header/Header.jsx    ✅
                 │    └─ src/components/NavBar/NavBar.jsx ✅ (+ CartWidget)
                 │         └─ src/components/CartWidget/CartWidget.jsx ✅ (lee useCart)
                 ├─ src/components/Footer/Footer.jsx    ✅
                 │    └─ src/components/Directorio/Directorio.jsx ✅ (fetch nosotros.json)
                 │         └─ src/components/TarjetaContacto/TarjetaContacto.jsx ✅
                 ├─ (rutas) /productos → ItemListContainer.jsx ✅
                 │    └─ ItemList.jsx ✅ → Item.jsx ✅
                 ├─ (rutas) /producto/:id → ItemDetailContainer.jsx ✅ (useParams)
                 │    └─ ItemDetail.jsx ✅ (agregarAlCarrito ← useCart)
                 └─ (rutas) /carrito → CartContainer.jsx ✅ (lee useCart)
src/utils/formato.js               ✅ importado por ItemDetail y CartContainer
public/data/productos.json         ✅ servido por Vite desde la raíz (/data/productos.json)
public/data/nosotros.json          ✅ servido por Vite (/data/nosotros.json)
public/images/…                    ✅ imágenes de productos y avatares
src/vite.config.js                 ✅ usado por Vite al compilar
```

---

*Documentado por Ali Valentin Tovar Morales*