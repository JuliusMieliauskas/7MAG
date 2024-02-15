import NextLogo from "@/static/next_logo.webp"
import TypescriptLogo from "@/static/typescript_logo.webp"
import TailwindLogo from "@/static/tailwind_logo.webp"
import TailwindLogoDark from "@/static/tailwind_logo_dark.webp"
import NextLogoDark from "@/static/next_logo_dark.webp"
import ShadCNLogo from "@/static/shadcn_logo.webp"
import ShadCNLogoDark from "@/static/shadcn_logo_dark.webp"
import Image from "next/image"

export default async function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 py-8 md:w-2/3 gap-y-4">
      <div className="flex flex-col justify-center items-start gap-y-6 w-full">
        <h2 className="w-full text-left border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          7MAG - About
        </h2>
        <p className="leading-7">
          This website is designed to be a simple and easy to use platform for
          users to find the latest financial information about the
          &quot;Magnificent 7&quot; companies.
        </p>
        <div className="leading-7 mt-4">
          The website is built using the following technologies:
          <ul className="my-2 ml-6 list-disc">
            <li>Next.js v14</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li>ShadCN</li>
          </ul>
        </div>
        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-y-4 gap-x-8 md:gap-x-12">
          <Image
            priority={true}
            alt="Next Logo"
            src={NextLogo}
            width={128}
            className="dark:hidden"
          />
          <Image
            priority={true}
            alt="Next Logo"
            src={NextLogoDark}
            width={128}
            className="hidden dark:block"
          />
          <Image
            alt="TS Logo"
            src={TypescriptLogo}
            width={48}
            priority={true}
          />
          <Image
            alt="TW Logo"
            priority={true}
            src={TailwindLogo}
            width={128}
            className="dark:hidden"
          />
          <Image
            alt="TW Logo"
            src={TailwindLogoDark}
            width={128}
            priority={true}
            className="hidden dark:block"
          />
          <Image
            alt="ShadCN Logo"
            src={ShadCNLogo}
            priority={true}
            width={128}
            className="dark:hidden"
          />
          <Image
            alt="ShadCN Logo"
            src={ShadCNLogoDark}
            priority={true}
            width={128}
            className="hidden dark:block"
          />
        </div>
        <div className="leading-7 mt-6">
          Application uses best practices to provide a fast and responsive user
          experience. These include:
          <ul className="my-2 ml-6 list-disc">
            <li>Static Site generation</li>
            <li>Server Actions for data fetching</li>
            <li>Dynamic routing</li>
            <li>Data caching</li>
          </ul>
        </div>
        <div className="flex flex-col w-full">
          <p className="leading-7 mt-4">Website is hosted on Vercel.</p>

          <p className="leading-7">
            Source code:{" "}
            <a
              href="https://github.com/JuliusMieliauskas/7MAG"
              className="font-semibold"
              target="_blank"
            >
              Github
            </a>
          </p>

          <p className="leading-7 text-muted-foreground font-semibold">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/juliusmieliauskas/"
              className="text-blue-700 underline"
              target="_blank"
            >
              Julius Mieliauskas
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
