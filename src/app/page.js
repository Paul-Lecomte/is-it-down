import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkWebsite = async () => {
    if (!url) return;
    try {
      const { data } = await axios.post("../../utils/check.js", { url });
      setResult(data);
    } catch (err) {
      setResult({ status: "down", error: err.message });
    }
  };
  return (
    <div></div>
  );
}
