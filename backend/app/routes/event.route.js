var event = require('../controllers/event.controller');

module.exports = (app) => {
    var path = '/event';

    app.get(path + '/all', event.getAll);
    app.get(path + '/:id', event.getOne);
    app.get(path + '/:author', event.getUserEvent);
    // app.get(path + '/event-reg', event.getEventRegister);
    app.post(path + '/create', event.create);
}
