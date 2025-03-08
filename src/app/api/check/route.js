import axios from "axios";

export async function POST(req) {
    const { url } = await req.json();
    if (!url) return Response.json({ error: "URL is required" }, { status: 400 });

    try {
        const response = await axios.get(url, {
            timeout: 5000,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.9",
            },
        });
        return Response.json({ status: "up", code: response.status });
    } catch (error) {
        return Response.json({ status: "down", error: error.message });
    }
}