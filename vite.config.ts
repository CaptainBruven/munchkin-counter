import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-solid-bridge'],
  },
})
