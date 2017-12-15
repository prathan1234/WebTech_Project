var event_user = require('../controllers/eventuser.controller');

module.exports = (app) => {
    var path = '/eventuser';

    app.get(path + '/all', event_user.getAll);
    app.get(path + '/:event_name', event_user.getUserByEvent);
    app.get(path + '/event/:username', event_user.getEventByUser);
    app.post(path + '/join', event_user.joinEvent);
    app.post(path + '/cancel', event_user.cancelEvent);
}
