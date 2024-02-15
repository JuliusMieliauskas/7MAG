"use client"

import { EarningEntry, HistoricalPrice } from "@/lib/types/historicalPrice"
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis,
  Legend,
  XAxis,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  AreaChart,
} from "recharts"
import { formatEarningDate, formatDateShort } from "@/lib/helpers"
import { Area } from "recharts"

type PriceGraphProps = {
  historicalPrice: HistoricalPrice[]
}

export function PriceGraph({ historicalPrice }: PriceGraphProps) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopPriceGraph historicalPrice={historicalPrice} />
      </div>
      <div className="block md:hidden">
        <h3 className="w-full text-center font-semibold text-base">
          Price Action Last Month
        </h3>
        <MobilePriceGraph historicalPrice={historicalPrice} />
      </div>
    </>
  )
}

function MobilePriceGraph({ historicalPrice }: PriceGraphProps) {
  const positive =
    historicalPrice[0].close > historicalPrice[historicalPrice.length - 1].close
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart
        data={historicalPrice}
        margin={{
          top: 0,
          right: -20,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip
          content={<CustomTooltip />}
          filterNull
          isAnimationActive={false}
          animationDuration={0}
        />
        <XAxis dataKey="date" reversed hide />
        <YAxis
          domain={[
            (dataMin: number) => dataMin * 0.95,
            (dataMax: number) => dataMax * 1.05,
          ]}
          orientation="right"
          //   axisLine={false}
          tick={<CustomYTick />}
        />
        <Area
          type="monotone"
          dataKey="close"
          stroke={`${positive ? "#82ca9d" : "#ff0000"}`}
          strokeWidth={4}
          fill={`${positive ? "#82ca9d" : "#ff0000"}`}
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function DesktopPriceGraph({ historicalPrice }: PriceGraphProps) {
  const positive =
    historicalPrice[0].close > historicalPrice[historicalPrice.length - 1].close
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        data={historicalPrice}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip
          content={<CustomTooltip />}
          filterNull
          isAnimationActive={false}
          animationDuration={0}
        />
        <XAxis
          dataKey="date"
          interval={4}
          reversed
          tickMargin={20}
          tick={<CustomTick />}
        />
        <YAxis
          domain={[
            (dataMin: number) => Math.round(dataMin * 0.98),
            (dataMax: number) => Math.round(dataMax),
          ]}
          orientation="right"
          unit="$"
          tickCount={5}
        />
        <Area
          type="monotone"
          dataKey="close"
          stroke={`${positive ? "#82ca9d" : "#ff0000"}`}
          strokeWidth={4}
          fill={`${positive ? "#82ca9d" : "#ff0000"}`}
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

const CustomTooltip = (params: any) => {
  if (params.active && params.payload && params.coordinate) {
    return (
      <div>
        <p className="text-xs md:text-base">
          {`${formatEarningDate(params.payload[0].payload.date)}: ${
            params.payload[0].payload.close
          }`}
          $
        </p>
      </div>
    )
  }
  return null
}

const CustomTick = (props: any) => {
  const { index, x, y, payload } = props

  return (
    <>
      <g transform={`translate(${x},${y})`} className="hidden md:block">
        <text
          textAnchor="middle"
          fill="#666"
          className="text-xs sm:text-sm md:text-md lg:text-lg"
        >
          {formatEarningDate(payload.value)}
        </text>
      </g>
    </>
  )
}

const CustomMobileTick = (props: any) => {
  const { x, y, payload } = props

  return (
    <>
      <g transform={`translate(${x},${y})`} className="hidden md:block">
        <text
          textAnchor="middle"
          fill="#666"
          className="text-xs sm:text-sm md:text-md lg:text-lg"
        >
          {formatEarningDate(payload.value)}
        </text>
      </g>
    </>
  )
}

const CustomYTick = (props: any) => {
  const { index, x, y, payload } = props

  return (
    <>
      <g transform={`translate(${x},${y})`}>
        <text
          textAnchor="start"
          fill="#666"
          className="text-[10px] sm:text-sm md:text-md lg:text-lg"
        >
          {payload.value.toFixed()}$
        </text>
      </g>
    </>
  )
}
