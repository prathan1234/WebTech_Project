var EventUser = require('mongoose').model('EventUser');
var path = require("path");

exports.getAll = (req, res, next) => {
    EventUser.find((err, eventuser) => {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(eventuser);
            res.json(eventuser);
        }
    });
}

exports.getUserByEvent = (req, res, next) => {
    EventUser.find({ event_name: req.params.event_name }, '', function (err, eventuser) {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(eventuser);
            res.json(eventuser);
        }
    });
}

exports.getEventByUser = (req, res, next) => {
    EventUser.find({ username: req.params.username }, '', function (err, eventuser) {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(eventuser);
            res.json(eventuser);
        }
    });
}

exports.joinEvent = (req, res, next) => {
    var eventuser = new EventUser(req.body);
    eventuser.save((err) => {
        if (!eventuser || err) {
            console.log('Failure' + err);
            res.json({ "success": "false" });
        }
        else {
            console.log('Success\n' + eventuser);
            res.json({ "success": "true" });
        }
    });
}

exports.cancelEvent = (req, res, next) => {
    var eventuser = new EventUser(req.body);
    EventUser.remove({
        event_name: eventuser.event_name,
        username: eventuser.username
    } ,function (err, eventuser) {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Remove success');
        }
    });
}