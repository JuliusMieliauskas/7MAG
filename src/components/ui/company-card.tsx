import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatMarketCap, formatPriceChange } from "@/lib/helpers"
import { StockGraph } from "../stock-graph"
import type { HistoricalPrice } from "@/lib/types/historicalPrice"
import {
  mockHistoricalStockPrice,
  mockHistoricalStockPrice2,
  mockPriceChange,
} from "@/data/mock/historical-stock-price-mock"
import { redirect } from "next/navigation"
import Link from "next/link"

export type CompanyCardProps = {
  symbol: string
  marketCap: number
  priceChanges: any
  historicalPrices: HistoricalPrice[]
  className?: string
}

export function CompanyCard(params: CompanyCardProps) {
  const priceChange = params.priceChanges["1M"] ?? mockPriceChange()
  const historicalPricesReversed = params.historicalPrices.reverse()
  return (
    <Link href={`/analysis/${params.symbol}`}>
      <Card className={params.className}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 lg:p-6 lg:pb-3">
          <CardTitle>{params.symbol.toUpperCase()}</CardTitle>
          <CardDescription className="md:text-md">
            {formatMarketCap(params.marketCap)}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div
            className={`md:text-sm md:font-semibold ${
              priceChange > 0 ? "text-success-foreground" : "text-red-500"
            }`}
          >
            Last Month: {formatPriceChange(priceChange)}
            {params.historicalPrices && (
              <StockGraph
                historicalPrices={historicalPricesReversed}
                positive={priceChange && priceChange > 0}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
