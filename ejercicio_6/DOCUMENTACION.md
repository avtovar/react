# Documentación - ejercicio_6

E-commerce TechNova con **formulario de carga de producto**: un contenedor "inteligente" (`NewProductContainer`) maneja la lógica y un componente visual (`ProductForm`) muestra los campos. El formulario es **controlado** (`value` + `onChange`), sube la imagen a **Imgbb** con `fetch` + `FormData` y muestra un **indicador de carga** (`loading`) que deshabilita el botón con spinner mientras se sube. El proyecto continúa el ejercicio 5 (catálogo con favoritos + directorio del equipo en el footer) y usa **React 19 + Vite + CSS Modules**.

## Estructura

- `index.html` — Punto de entrada HTML: tiene `<div id="root">` y carga `/src/main.jsx`.
- `package.json` — Configuración del proyecto y scripts (`dev`, `build`, `lint`, `preview`).
- `.env.example` — Modelo de variable de entorno para la clave de Imgbb (`VITE_IMGBB_API_KEY`).
- `public/data/nosotros.json` — Array con los integrantes del equipo (id, nombre, email, puesto, foto). Es la "API" del directorio.
- `public/images/` — Avatares del equipo y **fotos reales de los productos** (`productos/`).
- `src/main.jsx` — Raíz de React: crea el root, importa `index.css` y renderiza `App`.
- `src/index.css` — Estilos GLOBALES: paleta de colores (variables CSS) y reset básico.
- `src/App.jsx` — Componente raíz: arma la página con Layout + hero + catálogo + formulario.
- `src/App.css` — Estilos de la sección principal (hero y la clase `.item-list`).
- `src/components/Layout/` — El "esqueleto": Header (sticky con nav), main y Footer. **En el footer se renderiza el Directorio del equipo.**
- `src/components/ItemListContainer/` — El "cerebro" del catálogo: dueño de los datos (array de productos con fotos locales).
- `src/components/ItemList/` — "Organizador": recorre el array con `.map()` y crea un `Item` por producto.
- `src/components/Item/` — "Exhibidor" (tarjeta del producto): favorito con `useState` y precio formateado.
- `src/components/Directorio/` — Componente con `useEffect` + `fetch` a `/data/nosotros.json`, estados `cargando`/`error` y grilla de tarjetas. **Es el protagonista del ejercicio 5.**
- `src/components/TarjetaContacto/` — Tarjeta presentacional de cada integrante (foto, nombre, puesto, email `mailto:`).
- `src/components/NewProductContainer/` — **El protagonista de este ejercicio (6)**: estados `datosForm`, `imagenFile` y `loading`; lógica de subida a Imgbb y envío del producto.
- `src/components/ProductForm/` — Formulario visual: campos controlados + input de archivo + **botón dinámico** con `loading` (ternario, deshabilitado + spinner).

## Comandos

```
npm run dev       -> levanta el servidor de desarrollo (http://localhost:5173)
npm run lint      -> analiza el código con Oxlint (busca errores/malos olores)
npm run build     -> genera la versión de producción en /dist
npm run preview   -> previsualiza la versión de producción generada
```

## Conceptos clave que se ven en este proyecto

1. **Componentes y props** — La app se divide en componentes chicos y reutilizables; los datos viajan del padre al hijo por props.
2. **`useState`** — Estado local: favoritos del catálogo (`esFavorito` en `Item`), datos del formulario (`datosForm`), archivo de imagen (`imagenFile`) y el **estado de carga (`loading`)**.
3. **`.map()` + `key`** — Se recorre un array y se renderiza un componente por ítem; `key` única ayuda a React a identificar cada elemento.
4. **`Intl.NumberFormat`** — Formatea precios como moneda argentina (`$149.999`) sin librerías extra.
5. **`useEffect` + `fetch`** — En `Directorio`, al montar el componente se pide `nosotros.json`; la respuesta se guarda en estado.
6. **Renderizado condicional** — El Directorio muestra "Cargando equipo...", un mensaje de error, o la grilla según los estados `cargando` y `error`.
7. **Patrón Contenedor/Presentacional** — `NewProductContainer` (lógica: estados y `handleFormSubmit`) delega la vista en `ProductForm` (solo recibe props y muestra campos). Lo mismo pasa en el catálogo (`ItemListContainer` → `ItemList` → `Item`).
8. **Formulario controlado** — Los inputs muestran `value` del estado y se actualizan con `onChange`; al enviar, `onSubmit` llama a `e.preventDefault()` para no recargar la página.
9. **`FormData` + subida a Imgbb** — Se adjunta el archivo de imagen y se hace `fetch` POST a `https://api.imgbb.com/1/upload?key=...` con `async/await`.
10. **Estado de carga con `finally`** — `setLoading(true)` al empezar el envío y `setLoading(false)` en el bloque `finally`, que corre SIEMPRE (éxito o error). Así el botón nunca queda trabado.
11. **Operador ternario** — El botón de envío cambia texto y estado según `loading`: `'Subiendo imagen...'` + spinner y `disabled`, o `'Guardar producto'`.
12. **CSS Modules** — Cada componente tiene su `.module.css` con estilos encapsulados (React genera nombres de clase únicos).

