const mongoose = require("mongoose");

const conn = function () {
    const conn = mongoose.connect(process.env.CONNECTION_DB);

    mongoose.connection.on("connected", function(ref) {
        console.log('Mongo server connected')
    })

    mongoose.connection.on("error", function(err) {
        console.log('Mongo server failed');
        console.log(err)
    })
    return conn;
}

module.exports = conn;