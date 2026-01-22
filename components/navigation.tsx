"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

import { SITE_CONFIG } from "@/lib/constants"

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#process", label: "Bespoke Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: SITE_CONFIG.etsyUrl, label: "Shop on Etsy", external: true },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wide text-foreground">
            Poetic Cloud
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="ml-4">
              Start Your Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-4 pb-6 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button size="sm" className="mt-2 w-fit">
                  Start Your Project
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
