import * as esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

const env = process.env.NODE_ENV || "development"
const minify = env === "production"

await esbuild.build({
  format: 'iife',
  assetNames: 'assets/[name]-[hash]',
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
    '.scss': 'css',
    '.ogg': 'dataurl',
  },
  keepNames: true,
  outfile: 'build/ui/index.js',
  entryPoints: ['./src/ui/'],
  bundle: true,
  minify,
  plugins: [sassPlugin()]
})
