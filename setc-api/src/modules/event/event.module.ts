import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { DatabaseModule } from '../database/database.module';
import { eventProvider } from './event.provider';

@Module({
  imports: [DatabaseModule,],
  controllers: [EventController],
  providers: [EventService, ...eventProvider],
})
export class EventModule { }
