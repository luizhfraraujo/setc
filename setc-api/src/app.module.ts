import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './modules/event/event.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [EventModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
