var Event = require('mongoose').model('Event');
var path = require("path");

exports.getAll = (req, res, next) => {
    if (req.user) {
        Event.find((err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.getOne = (req, res, next) => {
    if (req.user) {
        Event.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.getMyEvent = (req, res, next) => {
    if (req.user) {
        var username = req.user.username;
        console.log(username);
        Event.find({ author: username }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        }).sort({ time: 'desc' });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.create = (req, res, next) => {
    if (req.user) {
        var event = new Event(req.body);
        event.author = req.user.username;
        event.save(function (err) {
            if (err) {
                res.status(400).send({
                    message: err
                });
            }
            else {
                res.json(event);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}
