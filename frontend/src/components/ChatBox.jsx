import { useEffect, useState } from "react";
import api from "../services/api";

export default function ChatBox({
  selectedRequest,
  onResponse,
}) {
  const [employee, setEmployee] =
    useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (selectedRequest) {
      setEmployee(selectedRequest.employee);
      setEmail(selectedRequest.email);
      setMessage(selectedRequest.request);
    }
  }, [selectedRequest]);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const { data } = await api.post(
        "/chat",
        {
          employee,
          email,
          message,
        }
      );

      onResponse(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
      <h2 className="text-xl font-bold mb-4">
        Chat With Agent
      </h2>

      <input
        value={employee}
        onChange={(e) =>
          setEmployee(e.target.value)
        }
        placeholder="Employee Name"
        className="w-full mb-3 p-3 rounded bg-slate-700"
      />

      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="Employee Email"
        className="w-full mb-3 p-3 rounded bg-slate-700"
      />

      <textarea
        rows="5"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        className="w-full mb-4 p-3 rounded bg-slate-700"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 px-5 py-3 rounded-lg"
      >
        {loading
          ? "Processing..."
          : "Send Request"}
      </button>
    </div>
  );
}