"use client"

import { EarningEntry } from "@/lib/types/historicalPrice"
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
} from "recharts"
import { formatDate, formatDateShort } from "@/lib/helpers"
import { useState } from "react"

type EarningsGraphProps = {
  historicalEarnings: EarningEntry[]
}

export function EarningsGraph({ historicalEarnings }: EarningsGraphProps) {
  const [tooltipActive, setTooltipActive] = useState(false)
  return (
    <ResponsiveContainer height="80%">
      <BarChart
        data={historicalEarnings}
        barGap={4}
        onMouseEnter={() => setTooltipActive(true)}
        onMouseLeave={() => setTooltipActive(false)}
      >
        <XAxis
          dataKey="date"
          reversed
          interval={0}
          tick={<CustomizedLabel />}
        />

        <Tooltip
          active={tooltipActive}
          offset={-20}
          position={{ y: -40 }}
          content={<CustomTooltip />}
        />
        <YAxis hide />
        <Legend content={renderLegend} verticalAlign="top" />
        <Bar dataKey="actual" fill="#82ca9d" />
        <Bar dataKey="estimated" fill="#360891" />
      </BarChart>
    </ResponsiveContainer>
  )
}

const renderLegend = (props: any) => {
  const { payload } = props

  return (
    <ul className="flex flex-row items-center justify-center gap-x-4 mb-4">
      {payload.map((entry: any, index: any) => (
        <li
          key={`item-${index}`}
          className="flex flex-row items-center justify-center"
        >
          <div className="hidden md:block">
            <DynamicCircle color={entry.color} size={12} />
          </div>
          <div className="block md:hidden">
            <DynamicCircle color={entry.color} size={10} />
          </div>
          <div className="text-xs sm:text-sm md:text-md">
            {entry.value.toUpperCase()}
          </div>
        </li>
      ))}
    </ul>
  )
}

const DynamicCircle = ({ color, size }: { color: string; size: number }) => {
  return (
    <svg width={size} height={size} style={{ marginRight: size / 2 }}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}

const CustomizedLabel = (props: any) => {
  const { x, y, stroke, payload } = props

  return (
    <>
      <g transform={`translate(${x},${y + 16})`} className="hidden md:block">
        <text textAnchor="middle" fill="#666" className="text-xs xl:text-sm">
          {formatDateShort(payload.value)}
        </text>
      </g>
      <g transform={`translate(${x},${y + 16})`} className="block md:hidden">
        <text textAnchor="middle" fill="#666" className="text-xs xl:text-sm">
          {formatDateShort(payload.value)}
        </text>
      </g>
    </>
  )
}

const CustomTooltip = (params: any) => {
  if (
    params.active &&
    params.payload &&
    params.coordinate &&
    params.payload.length > 0
  ) {
    return (
      <div className="flex flex-col bg-background rounded-lg p-2 border-4">
        <p className="text-xs md:text-sm">
          {`${formatDateShort(params.payload[0].payload.date)}`}
        </p>
        <p className="text-xs md:text-sm">
          Actual: {params.payload[0].payload.actual}$
        </p>
        <p className="text-xs md:text-sm">
          Estimated: {params.payload[0].payload.estimated}$
        </p>
      </div>
    )
  }
  return null
}
