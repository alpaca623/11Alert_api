import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", (e) => console.log(`error => ${e}`));

db.once("open", () => console.log('✅ success db connection!'));
