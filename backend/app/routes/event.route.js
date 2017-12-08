var event = require('../controllers/event.controller');

module.exports = (app) => {
    var path = '/api/event';

    app.get(path + '/all', event.getAll);
    app.get(path + '/id/:id', event.getOne);
    app.get(path + '/myevent', event.getMyEvent);
    app.post(path + '/create', event.create);
}
