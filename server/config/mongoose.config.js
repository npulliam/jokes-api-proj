const mongoose = require("mongoose");

module.exports = (dbName) => {
    mongoose.connect(`mongodb://localhost/${dbName}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
    useFindAndModify: false,
    })
	    .then(() => console.log(`Established connection to ${dbName} database`))
	    .catch(err => console.log(`Error connecting to the ${dbName} database`, err));
};

