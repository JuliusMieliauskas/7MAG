"use server"

import { getMarketCap } from "./mc"
import { getHistoricalPrices } from "./historical-stock-price"
import { getEarnings } from "./earnings"
import { getDividends } from "./dividends"
import { getQuote } from "./quote"
import { getPriceChanges } from "./stock-price-change"

export async function getCompanyData(ticker: string) {
  const currentDate = new Date()
  const oneMonthAgo = new Date(currentDate)
  oneMonthAgo.setMonth(currentDate.getMonth() - 1)
  const [marketCap, historicalPrice, earnings, dividends, quote, priceChanges] =
    await Promise.all([
      getMarketCap(ticker),
      getHistoricalPrices(ticker, oneMonthAgo, currentDate),
      getEarnings(ticker),
      getDividends(ticker),
      getQuote(ticker),
      getPriceChanges(ticker),
    ])

  return {
    marketCap,
    historicalPrice,
    earnings,
    dividends,
    quote,
    priceChanges,
  }
}
