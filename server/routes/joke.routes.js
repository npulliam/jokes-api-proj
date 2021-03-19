const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.post("/api/jokes/new", JokeController.create);
    app.get("/api/jokes", JokeController.getAll);
    app.get("/api/jokes/random", JokeController.random);
    app.get("/api/jokes/:id", JokeController.getOne);
    app.delete("/api/jokes/delete/:id", JokeController.delete);
    app.put("/api/jokes/update/:id", JokeController.update);
}