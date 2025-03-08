import axios from "axios";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "URL is required" });

    try {
        const response = await axios.get(url, { timeout: 5000 });
        res.json({ status: "up", code: response.status });
    } catch (error) {
        res.json({ status: "down", error: error.message });
    }
}