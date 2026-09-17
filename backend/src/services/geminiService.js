import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();
console.log("GROQ KEY:", process.env.GROQ_API_KEY);
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const analyzeRequest = async (
  employeeMessage,
  policy
) => {
  const prompt = `
You are an enterprise IT support agent.

Policy:
${policy ? policy.content : "No policy found"}

Employee Request:
${employeeMessage}

Return ONLY valid JSON:

{
  "category":"",
  "priority":"",
  "status":"",
  "action":"",
  "response":"",
  "source":""
}
`;

  const completion =
    await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
    });

  const text =
    completion.choices[0].message.content;

  return JSON.parse(text);
};