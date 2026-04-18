export default async function handler(req, res) {
  const targetUrl = 'https://fapi.binance.com/fapi/v1/premiumIndex?symbol=BTCUSDT';
  try {
    const response = await fetch(targetUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Proxy failed' });
  }
}
