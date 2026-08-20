# Documentación - ejercicio_1 Primeros pasos

Posteo simple armado con React: un encabezado, un cuerpo y un pie de página, cada uno como un componente separado y ensamblados desde el componente padre.

## Estructura

- `src/App.jsx` — Componente padre: importa los tres componentes y los muestra en orden.
- `src/Encabezado.jsx` — Título (h1).
- `src/CuerpoPosteo.jsx` — Párrafo con el contenido.
- `src/PieDePosteo.jsx` — Footer.
- `src/App.css` / `src/index.css` — Estilos.
- `index.html` — Página base; ahí se edita el título de la pestaña.
- `src/main.jsx` — Punto de entrada de React (no se toca).
- `src/assets/` — Imágenes de ejemplo del template (algunas quedaron sin uso y se pueden borrar).

## Comandos

```
npm run dev     -> levanta el servidor
npm run lint    -> chequea errores de código
npm run build   -> versión de producción
```

## Cómo cambiar el color del encabezado

1. En `src/App.jsx` agregar: `import './App.css'`
2. En `src/App.css`:
   ```css
   .titulo {
     color: red;
   }
   ```
3. En `src/Encabezado.jsx`:
   ```jsx
   <h1 className="titulo">Mi Primer Posteo con React</h1>
   ```



index.html
  └─ main.jsx
       ├─ index.css        ✅ importado y aplicado
       └─ App.jsx
            ├─ Encabezado.jsx    ✅
            ├─ CuerpoPosteo.jsx  ✅
            └─ PieDePosteo.jsx   ✅

App.css   ❌ huérfano, no importado por nadie