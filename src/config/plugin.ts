import { EggPlugin } from 'midway';
export default {
    ts: {
        enable: true,
        package: 'egg-ts',
    },
    cache: {
        enable: true,
        package: 'egg-born-cache',
    },
    cache_redis: {
        enable: true,
        package: 'egg-born-cache-redis',
    },
    session: {
        enable: true,
        package: 'egg-session',
    },
    static: true, // default is true
} as EggPlugin;
