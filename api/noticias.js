export default async function handler(req, res) {
  try {
    const apiKey = process.env.GNEWS_API_KEY;

    if (!apiKey) {
      console.error("GNEWS_API_KEY não definida");
      return res.status(500).json({ error: "API Key não configurada" });
    }

    const url = `https://gnews.io/api/v4/search?q=golpes%20digitais&lang=pt&country=br&max=5&apikey=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error("Erro HTTP:", response.status);
      return res.status(response.status).json({ error: "Erro ao buscar notícias" });
    }

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json(data);

  } catch (err) {
    console.error("Erro interno:", err);
    return res.status(500).json({ error: "Erro interno ao buscar notícias" });
  }
}
