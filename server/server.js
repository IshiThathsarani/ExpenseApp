const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const PORT = 4000
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://ishini:ishini99@transaction.u2routz.mongodb.net/?retryWrites=true&w=majority"
    );
console.log("MongoDB is connected successfully");

app.get('/', (req, res) => { //get request
    res.send('Hello World');
});

app.post('/transaction', (req, res) => {  //post request
    const {amount, detail, date} = req.body
    res.json({msg: "Transaction is added"});
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost: 4000" )
});