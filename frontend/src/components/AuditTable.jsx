export default function AuditTable({ logs }) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
      <h2 className="font-bold text-lg mb-4">
        Audit Logs
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-slate-600">
              <th className="p-2">Employee</th>
              <th className="p-2">Decision</th>
              <th className="p-2">Source</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log) => (
              <tr
                key={log._id}
                className="border-b border-slate-700"
              >
                <td className="p-2">
                  {log.employee}
                </td>

                <td className="p-2">
                  {log.decision}
                </td>

                <td className="p-2">
                  {log.sourceUsed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}