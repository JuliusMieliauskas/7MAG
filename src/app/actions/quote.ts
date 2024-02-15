"use server"

export async function getQuote(ticker: string) {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/quote-order/${ticker}?apikey=${process
        .env.API_KEY!}`
    )

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()
    return data[0]
  } catch (e) {
    console.error(e)
    return []
  }
}
