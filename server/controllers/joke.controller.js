const Joke = require("../models/joke.model");

module.exports = {
    create: function(req, res) {
        console.log("create method executed");

        Joke.create(req.body)
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getAll: function(req, res) {
        console.log("getAll method executed");

        Joke.find()
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getOne: function(req, res) {
        console.log("getOne method executed");

        Joke.findById(req.params.id)
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    delete: function(req, res) {
        console.log("delete method executed");

        Joke.findByIdAndDelete(req.params.id)
            .then((joke) => {
                res.json(joke)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    update: function(req, res) {
        console.log("update method executed");

        Joke.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                res.json(err)
            })
    },
    random: function(req, res) {
        console.log("random method executed");
        Joke.count().exec(function (err, count) {

        var random = Math.floor(Math.random() * count)
    
        Joke.findOne().skip(random)
            .then((joke) => {
                res.json(joke);
            })
            .catch((err) => {
                res.json(err);
            })
        })
    }
}