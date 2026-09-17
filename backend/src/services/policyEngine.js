import { policies } from "../data/policies.js";

const keywordMap = {
  password: ["password", "locked", "lockout", "login failed"],
  vpn: ["vpn", "credentials expired", "remote access"],
  laptop: [
    "laptop",
    "screen",
    "hardware",
    "replacement",
    "dead",
    "flickering",
  ],
  software: ["software", "install", "application", "extension"],
  printer: ["printer", "paper jam", "print"],
  email: ["mailbox", "email", "quota"],
  wifi: ["wifi", "wi-fi", "guest"],
  expense: ["expense", "finance tool"],
  security: ["phishing", "malware", "security", "unauthorized"],
  equipment: ["monitor", "home office", "remote work"],
};

export const findRelevantPolicy = (message) => {
  const lower = message.toLowerCase();

  for (const [category, keywords] of Object.entries(keywordMap)) {
    if (keywords.some((word) => lower.includes(word))) {
      const policy = policies.find((p) => p.category === category);

      return policy || null;
    }
  }

  return null;
};