## Paleta

| Variable | Valor | Uso |
| --- | --- | --- |
| `--fondo` | `#0b0f1a` | Fondo de la página (azul muy oscuro) |
| `--superficie` | `#12182b` | Header, footer y tarjetas |
| `--superficie-elevada` | `#1a2238` | Hovers e imágenes |
| `--borde` | `#252f4a` | Bordes de tarjetas e inputs |
| `--acento` | `#2f6bff` | Botones, logo, enlace activo |
| `--acento-claro` | `#58a6ff` | Precios, puestos, focus |
| `--acento-brillante` | `#00e0ff` | Glow del logo y gradientes |
| `--texto` | `#e9eef8` | Texto principal |
| `--texto-suave` | `#93a0bd` | Texto secundario |
| `--favorito` | `#ffcc33` | Estrella de favorito activa |

## Cómo cambiar ...

- **El texto del botón de envío** — En `ProductForm.jsx` buscá el operador ternario del `<button>`: cambiá `'Subiendo imagen...'` y `'Guardar producto'`.
- **El color principal (azul)** — En `src/index.css`, cambiá el valor de `--acento` y `--acento-claro`.
- **La clave de Imgbb** — Creá un archivo `.env` (copiando `.env.example`) con `VITE_IMGBB_API_KEY=tu-clave`.
- **Los integrantes del directorio** — Editá `public/data/nosotros.json`: agregá/quita objetos con `id`, `nombre`, `email`, `puesto` y `foto`.
- **Las fotos de los productos** — Reemplazá los archivos en `public/images/productos/` y/o la ruta en `ItemListContainer.jsx`.

## Árbol de dependencias

```
index.html
  └─ src/main.jsx ✅
       ├─ src/index.css        ✅ importado y aplicado (paleta global)
       └─ src/App.jsx          ✅
            ├─ src/App.css     ✅ importado y aplicado (hero + .item-list)
            ├─ src/components/Layout/Layout.jsx   ✅ (recibe children)
            │    ├─ src/components/Layout/Layout.css   ✅
            │    ├─ src/components/Directorio/Directorio.jsx   ✅ (en el footer)
            │    │    ├─ src/components/Directorio/Directorio.module.css   ✅
            │    │    └─ src/components/TarjetaContacto/TarjetaContacto.jsx   ✅
            │    │         └─ src/components/TarjetaContacto/TarjetaContacto.module.css   ✅
            ├─ src/components/ItemListContainer/ItemListContainer.jsx   ✅
            │    ├─ src/components/ItemListContainer/ItemListContainer.module.css   ✅
            │    └─ src/components/ItemList/ItemList.jsx   ✅
            │         └─ src/components/Item/Item.jsx   ✅
            │              └─ src/components/Item/Item.module.css   ✅
            └─ src/components/NewProductContainer/NewProductContainer.jsx   ✅
                 ├─ src/components/NewProductContainer/NewProductContainer.module.css   ✅
                 └─ src/components/ProductForm/ProductForm.jsx   ✅
                      └─ src/components/ProductForm/ProductForm.module.css   ✅
public/data/nosotros.json   ✅ usado por Directorio (fetch)
public/images/**            ✅ usado por TarjetaContacto y el catálogo
.env.example                ⚠️ plantilla, el .env real no se sube a git
```

---

*Documentado por Ali Valentin Tovar Morales*