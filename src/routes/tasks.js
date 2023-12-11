const routes = require("../controllers/task.controller");
const middleware = require("../middleware/auth.middleware");

function TasksRoutes(app) {
    app.route('/task').post(middleware.loginRequired, routes.create);
    app.route('/task').get(middleware.loginRequired, routes.list);
    app.route('/task/:id').put(middleware.loginRequired, routes.update);
    app.route('/task/:id').delete(middleware.loginRequired, routes.remove);
}

module.exports = TasksRoutes