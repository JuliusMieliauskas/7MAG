"use server"

export async function getMarketCap(company: string) {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/market-capitalization/${company}?apikey=${process
        .env.API_KEY!}`
    )

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()
    if (
      data === undefined ||
      data.length === 0 ||
      data[0].marketCap === undefined
    ) {
      return { marketCap: undefined }
    }
    return data[0].marketCap
  } catch (e) {
    console.error(e)
    return { marketCap: undefined }
  }
}
