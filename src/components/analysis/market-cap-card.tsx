import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatMarketCap } from "@/lib/helpers"

export type CompanyCardProps = {
  marketCap: number
}

export function MarketCapCard(params: CompanyCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 justify-between p-4 lg:p-6">
        <CardTitle className="text-xl md:text-3xl">Market Cap</CardTitle>
        <CardDescription className="ml-4 text-md md:text-xl md:font-semibold">
          {formatMarketCap(params.marketCap)}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
