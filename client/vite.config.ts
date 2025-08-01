import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

import * as path from "path"

function way(name: string){
  return path.resolve(__dirname, name)
}


export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
	port: 8000
  },
  resolve: {
    alias: {
      '~': way('src'),
      '@types': way('src/types/index'),
      '@data': way('src/test/data.ts'),
      '@components': way('src/components/index.ts'),
    }
  },
})
