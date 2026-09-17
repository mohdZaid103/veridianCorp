import { employeeRequests } from "../data/employeeRequests";

export default function EmployeeRequestsTable({ onSelectRequest }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
      <h2 className="text-2xl font-bold mb-5">
        Employee Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-3 text-left">Request ID</th>
              <th className="p-3 text-left">Employee</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Date Opened</th>
              <th className="p-3 text-left">Request</th>
              <th className="p-3 text-left">Action Taken</th>
            </tr>
          </thead>

          <tbody>
            {employeeRequests.map((req) => (
              <tr
                key={req.requestId}
                onClick={() => onSelectRequest(req)}
                className="border-b border-slate-700 cursor-pointer hover:bg-slate-700 transition"
              >
                <td className="p-3">{req.requestId}</td>
                <td className="p-3">{req.employee}</td>
                <td className="p-3">{req.email}</td>
                <td className="p-3">{req.dateOpened}</td>
                <td className="p-3">{req.request}</td>
                <td className="p-3">{req.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-slate-400 text-sm mt-3">
        Click any request to load it into the chat agent.
      </p>
    </div>
  );
}