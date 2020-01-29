import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = <DefaultConfig>{};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579685299925_143';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    }
  };

  config.sequelize = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '111111',
    database: 'history',
    dialect: 'mysql'
  };

  return config;
};
