import { Connection } from 'mongoose';
import { EventSchema } from './event.schema';

export const eventProvider = [
    {
        provide: 'EVENT_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('Event', EventSchema),
        inject: ['MONGODB_CONN'],
    },
];