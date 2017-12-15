import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var EventUserSchema = new Schema({
    event_name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    reg_time: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('EventUser', EventUserSchema);
