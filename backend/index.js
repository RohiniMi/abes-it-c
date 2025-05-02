import express from "express";
import User from "./models/user.js"
import connectDB from "./config/db.js";
const app = express();
app.use(express.json()); //in-built middleware of express
connectDB();
app.post("/user", async (req, res) => {
    try {
        await User.create(req.body);
        res.status(200).json({ "message": "successfull" });
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
})
app.get("/user", async(req, res) => {
    try {
        const users = await User.find();
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
})
app.put("/user/:email",async(req,res)=>{
    try {
        const user = await User.findOneAndUpdate({"email":req.params.email},req.body);
        if(!user) res.status(500).json({ "message": "user not exist" });
        res.status(200).json({ "message": "successfull" });
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
})
app.delete("/user/:email",async(req,res)=>{
    try {
        const user = await User.findOneAndDelete({"email":req.params.email});
        if(!user) res.status(500).json({ "message": "user not exist" });
        res.status(200).json({ "message": "successfull" });
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
})

app.listen(9800, () => console.log(`Server is running.`))