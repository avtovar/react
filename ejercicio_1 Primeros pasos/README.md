# Ejercicio 1 — Primeros pasos con React

Aplicación de React + Vite que simula un posteo en una red social, dividido en componentes pequeños y reutilizables.

## ¿Qué hace?

- Muestra un posteo con tres partes: encabezado, cuerpo y pie.
- Cada parte es un **componente** separado, para aplicar el principio de "dividir para conquistar".
- El componente raíz `App` agrupa a los tres hijos dentro de un fragmento `<>...</>` (sin crear un `<div>` extra).

## Estructura del proyecto

```
ejercicio_1 Primeros pasos/
├── index.html               → HTML base con el <div id="root">
├── src/
│   ├── main.jsx             → Punto de entrada: monta React en el #root
│   ├── App.jsx              → Componente raíz: agrupa los 3 hijos
│   ├── Encabezado.jsx       → Componente hijo: título del posteo (h1)
│   ├── CuerpoPosteo.jsx     → Componente hijo: contenido del posteo (p)
│   ├── PieDePosteo.jsx      → Componente hijo: pie/footer del posteo
│   ├── index.css            → Estilos globales (variables, modo oscuro, tipografía)
│   └── App.css              → Estilos del template original (no importado actualmente)
└── package.json             → Dependencias y scripts
```

## Cómo correrlo

```bash
npm install    # instala las dependencias (solo la primera vez)
npm run dev    # levanta el servidor de desarrollo
```

Abrí la URL que muestra la consola (por defecto http://localhost:5173).

## Scripts disponibles

| Comando          | Qué hacer                          |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Servidor de desarrollo con HMR     |
| `npm run build`  | Genera la versión de producción    |
| `npm run lint`   | Verifica errores con Oxlint        |
| `npm run preview`| Previsualiza el build              |

## Tecnologías

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [Oxlint](https://oxc.rs)