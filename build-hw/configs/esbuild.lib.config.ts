import { build } from 'esbuild'
import type { BuildOptions } from 'esbuild'

const isDev = process.argv.includes('--dev')

const shared: BuildOptions = {
  entryPoints: ['build-hw/lib/index.ts', 'build-hw/lib/math.ts', 'build-hw/lib/string.ts'],
  bundle: true,
  external: ['react', 'react-dom', 'lodash'],
  target: 'es2020',
  minify: !isDev,
  sourcemap: true,
  treeShaking: !isDev,
}

await build({ ...shared, format: 'esm', outdir: 'build-hw/dist/lib/esm' })
await build({ ...shared, format: 'cjs', outdir: 'build-hw/dist/lib/cjs' })

console.log('esbuild: библиотека собрана в esm и cjs')
