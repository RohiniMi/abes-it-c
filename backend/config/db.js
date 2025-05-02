import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://user:admin@cluster0.lqezo5i.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connected Successfully.");
    } catch (error) {
        console.log("Connection Error");
    }
}
export default connectDB;