import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ou @vitejs/plugin-vue selon votre framework
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
