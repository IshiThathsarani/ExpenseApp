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
    await Transaction.findOneAndDelete(req.params.id);
    res.json({msg: "Transaction is deleted successfully"}); 
});

exports = module.exports = router;
