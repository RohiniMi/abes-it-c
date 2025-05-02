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
app.listen(9800, () => console.log(`Server is running.`))