import { build } from 'tsup'

async function buildPackages() {
  await build({
    entry: ['src/**/*.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
    target: 'es2020'
  })
}

buildPackages().catch(console.error)
