const express = require("express");
const cors = require("cors");
const port = 8000;
const dbName = "jokes_api";

require("./config/mongoose.config")(dbName);

const app = express();

app.use(express.json());

require("./routes/joke.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);