# Documentación - ejercicio_2 Lista de Asistentes

Aplicación de React que muestra una lista de asistentes a un evento. Cada persona se renderiza con un componente reutilizable `<Asistente />`, alimentado por un array de datos y un `.map()`.

## Estructura

- `src/App.jsx` — Componente raíz: define el array `asistentes` (data) y usa `.map()` para renderizar un `<Asistente />` por cada persona. Cada ítem se identifica con una `key` única.
- `src/Asistente.jsx` — Componente reutilizable: recibe `nombre`, `tarea` y `emoji` por props (desestructurados) y los muestra en un `h3` + `p`.
- `src/main.jsx` — Punto de entrada de React (no se toca).
- `src/index.css` — Estilos globales (reset universal + `body` + `h1`).
- `index.html` — Página base; ahí se edita el título de la pestaña.

## Comandos

```
npm run dev     -> levanta el servidor
npm run lint    -> chequea errores de código
npm run build   -> versión de producción
```

## Conceptos clave que se ven en este ejercicio

1. **Separar "data" de "presentación"**: el array `asistentes` vive fuera del componente `App`, así los datos no se mezclan con el JSX.
2. **`.map()` para listas**: recorre el array y devuelve un componente por cada elemento. Si el array queda vacío, no se renderiza nada.
3. **Props de padre a hijo**: `App` le pasa `nombre`, `tarea` y `emoji` a cada `<Asistente />`.
4. **Desestructuración de props**: en `Asistente` los params vienen "ya abiertos" (`{ nombre, tarea, emoji }`), sin necesidad de escribir `props.nombre`.
5. **`key` única**: esencial para que React identifique cada ítem y no muestre warnings ni tenga problemas de rendimiento al reordenar la lista.

## Árbol de dependencias

```
index.html
  └─ main.jsx
       ├─ index.css        ✅ importado y aplicado
       └─ App.jsx          ✅
            └─ Asistente.jsx   ✅ (renderizado por .map(), 4 veces)
```