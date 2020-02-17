import { EggPlugin } from 'midway';
export default {
  ts: {
    enable: true,
    package: 'egg-ts'
  },
  cache: {
    enable: true,
    package: 'egg-born-cache'
  },
  static: true // default is true
} as EggPlugin;
