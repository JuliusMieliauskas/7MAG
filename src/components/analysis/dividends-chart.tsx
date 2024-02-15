"use client"

import { DividendEntry } from "@/lib/types/historicalPrice"
import { formatDate, formatDateShort, formatMarketCap } from "@/lib/helpers"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type DividendsChartProps = {
  dividends: DividendEntry[]
}

export function DividendsChart({ dividends }: DividendsChartProps) {
  if (!dividends || dividends.length == 0) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center space-y-0 justify-center p-4 lg:p-6">
          <CardDescription className="ml-4 md:text-xl 2xl:text-xl md:font-semibold text-destructive text-center">
            Company is yet to pay dividends
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <div className="flex flex-col h-64 md:h-44 xl:h-64 2xl:h-96 overflow-y-scroll">
      {dividends.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-2 border-b border-gray-200"
        >
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {formatDateShort(new Date(item.date))}
          </div>
          <div className="text-sm md:text-base font-semibold">
            {item.dividend}$
          </div>
        </div>
      ))}
    </div>
  )
}
