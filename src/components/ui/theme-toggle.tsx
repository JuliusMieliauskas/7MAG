import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { MoonIcon, SunIcon, HelpCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="secondary" size="icon">
        <HelpCircle className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-100" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (resolvedTheme === "light") {
    return (
      <Button variant="secondary" size="icon" onClick={toggleTheme}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </Button>
    )
  }

  if (resolvedTheme === "dark") {
    return (
      <Button variant="secondary" size="icon" onClick={toggleTheme}>
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    )
  }
}
