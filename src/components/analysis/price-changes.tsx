import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { formatPercentage } from "@/lib/helpers"

export function PerformanceTable(params: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 justify-between p-4 lg:p-6">
        <CardTitle className="text-xl md:text-3xl">Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-4">
          <ChangeField period="5D" priceChange={params["5D"]} />
          <ChangeField period="1M" priceChange={params["1M"]} />
          <ChangeField period="3M" priceChange={params["3M"]} />
          <ChangeField period="6M" priceChange={params["6M"]} />
          <ChangeField period="1Y" priceChange={params["1Y"]} />
          <ChangeField period="3Y" priceChange={params["3Y"]} />
        </div>
      </CardContent>
    </Card>
  )
}

function ChangeField(params: { period: string; priceChange: number }) {
  return (
    <div
      className={`flex flex-col text-sm border rounded-lg bg-opacity-30 p-1 justify-center items-center ${
        params.priceChange < 0 ? "bg-red-400" : "bg-green-500"
      }`}
    >
      <div className="text-xs">{params.period}</div>
      <div
        className={`font-semibold ${
          params.priceChange < 0 ? "text-red-500" : "text-green-700"
        }`}
      >
        {formatPercentage(params.priceChange)}
      </div>
    </div>
  )
}
