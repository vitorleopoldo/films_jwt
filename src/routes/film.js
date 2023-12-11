const routes = require("../controllers/film.controller");
const middleware = require("../middleware/auth.middleware");

function FilmRoutes(app) {
    app.route('/film').post(middleware.loginRequired, routes.create);
    app.route('/film').get(middleware.loginRequired, routes.list);
    app.route('/film/:id').put(middleware.loginRequired, routes.update);
    app.route('/film/:id').delete(middleware.loginRequired, routes.remove);
}

module.exports = FilmRoutes