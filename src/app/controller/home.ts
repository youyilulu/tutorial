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
        this.ctx.cookies.set('x-visit-count', this.ctx.session.visited.toString(), {
            encrypt: true,
        });
        const currentCookieVisit = this.ctx.cookies.get('x-visit-count', {
            encrypt: true,
        });
        this.ctx.body = `Welcome to midwayjs! - session[visited]:${this.ctx.session.visited},cookie[x-visit-count]:${currentCookieVisit}`;
    }

    @get('/cache')
    async cache() {
        await this.ctx.app['cache'].set('x-visit-count', 1);
        this.ctx.body = await this.ctx.app['cache'].get('x-visit-count');
    }

    @post('/')
    async add() {
        await this.eventService.add(this.ctx.request.body);
        this.ctx.body = 'ok';
    }
}
