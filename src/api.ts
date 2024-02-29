const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  const res = await fetch(`${BASE_URL}/coins`);
  const json = await res.json();
  return json;
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export async function fetchCoinTickers(coinId: string) {
  const url = `${BASE_URL}/tickers/${coinId}`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;

  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((res) => res.json());
}
