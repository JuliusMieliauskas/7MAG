export type HistoricalPrice = {
  date: Date
  close: number
}

export type EarningEntry = {
  date: Date
  actual: number
  estimated: number
}

export type DividendEntry = {
  dividend: number
  date: string | Date
}
