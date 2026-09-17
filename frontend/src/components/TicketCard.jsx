export default function TicketCard({ ticket }) {
  if (!ticket) return null;

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
      <h2 className="font-bold text-lg mb-3">
        Generated Ticket
      </h2>

      <p>
        <strong>Employee:</strong>{" "}
        {ticket.employee}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {ticket.status}
      </p>

      <p>
        <strong>Priority:</strong>{" "}
        {ticket.priority}
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {ticket.category}
      </p>

      <p>
        <strong>Action:</strong>{" "}
        {ticket.action}
      </p>

      <p>
        <strong>Source:</strong>{" "}
        {ticket.source}
      </p>
    </div>
  );
}