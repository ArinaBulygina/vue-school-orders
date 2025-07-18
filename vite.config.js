import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from "node:url";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
       open: true, // откроет браузер автоматически
       port: 3000, // можете настроить на другой порт, если потребуется
     },
  plugins: [vue()],
})
