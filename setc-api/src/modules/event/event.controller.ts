import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './create-event.dto';
import { ResultDto } from './result.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id) {
    return this.eventService.findById(id);
  }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    try {
      const event = await this.eventService.create(createEventDto);
      return new ResultDto(null, true, event, null);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
