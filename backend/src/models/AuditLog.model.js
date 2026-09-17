import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    employee: String,
    query: String,
    decision: String,
    sourceUsed: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AuditLog", auditLogSchema);