# Documentación - clase_1

Página de inicio del template de Vite + React: muestra logos animados, un título, un contador interactivo (con `useState`) y los enlaces de la comunidad. Es la primera toma de contacto con componentes, JSX y estado en React.

## Estructura

- `src/main.jsx` — Punto de entrada de React: crea la "raíz" y monta el componente `App` (no se toca).
- `src/App.jsx` — Componente principal: arma el layout (hero, contador y enlaces) y maneja el estado del contador con `useState`.
- `src/index.css` — Estilos globales: variables de color y estilos base (`body`, `#root`, títulos, código).
- `src/App.css` — Estilos del layout del `App.jsx` (hero, botón contador, enlaces de la comunidad).
- `src/assets/` — Imágenes importadas como módulos (react, vite, hero).
- `public/` — Archivos servidos tal cual (favicon, iconos SVG).
- `index.html` — Página base; carga `src/main.jsx` dentro del div `#root`.

## Comandos

```
npm run dev      -> levanta el servidor
npm run lint     -> chequea errores de código
npm run build    -> versión de producción
npm run preview  -> previsualiza la versión de producción
```

## Conceptos clave que se ven en este ejercicio

1. **Componente** — `App` es una función que devuelve JSX; React lo repinta cuando cambia su estado.
2. **JSX** — HTML escrito dentro de JavaScript; se inyectan valores con `{}` (ej. `{count}`) y en atributos se usa `className`.
3. **`useState`** — hook que crea estado dentro del componente; devuelve `[valor, setValor]` con desestructuración.
4. **Evento `onClick`** — React escucha el clic y llama a `setCount`, que actualiza el estado y vuelve a dibujar.
5. **Fragments `<>...</>`** — agrupa varios elementos sin meter una etiqueta extra en el DOM.
6. **`StrictMode`** — `<StrictMode>` en dev ejecuta cada componente dos veces para avisar de errores.
7. **Import de imágenes** — se importan como módulos y se usan en `src={logo}`.
8. **Variables CSS (`:root`)** — colores y tipografías definidos una vez en `index.css` y reutilizados en `App.css`.

## Cómo cambiar el color del título

1. En `src/index.css`, dentro de `:root`:
   ```css
   --text-h: #08060d;   /* cambiar este valor */
   ```
2. Guardar y ver el cambio con HMR en el navegador.

## Paleta

| Variable        | Valor claro          | Uso                            |
|-----------------|----------------------|--------------------------------|
| `--text`        | `#6b6375`            | texto normal                   |
| `--text-h`      | `#08060d`            | títulos (h1, h2)               |
| `--bg`          | `#fff`               | fondo de la página             |
| `--border`      | `#e5e4e7`            | bordes y separadores           |
| `--code-bg`     | `#f4f3ec`            | fondo del código               |
| `--accent`      | `#aa3bff`            | color de acento (púrpura)      |
| `--accent-bg`   | `rgba(170,59,255,.1)`| fondo del botón contador        |
| `--accent-border`| `rgba(170,59,255,.5)`| borde del botón al hover       |
| `--social-bg`   | `rgba(244,243,236,.5)`| fondo de los enlaces            |
| `--shadow`      | sombra suave         | sombra de los enlaces al hover  |

## Árbol de dependencias

index.html
  └─ src/main.jsx            ✅ importado por index.html (entrada de React)
       ├─ src/index.css      ✅ importado y aplicado (estilos globales)
       └─ src/App.jsx        ✅ componente montado en #root
            ├─ src/App.css   ✅ importado y aplicado (layout)
            └─ src/assets/*  ✅ imágenes importadas como módulos
public/icons.svg             ✅ usado por el HTML (href /icons.svg#...)
