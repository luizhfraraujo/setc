import { Document } from 'mongoose';

export interface Event extends Document {
    
    readonly date: string;   
    readonly startTime: string;
    readonly endTime: string;
    readonly title: string;    
    readonly description: string;
    readonly speaker: string;
    readonly image: string;
    readonly type: string;
}