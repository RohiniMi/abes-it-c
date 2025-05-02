import express from "express";
import mongoose from "mongoose";
const app = express();
const MONGO_URI = "mongodb+srv://user:admin@cluster0.lqezo5i.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0";
app.use(express.json()); //in-built middleware of express

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const User = mongoose.model("userColl", UserSchema);
// mongoose
//     .connect(MONGO_URI)
//     .then(() => console.log("DB connected Successfully."))
//     .catch(() => console.log("Connection Error"))
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connected Successfully.");
    } catch (error) {
        console.log("Connection Error");
    }
}
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