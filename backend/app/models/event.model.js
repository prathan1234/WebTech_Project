import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    event_name: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    catagory: {
        type: String
    },
    content: {
        type: String
    },
    start_time: {
        type: Date,
        default: Date.now
    },
    end_time: {
        type: Date,
        default: Date.now
    }
});

EventSchema.index({ event_name: "text", catagory: "text" });

mongoose.model('Event', EventSchema);
