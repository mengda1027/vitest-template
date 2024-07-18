import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 测试配置项
  test: {
    setupFiles: "./setupTests.ts",
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      exclude: [
        ...(configDefaults.coverage.exclude as string[]),
        "src/App.tsx",
        "src/main.tsx",
      ],
    },
  }
})
