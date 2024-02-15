"use server"

export async function getEarnings(ticker: string) {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/earnings-surprises/${ticker}?apikey=${process
        .env.API_KEY!}`
    )

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()
    if (data === undefined || data.length === 0) {
      return []
    }
    return data.map((d: any) => ({
      date: d.date,
      actual: d["actualEarningResult"],
      estimated: d["estimatedEarning"],
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}
