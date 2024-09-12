import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ServerService } from './server.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly serverService: ServerService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('find')
  async findServer() {
    try {
      const server = await this.serverService.findServer();
      return server;
    } catch (error) {
      throw new Error('No servers are available.');
    }
  }
}
