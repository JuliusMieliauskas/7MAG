"use server"

export async function getHistoricalPrices(
  ticker: string,
  from: Date,
  to: Date
) {
  try {
    let fromStr = from.toISOString().split("T")[0]
    let toStr = to.toISOString().split("T")[0]

    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=${process
        .env.API_KEY!}&from=${fromStr}&to=${toStr}`
    )

    if (!res.ok) {
      throw new Error(
        "Failed to fetch data: " + res.status + " " + res.statusText
      )
    }

    const data = await res.json()

    return data.historical.map((item: any) => {
      return {
        date: new Date(item.date),
        close: item.close,
      }
    })
  } catch (e) {
    console.error(e)
    return []
  }
}
