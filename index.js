const express = require("express")
const app = express()
const PORT = process.env.PORT || 4001
const cors = require("cors")
const conn = require("./connection/connection")
conn()
const signupRoute = require("./routes/signup")
const signinRoute = require("./routes/signin")
const getAllUsers = require("./Routes/GetUsers")
const editProfile = require("./Routes/EditProfile")


// MIDDLEWARE FOR THE CROSS WEB COMMUNICATION
app.use(cors())

// ROUTING THE THE DIFFERENT COMPONENTS OF API'S
app.use("/", signupRoute)
app.use("/", signinRoute)
app.use("/", getAllUsers)
app.use("/", editProfile)


app.get("/",(req, res)=>{
    res.send("working")
})
  
app.listen(PORT, ()=>{console.log(`Server is running at port ${PORT}`);})