"use client"

import { EarningsGraph } from "@/components/analysis/earnings-graph"
import { mockEarnings } from "@/data/mock/earnings-mock"
import { PriceGraph } from "@/components/analysis/price-graph"
import { mockHistoricalStockPrice3 } from "@/data/mock/historical-stock-price-mock"

export default async function Page() {
  // return <EarningsGraph historicalEarnings={mockEarnings} />
  return <PriceGraph historicalPrice={mockHistoricalStockPrice3} />
}
