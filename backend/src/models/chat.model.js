import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    userMessage: String,
    agentResponse: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Chat", chatSchema);