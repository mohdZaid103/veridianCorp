VeridianCorp Internal Service Agent
- AI-powered request analysis
- Policy-based decision making
- Employee Requests dashboard
- Ticket Queue management
- Audit logging
- Follow-up question generation
- Security incident escalation
Frontend:
- React
- Tailwind CSS
- Axios

Backend:
- Node.js
- Express

Database:
- MongoDB

LLM:
- Groq
## Quick Start

### Backend

cd backend
npm install
npm run dev

### Frontend

cd frontend
npm install
npm run dev

Frontend: http://localhost:5173
Backend: http://localhost:5000

## Environment Variables

Create backend/.env

PORT=5000
MONGO_URI=<your_mongodb_uri>
GROQ_API_KEY=<your_groq_api_key>
