import { IEventService } from '../../interface';
import { provide, inject } from 'midway';
import { CreateOptions } from 'sequelize/types';
import { IEventModel } from '../model/event';

@provide('eventService')
export default class EventService implements IEventService {
  @inject()
  EventModel: IEventModel;

  async add(values: object, options?: CreateOptions & { returning: false }): Promise<void> {
    await this.EventModel.create(values, options);
  }
}
