import { Model, Column } from 'sequelize-typescript';

export default class BaseModel extends Model<BaseModel> {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
  id: number;

  static async getList<T extends BaseModel>() {
    const results = await this.findAll({
      raw: true
    });
    return results as T[];
  }
}
