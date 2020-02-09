import { IEventService } from '../../interface';
import { provide, inject } from 'midway';
import { CreateOptions } from 'sequelize/types';
import { IEventModel, EventModel } from '../model/event';

@provide('eventService')
export default class EventService implements IEventService {
  @inject()
  EventModel: IEventModel;

  async add(values: object[], options?: CreateOptions & { returning: false }): Promise<void> {
    await this.EventModel.bulkCreate(values, options);
  }

  async list(): Promise<EventModel[]> {
    return this.EventModel.getList<EventModel>();
  }
}
