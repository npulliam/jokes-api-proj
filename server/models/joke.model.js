const mongoose = require("mongoose");

const minLengthVal = [2, "{PATH} must be at least {MINLENGTH} characters."]

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [10, "{PATH} must be at least {MINLENGTH} characters."],
        },
        punchline: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
        },
    },
    { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;