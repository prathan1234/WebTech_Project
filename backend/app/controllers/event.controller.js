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

exports.getEvent = (req, res, next) => {
    Event.find({ event_name: req.params.event_name }, '', function (err, event) {
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
    Event.find({ author: req.params.username }, '', function (err, event) {
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

exports.search = (req, res, next) => {
    // console.log(req.params.keyword);
    Event.find({$text: {$search: req.params.keyword}})
    .skip(20)
    .limit(10)
    .exec(function(err, docs) {
        if (err) {
            console.log('Failure' + err);
            return next(err);
        }
        else {
            console.log('Search success\n' + docs);
            res.json(docs);
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

exports.removeEvent = (req, res, next) => {
    Event.remove({ 
        _id: req.params.id 
    } ,function (err, event) {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Remove success');
        }
    });
}