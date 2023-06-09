const mongoose = require("mongoose");

async function connect() {
    await mongoose.connect(
        "mongodb+srv://ishini:ishini99@transaction.u2routz.mongodb.net/?retryWrites=true&w=majority"
        );
    console.log("MongoDB is connected successfully");
}

exports = module.exports = connect;

