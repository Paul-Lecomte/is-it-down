"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkWebsite = async () => {
    if (!url) return;
    try {
      const { data } = await axios.post("/api/check", { url });
      setResult(data);
    } catch (err) {
      setResult({ status: "down", error: err.message });
    }
  };
  return (
      <div className="flex flex-col items-center p-10">
        <h1 className="text-2xl font-bold mb-4">Website Status Checker</h1>
        <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-2 mb-4 w-80 rounded"
        />
        <button onClick={checkWebsite} className="bg-blue-500 text-white px-4 py-2 rounded">
          Test
        </button>
        {result && (
            <div className="mt-4 p-4 border rounded">
              <p>Status: {result.status === "up" ? "✅ Up" : "❌ Down"}</p>
              {result.error && <p className="text-red-500">Error: {result.error}</p>}
            </div>
        )}
      </div>
  );
}
