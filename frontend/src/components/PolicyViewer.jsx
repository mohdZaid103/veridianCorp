export default function PolicyViewer({
  policy,
}) {
  if (!policy) return null;

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
      <h2 className="font-bold text-lg mb-3">
        Policy Used
      </h2>

      <p className="font-semibold">
        {policy.id} - {policy.title}
      </p>

      <p className="mt-3 text-slate-300">
        {policy.content}
      </p>
    </div>
  );
}