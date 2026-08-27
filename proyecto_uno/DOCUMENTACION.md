# Documentación - proyecto_uno

Página de inicio básica del template de Vite en JavaScript puro (sin React): muestra el logo, un contador de clics y los enlaces de la comunidad. Sirve para entender cómo Vite arma una página desde un `index.html` y un archivo `.js` de entrada que inyecta HTML y eventos en el DOM.

## Estructura

- `index.html` — Página base: carga el módulo `src/main.js` dentro del div `#app`.
- `src/main.js` — Punto de entrada: inyecta el HTML de la página y le pasa el botón a `setupCounter`.
- `src/counter.js` — Módulo con la función `setupCounter` que maneja el botón del contador.
- `src/style.css` — Estilos globales (importado desde `src/main.js`).
- `src/assets/` — Imágenes que se importan como módulos (hero, logos).
- `public/` — Archivos servidos tal cual (favicon, iconos SVG).

## Comandos

```
npm run dev      -> levanta el servidor
npm run build    -> versión de producción
npm run preview  -> previsualiza la versión de producción
```

## Conceptos clave que se ven en este ejercicio

1. **Módulos ES (`import`/`export`)** — cada archivo importa lo que necesita y exporta lo que otros usan.
2. **`template literals` (backticks `` ` ``)** — se escriben bloques de HTML dentro de un string que va al DOM con `innerHTML`.
3. **`querySelector` y `addEventListener`** — se selecciona un elemento y se le "escucha" un evento (el clic).
4. **Estado con variable local y closure** — `counter.js` guarda el valor del contador, actualiza el texto y suma `1` en cada clic.
5. **Importar imágenes como módulos** — Vite devuelve la URL del asset para poder usarla en el HTML inyectado.
6. **Variables CSS (`:root`)** — colores y tipografías definidos una vez y reutilizados por todas las reglas.

## Cómo cambiar el color del título

1. En `src/style.css`, dentro de `:root`:
   ```css
   --text-h: #08060d;   /* cambiar este valor */
   ```
2. Guardar y ver el cambio con HMR en el navegador.

## Árbol de dependencias

index.html
  └─ src/main.js              ✅ importado por index.html
       ├─ src/style.css       ✅ importado y aplicado
       ├─ src/counter.js      ✅ funcionalidad del botón
       └─ src/assets/*        ✅ imágenes importadas como módulos
public/icons.svg              ✅ usado por el HTML (href /icons.svg#...)
