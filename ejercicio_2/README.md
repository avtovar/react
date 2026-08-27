# Ejercicio 2 — Lista de Asistentes

Aplicación de React + Vite que muestra una lista de asistentes a un evento, usando un componente reutilizable y un array de datos.

## ¿Qué hace?

- Define un array `asistentes` con datos de cada persona (nombre, tarea y emoji).
- Usa `.map()` para renderizar un componente `<Asistente />` por cada persona.
- El componente `Asistente` recibe las props por **desestructuración** y muestra el nombre en un `h3` y la tarea con su emoji en un `p`.

## Estructura del proyecto

```
ejercicio_2/
├── index.html          → HTML base con el <div id="root">
├── src/
│   ├── main.jsx        → Punto de entrada: monta React en el #root
│   ├── App.jsx         → Componente raíz: datos + .map() + render
│   ├── Asistente.jsx   → Componente reutilizable (nombre, tarea, emoji)
│   └── index.css       → Estilos globales
└── package.json        → Dependencias y scripts
```

## Cómo correrlo

```bash
npm install    # instala las dependencias (solo la primera vez)
npm run dev    # levanta el servidor de desarrollo
```

Abrí la URL que muestra la consola (por defecto http://localhost:5173).

## Scripts disponibles

| Comando       | Qué hace                          |
| ------------- | --------------------------------- |
| `npm run dev` | Servidor de desarrollo con HMR    |
| `npm run build` | Genera la versión de producción |
| `npm run lint` | Verifica errores con Oxlint     |
| `npm run preview` | Previsualiza el build        |

## Tecnologías

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [Oxlint](https://oxc.rs)