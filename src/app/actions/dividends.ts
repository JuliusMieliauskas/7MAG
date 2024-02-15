"use server"

export async function getDividends(ticker: string) {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${ticker}?apikey=${process
        .env.API_KEY!}`
    )

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()
    if (data === undefined || data.historical.length === 0) {
      return []
    }
    return data.historical.map((d: any) => ({
      date: d.date,
      dividend: d.dividend,
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}
