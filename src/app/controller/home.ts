import { Context, inject, controller, get, provide, post } from 'midway';
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
    this.ctx.session.visited = this.ctx.session.visited ? this.ctx.session.visited + 1 : 1;
    this.ctx.body = 'Welcome to midwayjs! - ' + this.ctx.session.visited;
  }

  @post('/')
  async add() {
    await this.eventService.add(this.ctx.request.body);
    this.ctx.body = 'ok';
  }
}
