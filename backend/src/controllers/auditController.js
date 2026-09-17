import AuditLog from "../models/AuditLog.model.js";

export const getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      logs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};