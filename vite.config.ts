import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // importante para deploy em hospedagem comum
  plugins: [react()],
})