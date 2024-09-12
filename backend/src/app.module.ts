import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerService } from './server.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ServerService],
})
export class AppModule {}
