# React — Aprendizaje y Ejercicios

Repositorio con los proyectos de práctica de React + Vite, ordenados por clase y ejercicio.

## Ejercicios

| Carpeta | Descripción |
| --- | --- |
| [ejercicio_1 Primeros pasos](./ejercicio_1%20Primeros%20pasos/) | Primeros pasos: un posteo dividido en componentes (Encabezado, CuerpoPosteo, PieDePosteo) agrupados con fragmentos. |
| [ejercicio_2](./ejercicio_2/) | Lista de asistentes: componente reutilizable `Asistente` (props nombre, tarea, emoji) renderizado con `.map()` a partir de un array. |

## Proyectos de práctica

| Carpeta | Descripción |
| --- | --- |
| [clase_1](./clase_1/) | Proyecto base creado en clase 1 (template de React + Vite con Oxlint). |
| [proyecto_uno](./proyecto_uno/) | Práctica inicial con Vite (JS vanilla: counter y estilos). |
| [Cases_reactjs](./Cases_reactjs/) | Casos de React.js (contenido de estudio). |
| [vite.dev](./vite.dev/) | Sitio de documentación de Vite (material de referencia). |
| [informacion](./informacion/) | Material e información de las clases. |
| [media](./media/) | Imágenes y recursos multimedia. |

## Cómo correr un proyecto

Cada carpeta con `package.json` es un proyecto Vite independiente:

```bash
cd "ejercicio_2"    # o la carpeta que quieras
npm install         # solo la primera vez
npm run dev         # levanta el servidor de desarrollo (http://localhost:5173)
```

## Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev)
- [Oxlint](https://oxc.rs)