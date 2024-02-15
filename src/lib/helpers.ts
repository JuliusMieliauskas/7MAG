import { EarningEntry } from "./types/historicalPrice"

export function formatMarketCap(marketCap: number) {
  if (marketCap === undefined) {
    return "N/A"
  }
  if (marketCap < 1e6) {
    return `$${(marketCap / 1e3).toFixed(2)}K`
  } else if (marketCap < 1e9) {
    return `$${(marketCap / 1e6).toFixed(2)}M`
  } else if (marketCap < 1e12) {
    return `$${(marketCap / 1e9).toFixed(2)}B`
  } else {
    return `$${(marketCap / 1e12).toFixed(2)}T`
  }
}

export function formatBigNumber(marketCap: number) {
  if (marketCap === undefined) {
    return "N/A"
  }
  if (marketCap < 1e6) {
    return `${(marketCap / 1e3).toFixed(2)}K`
  } else if (marketCap < 1e9) {
    return `${(marketCap / 1e6).toFixed(2)}M`
  } else if (marketCap < 1e12) {
    return `${(marketCap / 1e9).toFixed(2)}B`
  } else {
    return `${(marketCap / 1e12).toFixed(2)}T`
  }
}

export function formatPriceChange(priceChange: number) {
  if (priceChange === undefined) {
    return "N/A"
  }
  return priceChange > 0
    ? `+${priceChange.toFixed(2)}%`
    : `${priceChange.toFixed(2)}%`
}

// formats date in a fromat: YY-MM
export function formatDate(date: Date) {
  if (typeof date === "string" || date instanceof String) {
    date = new Date(date.toString())
  }
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0")
  )
}

// formats date in a format YY-MM, where YY is only last two digits of year
export function formatDateShort(date: Date) {
  if (typeof date === "string" || date instanceof String) {
    date = new Date(date.toString())
  }
  // return (
  //   date.getFullYear().toString().slice(2) +
  //   "-" +
  //   (date.getMonth() + 1).toString().padStart(2, "0")
  // )
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const month = months[date.getMonth()]
  const year = date.getFullYear().toString().substr(-2) // Get the last two digits of the year

  return `${month} '${year}`
}

export function getLastEarnings(earnings: EarningEntry[], limit: number) {
  return earnings.slice(0, limit)
}

// formats decimal number to percentage
export function formatPercentage(decimal: number) {
  return decimal.toFixed(2) + "%"
}

// formats date in a format: month - day, but month is displayed as a word
export function formatEarningDate(date: Date) {
  if (typeof date === "string" || date instanceof String) {
    date = new Date(date.toString())
  }
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}
