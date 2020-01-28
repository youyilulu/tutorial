import { Sequelize } from 'sequelize-typescript';
import { provide, scope, ScopeEnum } from 'midway';
import { Dialect } from 'sequelize';
import { EventModel } from './event';

interface ISequelizeConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  dialect: Dialect;
}

// providing DB.sequelize in case of hyper features
// of sequelize like "sequelize.transaction"
@scope(ScopeEnum.Singleton)
@provide('DB')
export class DB {
  public static sequelize: Sequelize;

  public static async initDB(config: ISequelizeConfig) {
    DB.sequelize = new Sequelize(config.database, config.user, config.password, {
      dialect: config.dialect,
      host: config.host,
      port: config.port,
      timezone: '+08:00',
      logging: false,
      define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        timestamps: true
      }
    });

    // add models here before using them
    DB.sequelize.addModels([EventModel]);

    try {
      await DB.sequelize.authenticate();
    } catch (error) {
      error.message = `DB connection error: ${error.message}`;
      throw error;
    }
  }
}
