# Documentación - ejercicio_3 E-commerce (TechNova)

Home de una tienda de tecnología maquetada con React. Se aplica **componentización**, **props**, **estilos globales** y **CSS Modules** para encapsular los estilos del componente de producto.

## Estructura

- `src/App.jsx` — Componente raíz: envuelve todo con `<Layout>` y muestra el catálogo con 6 `<TarjetaProducto />` (datos en el array `productos`).
- `src/main.jsx` — Punto de entrada de React (no se toca).
- `src/components/Layout/Layout.jsx` — Header (con `<nav>` y logo), contenido (`children`) y Footer.
- `src/components/Layout/Layout.css` — Estilos del Header, nav y Footer.
- `src/components/TarjetaProducto/TarjetaProducto.jsx` — Componente reutilizable: recibe `imagen`, `nombre` y `precio` como props y los muestra.
- `src/components/TarjetaProducto/TarjetaProducto.module.css` — **CSS Module**: estilos encapsulados, solo aplican a `TarjetaProducto`.
- `src/index.css` — Estilos globales: paleta de colores en variables CSS, reset y tipografía.
- `src/App.css` — Estilos del hero, del catálogo y del grid (flexbox/grid).
- `index.html` — Página base.

## Paleta (identidad visual del e-commerce)

Definida como variables CSS en `src/index.css` para reutilizarla en cualquier componente:

| Variable                | Valor      | Uso                        |
| ----------------------- | ---------- | -------------------------- |
| `--fondo`               | `#0b0f1a`  | Fondo de la página         |
| `--superficie`          | `#12182b`  | Header, footer y tarjetas  |
| `--superficie-elevada`  | `#1a2238`  | Hover / imágenes           |
| `--borde`               | `#252f4a`  | Bordes de las tarjetas     |
| `--acento`              | `#2f6bff`  | Botones y logo (azul)      |
| `--acento-claro`        | `#58a6ff`  | Precios y enlaces activos  |
| `--acento-brillante`    | `#00e0ff`  | Glow del logo y gradiente  |
| `--texto` / `--texto-suave` | `#e9eef8` / `#93a0bd` | Textos principal / secundario |

## Comandos

```
npm run dev     -> levanta el servidor
npm run lint    -> chequea errores de código
npm run build   -> versión de producción
```

## Conceptos clave que se ven en este ejercicio

1. **Layout como componente con `children`**: `Layout` no sabe qué contiene; recibe el contenido por `children` y lo coloca entre el Header y el Footer. Esto permite reutilizar la misma estructura de página en varias secciones.
2. **Componente reutilizable con props**: `TarjetaProducto` muestra imagen, nombre y precio recibidos por props. El mismo componente sirve para 6 productos distintos sin repetir código.
3. **CSS Modules**: `TarjetaProducto.module.css` genera nombres de clases únicos automáticamente, evitando choques entre estilos de distintos componentes.
4. **Estilos modulares**: estilos globales (paleta, reset) en `index.css` y de sección (hero, grid) en `App.css`; estilos encapsulados del producto en su módulo.
5. **Grid responsive**: el catálogo usa `display: grid` con `repeat(3, 1fr)` y media queries para pasar a 2 y 1 columna en pantallas más chicas.

## Árbol de dependencias

```
index.html
  └─ main.jsx
       ├─ index.css                  ✅ paleta + reset (global)
       └─ App.jsx                    ✅
            ├─ App.css               ✅ hero + grid de sección
            ├─ Layout/Layout.jsx     ✅ Header + <main> + Footer
            │     └─ Layout.css      ✅ estilos header/nav/footer
            └─ TarjetaProducto/TarjetaProducto.jsx  ✅ (6 instancias)
                  └─ TarjetaProducto.module.css     ✅ CSS Module
```