import express from "express";
import cors from "cors";

import chatRoutes from "./routes/chatRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import auditRoutes from "./routes/auditRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Internal Service Agent Running",
  });
});

app.use("/api/chat", chatRoutes);

app.use("/api/tickets", ticketRoutes);

app.use("/api/audit", auditRoutes);

export default app;