import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/utils',
  plugins: [vue()],
  server: {
    proxy: {
      "/v1": {
        target: "https://api.notion.com",
        changeOrigin: true,
        secure: false,
      },
    },
  }
})
