import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatMarketCap, formatBigNumber } from "@/lib/helpers"
import { formatEarningDate } from "@/lib/helpers"

export type KeyMetricsProps = {
  marketCap: number
  eps: number
  pe: number
  yearHigh: number
  yearLow: number
  avgVolume: number
  sharesOutstanding: number
  earningsAnnouncement: string
}

export function KeyMetricsCard(params: KeyMetricsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 justify-between p-4 lg:p-6">
        <CardTitle className="text-xl md:text-3xl">Key Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex grid grid-cols-1 md:grid-cols-2 gap-x-x md:gap-x-8">
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">
              Market Cap
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {formatMarketCap(params.marketCap)}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">EPS</div>
            <div className="text-sm md:text-base text-muted-foreground">
              {params.eps}$
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">
              P/E Ratio
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {params.pe}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">
              Average Volume
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {formatBigNumber(params.avgVolume)}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">
              52 Week High
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {params.yearHigh}$
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">
              52 Week Low
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {params.yearLow}$
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">
              Shares Outstanding
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {formatBigNumber(params.sharesOutstanding)}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="md:text-lg font-semibold tracking-tight">
              Next Earnings Date
            </div>
            <div className="text-sm md:text-base text-muted-foreground">
              {formatEarningDate(new Date(params.earningsAnnouncement))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
