const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const TransactionRouters = require("./routes/TransactionAPI.js");

const PORT = 4000
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { //get request
    res.send('Hello World');
});
app.use('/transaction', TransactionRouters);



mongoose.connect(
    "mongodb+srv://ishini:ishini99@transaction.u2routz.mongodb.net/?retryWrites=true&w=majority"
    );
console.log("MongoDB is connected successfully");





app.listen(PORT, () => {
    console.log("Server is running at http://localhost: 4000" )
});