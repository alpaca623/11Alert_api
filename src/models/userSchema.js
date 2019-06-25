import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    age : Number
});

const model = userSchema.model("User", userSchema);

export default model;