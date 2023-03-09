const express = require("express")
const router = express.Router()
const users = require("../model/userSchema")
const verify=require('../Authorization/auth')

router.patch("/edit/:id", verify, async(req,res)=>{
    console.log(req.params, "aklgjhagiukjh");
    try{       
        const updatedData = await users.updateOne({_id: req.params.id}, req.body)
        console.log(updatedData);
        res.json({
            message: "user updated successfully"
        })

    }catch(e){
        res.status(404).json({           
            error: "There is no contact with that id",
            message: e.message        
        })
    }
})

module.exports = router