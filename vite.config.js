import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.ts', '.vue']
  },
  build: {
    lib: {
      entry: 'lib/index.js',
      name: 'index',
    },
  }
})