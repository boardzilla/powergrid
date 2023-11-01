import * as esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

await esbuild.build({
  format: 'iife',
  assetNames: 'assets/[name]-[hash]',
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.scss': 'css',
    '.ogg': 'dataurl',
  },
  keepNames: true,
  outdir: 'build/ui',
  entryPoints: ['src/ui/index.tsx'],
  bundle: true,
  plugins: [sassPlugin()]
})
