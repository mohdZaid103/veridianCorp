import { ticketQueue } from "../data/ticketQueue";

export default function TicketQueueTable() {
  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 mt-6">
      <h2 className="text-xl font-bold mb-4">Ticket Queue</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-3 text-left">Ticket ID</th>

              <th className="p-3 text-left">Employee</th>

              <th className="p-3 text-left">Issue Summary</th>

              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {ticketQueue.map((ticket) => (
              <tr key={ticket.ticketId} className="border-b border-slate-700">
                <td className="p-3">{ticket.ticketId}</td>

                <td className="p-3">{ticket.employee}</td>

                <td className="p-3">{ticket.issue}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
      ${
        ticket.status.includes("Resolved")
          ? "bg-green-500/20 text-green-400"
          : ticket.status.includes("Approved")
            ? "bg-green-500/20 text-green-400"
            : ticket.status.includes("Pending")
              ? "bg-yellow-500/20 text-yellow-400"
              : ticket.status.includes("Investigation")
                ? "bg-red-500/20 text-red-400"
                : "bg-slate-600 text-white"
      }
    `}
                  >
                    {ticket.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
