const express = require("express")
const router = express.Router()
const users = require("../model/userSchema")
const verify=require('../Authorization/auth')

router.get("/allusers", verify,  async (req, res)=>{
    try{
        const allcontacts = await users.find()
        console.log(allcontacts);
        return res.status(200).json(allcontacts)
    }catch(e){
        return res.status(400).json({
            message:e.message
        });
    }
})

module.exports = router