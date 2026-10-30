import { build, context } from 'esbuild'
import type { BuildOptions } from 'esbuild'

const isDev = process.argv.includes('--dev')

const options: BuildOptions = {
  entryPoints: { app: 'build-hw/app/index.ts' },
  outdir: 'build-hw/dist',
  bundle: true,
  format: 'esm',
  splitting: true,
  target: 'es2020',
  minify: !isDev,
  sourcemap: true,
  treeShaking: !isDev,
}

if (isDev) {
  const ctx = await context(options)
  await ctx.watch()
  console.log('esbuild: слежу за изменениями, Ctrl+C для выхода')
} else {
  await build(options)
  console.log('esbuild: сборка приложения готова')
}
