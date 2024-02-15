import { companies } from "@/data/companies"
import { getCompanyData } from "@/app/actions/company-data"
import { MarketCapCard } from "@/components/analysis/market-cap-card"
import { getLastEarnings } from "@/lib/helpers"
import { EarningsGraph } from "@/components/analysis/earnings-graph"
import { CompanyLogo } from "@/components/company_logo"
import { formatPercentage } from "@/lib/helpers"
import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react"
import { PriceGraph } from "@/components/analysis/price-graph"
import { KeyMetricsCard } from "@/components/analysis/key-metrics"
import { DividendsChart } from "@/components/analysis/dividends-chart"

interface PageProps {
  params: { companyName: string }
}

export async function generateStaticParams() {
  const routes = companies.map((ticker) => ({
    params: {
      companyName: ticker,
    },
  }))
  return routes
}

export default async function Page({ params }: PageProps) {
  const companyData = await getCompanyData(params.companyName)
  const lastEarnings = getLastEarnings(companyData.earnings, 5)

  return (
    <div className="w-5/6 flex flex-col lg:w-2/3 mt-10 mb-8 md:mt-16 gap-y-4">
      <div className="w-full md:w-1/2 flex justify-center sm:justify-start gap-x-4 md:gap-x-10 items-center mb-4 md:mb-6">
        <div className="block md:hidden">
          <CompanyLogo company={params.companyName} height={20} />
        </div>
        <div className="hidden md:block">
          <CompanyLogo company={params.companyName} height={28} />
        </div>
        <div className="flex flex-col items-end">
          <div className="text-lg md:text-2xl">
            {companyData.quote["price"]}$
          </div>
          <div
            className={`flex ${
              companyData.quote.changesPercentage < 0
                ? "text-red-500"
                : "text-green-500"
            } gap-x-2`}
          >
            <div className="flex text-sm md:text-md">
              <div className="ml-2 sm:block">Today:&nbsp;</div>
              <ArrowBigUpDash
                className={`${
                  companyData.quote.changesPercentage > 0 ? "" : "hidden"
                }`}
                size={18}
              />
              <ArrowBigDownDash
                className={`${
                  companyData.quote.changesPercentage > 0 ? "hidden" : ""
                }`}
              />
              {companyData.quote.change}
            </div>
            <div className="text-sm md:text-md">
              {formatPercentage(companyData.quote.changesPercentage)}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-2 w-full md:p-8">
        <PriceGraph historicalPrice={companyData.historicalPrice} />
      </div>
      <KeyMetricsCard {...companyData.quote} />
      <div className="flex flex-col md:h-72 xl:h-96 2xl:h-[512px] gap-4 md:flex-row">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 md:w-1/2 md:p-8">
          <h3 className="text-xl font-semibold leading-none tracking-tight mb-4 md:mb-6 md:text-2xl lg:text-3xl">
            Earnings
          </h3>
          <EarningsGraph historicalEarnings={lastEarnings} />
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 md:w-1/2 md:p-8">
          <h3 className="text-xl font-semibold leading-none tracking-tight mb-4 md:mb-6 md:text-2xl lg:text-3xl">
            Dividend Per Share
          </h3>
          <DividendsChart dividends={companyData.dividends} />
        </div>
      </div>
    </div>
  )
}
