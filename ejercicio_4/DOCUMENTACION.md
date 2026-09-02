# Documentación - ejercicio_4 E-commerce con favoritos (useState)

E-commerce que aplica el **flujo de datos contenedor → presentacional** en tres niveles (`ItemListContainer` → `ItemList` → `Item`) y añade la funcionalidad clave de **marcar productos como favoritos** usando el hook **`useState`**: cada producto maneja su propia estrella de forma independiente.

## Estructura

- `src/App.jsx` — Componente raíz: envuelve todo con `<Layout>` y monta el `ItemListContainer` pasándole un `mensaje`.
- `src/main.jsx` — Punto de entrada de React (no se toca).
- `src/components/Layout/Layout.jsx` — Header (con `<nav>` y logo), contenido (`children`) y Footer.
- `src/components/Layout/Layout.css` — Estilos del Header, nav y Footer.
- `src/components/ItemListContainer/ItemListContainer.jsx` — **El "Cerebro" (contenedor)**: tiene el array de datos y se los pasa a `ItemList`.
- `src/components/ItemListContainer/ItemListContainer.module.css` — CSS Module del contenedor (subtítulo y fila de productos).
- `src/components/ItemList/ItemList.jsx` — **El "Organizador"**: recibe la lista completa, la recorre con `.map()` y delega a un `Item` por producto (con `key` y spread `{...prod}`).
- `src/components/Item/Item.jsx` — **El "Exhibidor" (presentacional)**: muestra un producto y, con `useState`, alterna su estado de favorito con la estrella (función `marcarComoFavorito`).
- `src/components/Item/Item.module.css` — **CSS Module**: estilos de la tarjeta, el botón y la estrella (vacía/activa).
- `src/index.css` — Estilos globales: paleta de colores en variables CSS, reset y tipografía.
- `src/App.css` — Estilos del hero y de la clase `.item-list` que agrupa las tarjetas.
- `index.html` — Página base.

## Comandos

```
npm run dev     -> levanta el servidor
npm run lint    -> chequea errores de código
npm run build   -> versión de producción
```

## Conceptos clave que se ven en este ejercicio

1. **Flujo contenedor → presentacional en 3 niveles**: `ItemListContainer` tiene los datos y no le importa la apariencia → `ItemList` los recorre con `.map()` y delega → `Item` muestra un producto. Cada nivel tiene una única responsabilidad.
2. **`useState` para estado individual por producto**: cada `<Item />` declara su propio `const [esFavorito, setEsFavorito] = useState(false)`. Por eso cada producto maneja su favorito de forma totalmente independiente.
3. **Función `marcarComoFavorito` (toggle)**: usa el patrón callback `setEsFavorito((prev) => !prev)` para invertir el booleano: si estaba `true` pasa a `false` y viceversa.
4. **Renderizado condicional de la estrella**: según `esFavorito`, la estrella usa la clase `estrellaActiva` (rellena/dorada) o `estrella` (vacía). Un clic la "rellena" y otro clic la vuelve al estado original.
5. **Evento `onClick`**: el clic en el botón de la estrella llama a `marcarComoFavorito`, y el atributo `aria-pressed` expone el estado a lectores de pantalla (accesibilidad).
6. **Spread operator `{...prod}`**: en `ItemList`, propaga todas las propiedades del objeto (id, nombre, precio, stock, imagen) como props individuales al `Item`, acompañado de la `key` única.
7. **CSS Modules**: cada componente usa su `.module.css` con nombres de clase únicos generados por React, encapsulando los estilos.

## Paleta (identidad visual del e-commerce)

Definida como variables CSS en `src/index.css` para reutilizarla en cualquier componente:

| Variable          | Valor      | Uso                                      |
| ----------------- | ---------- | ---------------------------------------- |
| `--fondo`         | `#0b0f1a`  | Fondo de la página                       |
| `--superficie`    | `#12182b`  | Header, footer y tarjetas                |
| `--superficie-elevada` | `#1a2238` | Hover / imágenes                      |
| `--borde`         | `#252f4a`  | Bordes de las tarjetas                   |
| `--acento`        | `#2f6bff`  | Botones y logo (azul)                    |
| `--acento-claro`  | `#58a6ff`  | Precios y enlaces activos                |
| `--acento-brillante` | `#00e0ff` | Glow del logo y gradiente              |
| `--favorito`      | `#ffcc33`  | **Estrella activa** (amarillo dorado)    |
| `--texto` / `--texto-suave` | `#e9eef8` / `#93a0bd` | Textos principal / secundario |

## Árbol de dependencias

```
index.html
  └─ main.jsx
       ├─ index.css                  ✅ paleta + reset (global)
       └─ App.jsx                    ✅
            ├─ App.css               ✅ hero + .item-list (global)
            ├─ Layout/Layout.jsx     ✅ Header + <main> + Footer
            │     └─ Layout.css      ✅ estilos header/nav/footer
            └─ ItemListContainer/ItemListContainer.jsx  ✅ el "Cerebro" (datos)
                  └─ ItemListContainer.module.css       ✅ CSS Module
                  └─ ItemList/ItemList.jsx              ✅ el "Organizador" (.map)
                        └─ Item/Item.jsx                ✅ el "Exhibidor" + useState
                              └─ Item.module.css        ✅ CSS Module + estrella
```

## Resumen del flujo de datos

```
Container (datos)  ->  List (.map + key + spread)  ->  Item (apariencia + favorito)
```

**Container** tiene los productos, se los pasa a **List**, **List** recorre el array y le pasa a cada **Item** los datos de un único producto, y **Item** los muestra y gestiona su propia estrella de favoritos con `useState`.
