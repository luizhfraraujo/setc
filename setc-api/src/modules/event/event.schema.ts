import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            trim: true,
            required: true,
        },
        startTime: {
            type: String,
            trim: true,
            required: true,
        },
        endTime: {
            type: String,
            trim: true,
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
        },
        speaker: {
            type: String,
            trim: true,
        },
        image: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            enum: ['palestra', 'minicurso', 'outros', 'campeonato'],
            default: 'palestra',
        }
    },
    // { timestamps: true }
);