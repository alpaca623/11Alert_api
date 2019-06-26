import mongoose from "mongoose";

const documentSchema = mongoose.Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  content: String,
  author: String,
  createAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("Document", documentSchema);

export default model;
