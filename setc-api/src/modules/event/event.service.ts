import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Event } from './event.interface';
import { CreateEventDto } from './create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @Inject('EVENT_MODEL') private readonly eventModel: Model<Event>,
  ) {}

  async create(data: CreateEventDto): Promise<Event> {
    const user = new this.eventModel(data);
    return await user.save();
  }

  async findAll(): Promise<Event[]> {
    return await this.eventModel.find().exec();
  }

  async findById(id): Promise<Event> {
    return await this.eventModel.findById(id).exec();
  }
}
