var event = require('../controllers/event.controller');

module.exports = (app) => {
    var path = '/event';

    app.get(path + '/all', event.getAll);
    app.get(path + '/:id', event.getOne);
    app.get(path + '/findbyuser/:username', event.getUserEvent);
    app.post(path + '/create', event.create);

    // app.post(path + '/edit/:username', user.editUser);
    app.get(path + '/remove/:id', event.removeEvent);
}
