/// <reference types="vitest" />
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const reactPlugin = react({
  babel: {
    plugins: [['babel-plugin-react-compiler', { target: '18' }]],
  },
} as any) as PluginOption;

export default defineConfig({
  plugins: [reactPlugin],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add this section:
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})