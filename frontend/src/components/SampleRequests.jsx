import { sampleRequests } from "../data/sampleRequests";

export default function SampleRequests({
  onSelect,
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
      <h2 className="font-bold text-lg mb-4">
        Assignment Requests
      </h2>

      <div className="grid md:grid-cols-2 gap-2">
        {sampleRequests.map((req) => (
          <button
            key={req.requestId}
            onClick={() => onSelect(req)}
            className="text-left p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
          >
            <p className="font-semibold">
              {req.requestId}
            </p>

            <p className="text-sm text-slate-300">
              {req.employee}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}