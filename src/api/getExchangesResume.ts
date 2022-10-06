import { ExchangeResume } from "../type/exchange-resume.entity"

export async function getExchangesResume() {
  const response = await fetch("https://api.coinpaprika.com/v1/coins/doge-dogecoin/exchanges")
  const restaurant: ExchangeResume[] = await response.json()
  return restaurant
}