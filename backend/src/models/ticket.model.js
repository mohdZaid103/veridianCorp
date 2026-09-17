import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    employee: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    request: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "General",
    },

    priority: {
      type: String,
      default: "Medium",
    },

    status: {
      type: String,
      default: "Open",
    },

    action: {
      type: String,
      default: "",
    },

    source: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ticket", ticketSchema);