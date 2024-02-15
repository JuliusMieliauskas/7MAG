import { companies } from "@/data/companies"
import { getMarketCap } from "../actions/mc"
import { getPriceChanges } from "../actions/stock-price-change"
import { getHistoricalPrices } from "../actions/historical-stock-price"
import { CompanyCard } from "@/components/ui/company-card"

async function getCompanyData(ticker: string) {
  const currentDate = new Date()

  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(currentDate.getMonth() - 1)
  const responses = await Promise.all([
    getMarketCap(ticker),
    getPriceChanges(ticker),
    getHistoricalPrices(ticker, oneMonthAgo, currentDate),
  ])

  return {
    symbol: ticker,
    marketCap: responses[0],
    priceChanges: responses[1],
    historicalPrices: responses[2],
  }
}

export default async function Page() {
  const allCompanies = companies.map((company) => getCompanyData(company))
  const companyData = await Promise.all(allCompanies)

  return (
    <div className="flex flex-col justify-center items-center my-8 md:mt-0 w-3/4 lg:w-2/3 xl:w-1/2 space-y-3 md:space-y-8">
      <h1 className="text-2xl lg:text-3xl text-center xl:text-4xl font-extrabold tracking-tight">
        Choose a stock you want to analyze in detail
      </h1>

      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
        {companyData.map((company) => (
          <CompanyCard
            key={company.symbol}
            marketCap={company?.marketCap}
            symbol={company?.symbol}
            priceChanges={company.priceChanges}
            historicalPrices={company.historicalPrices}
          />
        ))}
      </div>
    </div>
  )
}
