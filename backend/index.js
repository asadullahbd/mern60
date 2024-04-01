const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./model/user.model.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://asadMern60:asadbdMern60-@clusterformern60minutes.whuunwm.mongodb.net/mern60")
.then(()=>{
    console.log("MongoDB is connected");
    app.listen(4000,()=>{
        console.log("server is listening at http://localhost:4000");
    })
})
.catch((error)=>{
    console.log(error);
})

app.get("/users",async (req,res)=>{
    try {
        const allUser = await User.find({});
        res.json(allUser);
    } catch (error) {
        console.log(error);
    }
})

app.post("/addUser", async (req,res)=>{
    try {
        const newUser = req.body;
        await User.create(newUser);
    } catch (error) {
        error
    }
})