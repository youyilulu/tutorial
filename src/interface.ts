import { CreateOptions } from 'sequelize/types/lib/model';

export interface IEventService {
    add(values: object, options?: CreateOptions & { returning: false }): Promise<void>;
}
