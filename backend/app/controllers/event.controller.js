var Event = require('mongoose').model('Event');
var path = require("path");

exports.getAll = (req, res, next) => {
    Event.find((err, event) => {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(event);
            res.json(event);
        }
    });
}

exports.getOne = (req, res, next) => {
    Event.findOne({ _id: req.params.id }, (err, event) => {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(event);
            res.json(event);
        }
    });
}

exports.getUserEvent = (req, res, next) => {
    console.log(req);
    Event.find({ 
        author: req.params.author 
    }, function (err, event) {
        if (err) {
            console.log('Failure: ' + err);
            return next(err);
        }
        else {
            console.log(event);
            res.json(event);
        }
    });
}

exports.create = (req, res, next) => {
    var event = new Event(req.body);
    event.save(function (err) {
        if (!event || err) {
            console.log('Failure' + err);
            res.json({ "success": "false" });
        }
        else {
            console.log('Success\n' + event);
            res.json({ "success": "true" });
        }
    });
}
