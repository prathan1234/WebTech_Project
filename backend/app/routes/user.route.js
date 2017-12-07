import passport from 'passport';

var user = require('../controllers/user.controller');

module.exports = (app) => {
    var path = '/api/user';

    app.get(path + '/getuser', user.getUsers);
    app.post(path + '/signup', user.create);

    app.route('/login')
        .get(user.login)
        .post(passport.authenticate('local', {
            successRedirect: '/home',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.post('/logout', user.logout);

}
