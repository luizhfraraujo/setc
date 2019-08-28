import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'MONGODB_CONN',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://localhost:27017/setc'),
    },
];

// export const databaseProviders = [
//     {
//         provider: 'MONGODB_CONN',
//         useFactory: async (): Promise<typeof mongoose> =>
//             await mongoose.connect('mongodb://localhost:27017/setc')
//     }
// ];