const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Transaction = require("./models/transaction")

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

app.get('/transaction', async (req, res) => { 
    const transactions = await Transaction.find({}).sort({createdAt: -1});  //finds all the transactions. -1 is used to sort in latest to oldest  
    res.json({data:transactions});
});

app.post('/transaction', async (req, res) => {  //post request
    const {amount, detail, date} = req.body;
    const transaction = new Transaction({
        amount, 
        detail, 
        date
    });
    await transaction.save();
    res.json({msg: "Transaction is added successfully"});
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost: 4000" )
});