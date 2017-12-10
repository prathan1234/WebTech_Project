import passport from 'passport';

var user = require('../controllers/user.controller');

module.exports = (app) => {
    var path = '/user';

    app.get(path + '/all', user.getAllUsers);
    app.get('/:username', user.getOneUser);
    app.post('/signup', user.create);

    // app.post(path + '/edit/:username', user.editUser);
    // app.get(path + '/remove/:username', user.removeUser);

    ///////////////////////////////////////////////////    
    ////////////////////// Login //////////////////////
    ///////////////////////////////////////////////////

    // app.route('/login')
    //     .get(user.login)
    //     .post(passport.authenticate('local', {
    //         successRedirect: '/home',
    //         failureRedirect: '/login',
    //         failureFlash: true
    //     }));

    // app.route('/login')
    //     .get(user.login)
    //     .post(passport.authenticate('local'));

    app.post('/login', user.login);

    // app.post('/login', passport.authenticate('local'));

    // app.post('/login', user.login);

    app.post('/logout', user.logout);
}
