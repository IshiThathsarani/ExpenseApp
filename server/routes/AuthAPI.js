const Router = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const router = Router();

router.post("/register",async (req, res) => {
    
    const { email, password, firstName, lastName } = req.body; //get all from data
   
    
    const userExists = await User.findOne({email});  //check if user exists
    if(userExists){
        res.status(406).json({message: " User already exists." });
        return;
    }

    //hash password
    const saltRounds = 10;
    const salt =  bcrypt.genSaltSync(saltRounds);
    const hashedPassword =  bcrypt.hashSync(password, salt);
    
    const user = await User({ email, password: hashedPassword, firstName, lastName }); //create user
    
    await user.save(); //save user to database
    res.status(201).json({message: "User Created Successfully"}); //store user in database
});

exports = module.exports = router;
