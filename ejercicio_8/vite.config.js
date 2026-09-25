import react from '@vitejs/plugin-react'
// ↑ Plugin oficial de React para Vite: permite usar JSX y Fast Refresh
//   (los cambios en el código se ven al instante, sin recargar la página)

import { defineConfig } from 'vite'
// ↑ Helper de Vite que trae autocompletado y valida la configuración

// https://vite.dev/config/
export default defineConfig({
  // ↑ Exporta la configuración que Vite lee al arrancar (dev/build)

  plugins: [react()],
  // ↑ Registra el plugin de React en la lista de plugins de Vite
})