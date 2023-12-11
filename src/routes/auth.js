const routes = require("../controllers/auth.controller");

function AuthRoutes(app) {
    app.route('/login').post(routes.login);
    app.route('/register').post(routes.signUp);
    
}

module.exports = AuthRoutes