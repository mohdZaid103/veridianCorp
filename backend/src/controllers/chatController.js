import Chat from "../models/chat.model.js";
import Ticket from "../models/ticket.model.js";
import AuditLog from "../models/AuditLog.model.js";

import { findRelevantPolicy } from "../services/policyEngine.js";
import { analyzeRequest } from "../services/geminiService.js";

export const processChat = async (req, res) => {
  try {
    const { employee, email, message } = req.body;

    const policy = findRelevantPolicy(message);

    const aiResponse = await analyzeRequest(
      message,
      policy
    );

    await Chat.create({
      userMessage: message,
      agentResponse: aiResponse.response,
    });

    const ticket = await Ticket.create({
      employee,
      email,
      request: message,
      category: aiResponse.category,
      priority: aiResponse.priority,
      status: aiResponse.status,
      action: aiResponse.action,
      source: aiResponse.source,
    });

    await AuditLog.create({
      employee,
      query: message,
      decision: aiResponse.action,
      sourceUsed: aiResponse.source,
    });

    return res.status(200).json({
      success: true,
      ticket,
      response: aiResponse,
      policy,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};