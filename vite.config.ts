import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'mcpm-sdk',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        '@modelcontextprotocol/sdk',
        'chalk',
        'conf',
        'env-paths',
        'prompts',
        'yoctocolors',
        'zod',
        'child_process',
        'fs',
        'path',
        'os',
        'util',
        'url',
        'node:process',
      ],
      output: {
        // 为所有外部化的依赖提供一个全局变量
        globals: {
          '@modelcontextprotocol/sdk': 'MCPSdk',
          chalk: 'chalk',
          conf: 'conf',
          'env-paths': 'envPaths',
          prompts: 'prompts',
          yoctocolors: 'yoctocolors',
          zod: 'zod',
        },
      },
    },
    sourcemap: true,
    minify: false,
    target: 'node18',
  },
  plugins: [
    dts({
      rollupTypes: true,
      include: ['src'],
      exclude: ['src/__tests__', 'src/**/*.spec.ts', 'src/**/*.test.ts'],
    }),
  ],
});
