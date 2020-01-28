import { Context, inject, controller, get, provide } from 'midway';
import { IEventService } from '../../interface';

@provide()
@controller('/')
export class HomeController {
  @inject()
  ctx: Context;

  @inject()
  eventService: IEventService;

  @get('/')
  async index() {
    this.ctx.helper.foo();
    this.ctx.body = `success`;
  }
}
