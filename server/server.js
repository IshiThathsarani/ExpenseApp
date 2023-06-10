const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const TransactionsAPI = require("./routes/TransactionAPI.js");
const connect = require("./database/mongodb.js");

const PORT = 4000
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { //get request
    res.send('Hello World');
});
app.use('/transaction', TransactionsAPI);

connect();



app.listen(PORT, () => {
    console.log("Server is running at http://localhost: 4000" )
});