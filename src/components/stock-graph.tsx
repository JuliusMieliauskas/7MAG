"use client"

import { HistoricalPrice } from "@/lib/types/historicalPrice"
import { X } from "lucide-react"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  Legend,
  XAxis,
} from "recharts"

type StockGraphProps = {
  historicalPrices: HistoricalPrice[]
  positive: boolean
}

export function StockGraph({ historicalPrices, positive }: StockGraphProps) {
  return (
    <ResponsiveContainer width="100%" aspect={5} className="mt-2">
      <LineChart
        data={historicalPrices}
        margin={{
          right: 5,
          left: 5,
        }}
      >
        <XAxis dataKey="date" hide />
        <YAxis type="number" domain={["auto", "auto"]} hide />
        <Line
          strokeWidth={3}
          dot={false}
          type="monotone"
          dataKey="close"
          stroke={positive ? `#82ca9d` : `#ff0000`}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
