const jokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.post("/api/jokes/new", jokeController.create);
    app.get("/api/jokes", jokeController.getAll);
    app.get("/api/jokes/random", jokeController.random);
    app.get("/api/jokes/:id", jokeController.getOne);
    app.delete("/api/jokes/delete/:id", jokeController.delete);
    app.put("/api/jokes/update/:id", jokeController.update);
}