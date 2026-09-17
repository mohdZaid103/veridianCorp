export default function ResponseCard({ response }) {
  if (!response) {
    return (
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            AI Response
          </h3>

          <p className="text-slate-400 mt-2">
            Submit a request to see analysis,
            policy reasoning and action.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h2 className="text-xl font-bold mb-5">
        AI Agent Analysis
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Category
          </span>

          <span>{response.category}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Priority
          </span>

          <span>{response.priority}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Status
          </span>

          <span>{response.status}</span>
        </div>

      </div>

      <div className="mt-6 p-4 rounded-lg bg-slate-700">
        <h3 className="font-semibold mb-2">
          Recommended Action
        </h3>

        <p>{response.action}</p>
      </div>

      <div className="mt-4 p-4 rounded-lg bg-slate-700">
        <h3 className="font-semibold mb-2">
          Agent Response
        </h3>

        <p>{response.response}</p>
      </div>

      <div className="mt-4">
        <span className="px-3 py-1 rounded-full bg-blue-600 text-sm">
          {response.source}
        </span>
      </div>
    </div>
  );
}