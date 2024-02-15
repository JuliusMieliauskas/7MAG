import GoogleLogo from "../static/google_logo.webp"
import TeslaLogo from "../static/tesla_logo.webp"
import TeslaLogoDark from "../static/tesla_logo_dark.webp"
import AmazonLogoDark from "../static/amazon_logo_dark.webp"
import AmazonLogo from "../static/amazon_logo.webp"
import MetaLogo from "../static/meta_logo.webp"
import MetaLogoDark from "../static/meta_logo_dark.webp"
import AppleLogo from "../static/apple_logo.webp"
import AppleLogoDark from "../static/apple_logo_dark.webp"
import MicrosoftLogo from "../static/microsoft_logo.webp"
import MicrosoftLogoDark from "../static/microsoft_logo_dark.webp"
import NvidiaLogo from "../static/nvidia_logo.webp"
import NvidiaLogoDark from "../static/nvidia_logo_dark.webp"
import Logo from "../static/logo.webp"
import LogoDark from "../static/logo_dark.webp"
import Image from "next/image"

export function CompanyLogo(props: { company: string; height?: number }) {
  return (
    <>
      <Image
        priority={true}
        src={getLogoLight(props.company)}
        alt={`${props.company} Logo`}
        height={props.height ?? 42}
        className="block dark:hidden"
      />
      <Image
        priority={true}
        src={getLogoDark(props.company)}
        alt={`${props.company} Logo`}
        height={props.height ?? 42}
        className="hidden dark:block"
      />
    </>
  )
}

function getLogoLight(company: string) {
  if (company === "tsla") {
    return TeslaLogo
  }
  if (company === "amzn") {
    return AmazonLogo
  }
  if (company === "meta") {
    return MetaLogo
  }
  if (company === "aapl") {
    return AppleLogo
  }
  if (company === "msft") {
    return MicrosoftLogo
  }
  if (company === "goog" || company === "googl") {
    return GoogleLogo
  }
  if (company === "nvda") {
    return NvidiaLogo
  }
  return Logo
}

function getLogoDark(company: string) {
  if (company === "tsla") {
    return TeslaLogoDark
  }
  if (company === "amzn") {
    return AmazonLogoDark
  }
  if (company === "meta") {
    return MetaLogoDark
  }
  if (company === "aapl") {
    return AppleLogoDark
  }
  if (company === "msft") {
    return MicrosoftLogoDark
  }
  if (company === "goog" || company === "googl") {
    return GoogleLogo
  }
  if (company === "nvda") {
    return NvidiaLogoDark
  }
  return LogoDark
}
