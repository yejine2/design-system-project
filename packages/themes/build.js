import run from '@ooz/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
})