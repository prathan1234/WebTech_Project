import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    event_name: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    start_time: {
        type: Date,
        default: Date.now
    },
    end_time: {
        type: Date,
        default: Date.now
    },
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Event', EventSchema);
