import { useEffect, useState } from "react";

import api from "./services/api";
import EmployeeRequestsTable from "./components/EmployeeRequestsTable";
import TicketQueueTable from "./components/TicketQueueTable";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import TicketCard from "./components/TicketCard";
import PolicyViewer from "./components/PolicyViewer";
import ResponseCard from "./components/ResponseCard";


export default function App() {
  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const [ticket, setTicket] = useState(null);

  const [policy, setPolicy] = useState(null);

  const [response, setResponse] =
    useState(null);

  const [logs, setLogs] = useState([]);

  const [tickets, setTickets] = useState([]);

  const fetchAuditLogs = async () => {
    try {
      const { data } = await api.get(
        "/audit"
      );

      setLogs(data.logs);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTickets = async () => {
    try {
      const { data } = await api.get(
        "/tickets"
      );

      setTickets(data.tickets);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuditLogs();
    fetchTickets();
  }, []);

  const handleAgentResponse = (data) => {
    setTicket(data.ticket);

    setPolicy(data.policy);

    setResponse(data.response);

    fetchAuditLogs();

    fetchTickets();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto p-6">

        <Header />

        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          <ChatBox
            selectedRequest={
              selectedRequest
            }
            onResponse={
              handleAgentResponse
            }
          />

          <ResponseCard
            response={response}
          />

        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          <TicketCard ticket={ticket} />

          <PolicyViewer
            policy={policy}
          />

        </div>
        <EmployeeRequestsTable
  onSelectRequest={setSelectedRequest}
/>

<TicketQueueTable />
      </div>
    </div>
  );
}