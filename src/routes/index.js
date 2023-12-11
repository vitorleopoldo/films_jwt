const AuthRoutes = require("./auth");
const FilmRoutes = require("./film");
const TasksRoutes = require("./tasks")

const routes = function (app) {
    TasksRoutes(app)
    AuthRoutes(app)
    FilmRoutes(app)
}

module.exports = routes;