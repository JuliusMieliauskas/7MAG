"use client"

import { Button } from "@/components/ui/button"
import { CompanyLogo } from "@/components/company_logo"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center w-full w-5/6 md:w-3/4">
      <h1 className="text-3xl lg:text-5xl text-center xl:text-7xl font-extrabold tracking-tight">
        All metrics in one place
      </h1>
      <p className="text-lg lg:text-xl text-center mt-4 md:mt-6 mb-4 md:mb-6 text-muted-foreground">
        Analyze magnificent 7 stocks in detail with key financial metrics in one
        place.
      </p>
      <Button
        variant="default"
        size="xl"
        onClick={() => router.push("/analysis")}
      >
        Get Started
      </Button>
      <Logos />
    </div>
  )
}

function Logos(props: { height?: number }) {
  return (
    <>
      <div className="flex flex-wrap justify-center w-3/4 items-center mt-12 gap-x-12 gap-y-8 hidden md:flex">
        <CompanyLogo company="goog" />
        <CompanyLogo company="tsla" />
        <CompanyLogo company="amzn" />
        <CompanyLogo company="meta" />
        <CompanyLogo company="aapl" />
        <CompanyLogo company="msft" />
        <CompanyLogo company="nvda" />
      </div>
      <div className="flex flex-wrap justify-center w-3/4 items-center mt-12 gap-x-12 gap-y-8 md:hidden">
        <CompanyLogo company="goog" height={20} />
        <CompanyLogo company="tsla" height={20} />
        <CompanyLogo company="amzn" height={20} />
        <CompanyLogo company="meta" height={20} />
        <CompanyLogo company="aapl" height={20} />
        <CompanyLogo company="msft" height={20} />
        <CompanyLogo company="nvda" height={20} />
      </div>
    </>
  )
}
