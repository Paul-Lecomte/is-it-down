import https from "https";

export async function POST(req) {
    const { url } = await req.json();
    if (!url) return Response.json({ error: "URL is required" }, { status: 400 });

    const options = {
        method: 'GET',
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        },
    };

    try {
        const response = await new Promise((resolve, reject) => {
            https.request(url, options, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    resolve({ status: res.statusCode, body: data });
                });
            }).on("error", (error) => {
                reject(error);
            }).end();
        });

        return Response.json({ status: response.status === 200 ? "up" : "down", code: response.status });
    } catch (error) {
        return Response.json({ status: "down", error: error.message });
    }
}