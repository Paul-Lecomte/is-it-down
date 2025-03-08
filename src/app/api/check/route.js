import axios from "axios";

export async function POST(req) {
    const { url } = await req.json();
    if (!url) return Response.json({ error: "URL is required" }, { status: 400 });

    try {
        const response = await axios.get(url, { timeout: 5000 });
        return Response.json({ status: "up", code: response.status });
    } catch (error) {
        return Response.json({ status: "down", error: error.message });
    }
}