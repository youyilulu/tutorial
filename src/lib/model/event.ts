import { DataType, Table, Model, Column } from 'sequelize-typescript';
import { providerWrapper } from 'midway';

const { STRING, TEXT, INTEGER, DATEONLY } = DataType;

// using factory style to provide Model because most useful
// sequelize methods are static in Model class. If you use
// @provide style, this class will be initialized when injected.
export const factory = () => EventModel;
providerWrapper([
  {
    id: 'EventModel',
    provider: factory
  }
]);
// you need to export the type of Model class to ensure
// type-safety outside
export type IEventModel = typeof EventModel;

@Table({
  freezeTableName: true,
  tableName: 'his_events'
})
export class EventModel extends Model<EventModel> {
  @Column({
    type: INTEGER({
      length: 11
    }),
    primaryKey: true,
    autoIncrement: true,
    comment: '事件id'
  })
  id: number;

  @Column({
    type: STRING(100),
    comment: '事件名称'
  })
  eventName: string;

  @Column({
    type: TEXT,
    comment: '事件内容'
  })
  eventContent?: string;

  @Column({
    type: DATEONLY,
    comment: '事件发生时间'
  })
  eventTime: Date;
}
