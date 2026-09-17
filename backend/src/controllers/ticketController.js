import Ticket from "../models/ticket.model.js";

export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      tickets,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};