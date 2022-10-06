import { ExchangeDetail } from "../type/echange-details.entity"

export async function getExchangeDetails(exchangeId: string) {
  const response = await fetch(`https://api.coinpaprika.com/v1/exchanges/${exchangeId}`)
  const exchangeDetail: ExchangeDetail[] = await response.json()
  return exchangeDetail
}