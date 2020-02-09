/* tslint:disable */
import { app, assert } from 'midway-mock/bootstrap';
/* tslint:enable */
import { IEventService } from '../../src/interface'

describe('test/service/event.test.ts', () => {
    it('#list', async () => {
        const eventService = await app.applicationContext.getAsync<IEventService>('eventService')
        const events = await eventService.list();
        assert(events.length === 0)
    });
});
