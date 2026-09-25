# Documentación - ejercicio_8

Proyecto de práctica del curso **TalentoLab / Talento Tech** (Clase 8): base de una aplicación **React + Vite** preparada para implementar **navegación con React Router** (`react-router-dom`), continuando la línea de la Clase 7. Por ahora contiene la estructura inicial del proyecto, igual que el ejercicio_7, con `react-router-dom` ya instalado y listo para usar (la Clase 8 suele sumar rutas dinámicas, `NavLink` y `useParams`).

## Estructura

- `index.html` — Punto de entrada del navegador: tiene el `<div id="root">` donde React monta la app y carga `/src/main.jsx` como módulo.
- `package.json` — Manifiesto del proyecto: nombre, scripts (`dev`, `build`, `lint`, `preview`) y dependencias (React 19, Vite, Oxlint y **react-router-dom 7**).
- `vite.config.js` — Configuración de Vite: registra el plugin de React (`@vitejs/plugin-react`) para transformar los `.jsx`.
- `.oxlintrc.json` — Configuración de Oxlint: reglas específicas para React (hooks y exportación de componentes).
- `public/favicon.svg` — Ícono del sitio (se sirve tal cual, sin pasar por Vite).
- `src/main.jsx` — "Raíz" de React: importa los estilos globales y renderiza `<App />` dentro de `<StrictMode>`.
- `src/App.jsx` — Componente principal: por ahora un cartel de bienvenida; acá arrancará la navegación con React Router.
- `src/index.css` — Estilos GLOBALES: paleta de colores del e-commerce como variables CSS (`--fondo`, `--acento`, etc.) + reset básico. Aplica a toda la app.
- `src/App.css` — Estilos del componente `App` (centrado del cartel de bienvenida).

## Comandos

```
npm install     -> instala las dependencias (solo la primera vez)
npm run dev     -> levanta el servidor de desarrollo (http://localhost:5173)
npm run lint    -> chequea errores de código con Oxlint
npm run build   -> genera la versión de producción en /dist
npm run preview -> previsualiza la build de producción
```

## Conceptos clave que se ven en este proyecto

1. **Raíz de React (`createRoot`)** — `main.jsx` busca el `<div id="root">` del HTML y convierte ese lugar en el punto donde React dibuja toda la app.
2. **Componente raíz (`App`)** — Todo lo que se ve en pantalla cuelga de `<App />`. La idea es que acá se configuren las rutas.
3. **CSS Modules vs CSS global** — `index.css` es global (se importa una vez en `main.jsx`); los estilos de componentes usan `.module.css` para que React genere nombres de clase únicos.
4. **Scripts de `package.json`** — `npm run dev` / `build` / `lint` / `preview` son atajos para Vite y Oxlint.
5. **React Router (pendiente de implementar)** — `react-router-dom` ya está instalado (v7). Permite navegar entre "páginas" en una SPA **sin recargar** el navegador, usando componentes como `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink` y hooks como `useParams` o `useNavigate`.

## Árbol de dependencias

```
index.html
  └─ src/main.jsx
       ├─ src/index.css      ✅ importado y aplicado (estilos globales)
       └─ src/App.jsx        ✅
            └─ src/App.css   ✅ importado y aplicado (estilos de App)
src/vite.config.js           ✅ usado por Vite al compilar
public/favicon.svg           ✅ referenciado desde index.html
```

---

*Documentado por Ali Valentin Tovar Morales*