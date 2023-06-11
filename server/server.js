const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./database/mongodb.js");

const TransactionsAPI = require("./routes/TransactionAPI.js");
const AuthAPI = require("./routes/AuthAPI.js");

const PORT = 4000
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { //get request
    res.send('Hello World');
});

app.use('/transaction', TransactionsAPI);
app.use('/auth', AuthAPI);

connect();



app.listen(PORT, () => {
    console.log("Server is running at http://localhost: 4000" )
});