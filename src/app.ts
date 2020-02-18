import { DB } from './lib/model/db';

// build db connections when starting APP
export = app => {
  app.beforeStart(async () => {
    console.log('🚀 Your awesome APP is launching...');

    try {
      await DB.initDB(app.config.sequelize);
      if (process.env.NODE_ENV === 'create-db') {
        await DB.sequelize.sync({ force: true });
      }
    } catch (ex) {
      console.error('db init error');
    }
    console.log('✅  Your awesome APP launched');
  });

  app.cache.setDefault('redis');

  app.sessionStore = {
    async get(key) {
      return app.cache.get(key);
    },
    async set(key, value, maxAge) {
      await app.cache.set(key, value, maxAge / 1000);
    },
    async destroy(key) {
      await app.cache.del(key);
    }
  };
};
