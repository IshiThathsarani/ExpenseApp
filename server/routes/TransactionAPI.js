// import {Router} from "express";
const Router = require("express");
const Transaction = require("../models/transaction.js");


const router = Router();

router.get('/', async (req, res) => { 
    const transactions = await Transaction.find({}).sort({createdAt: -1});  //finds all the transactions. -1 is used to sort in latest to oldest  
    res.json({data:transactions});
});

router.post('/', async (req, res) => {  //post request
    const {amount, detail, date} = req.body;
    const transaction = new Transaction({
        amount, 
        detail, 
        date
    });
    await transaction.save();
    res.json({msg: "Transaction is added successfully"});
});

router.delete('/:id', async (req, res) => {  //delete request
    await Transaction.deleteOne({ _id: req.params.id}); // get the id
    res.json({msg: "Transaction is deleted successfully"}); 
});

router.patch('/:id', async (req, res) => {  //patch request
    await Transaction.updateOne({ _id: req.params.id}, {$set: req.body}); //{$set: req.body} is used to get the data and update it
    res.json({msg: "Transaction is updated successfully"});
});
exports = module.exports = router;
