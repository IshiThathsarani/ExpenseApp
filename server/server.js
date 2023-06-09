const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")

const PORT = 4000
const app = express();

app.use(cors());

mongoose.connect(
    "mongodb+srv://ishini:ishini99@transaction.u2routz.mongodb.net/?retryWrites=true&w=majority"
    );
console.log("MongoDB is connected successfully");

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost: 4000" )
});