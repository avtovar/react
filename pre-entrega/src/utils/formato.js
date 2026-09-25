// ============================================================
// FORMATO.JS — funciones utilitarias de formato
// ============================================================
// Este módulo no es un componente: es una "caja de herramientas"
// que cualquier componente puede importar para no repetir código.
// Centraliza el formato de precios con Intl.NumberFormat (es-AR).
// ============================================================

export function formatearPrecio(precio) {
  // ↑ Convierte un número (149999) en un precio argentino legible: "$149.999".
  //   La usan Item, ItemDetail y CartContainer para que TODOS los precios
  //   se vean idénticos en toda la app.
  return new Intl.NumberFormat('es-AR', {
    style: 'currency', //    Lo muestra como moneda
    currency: 'ARS', //      Pesos argentinos
    maximumFractionDigits: 0, // Sin decimales (los productos no usan centavos)
  }).format(precio)
}