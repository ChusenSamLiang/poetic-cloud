"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Paintbrush as Pinterest, ExternalLink } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const footerLinks = {
  shop: [
    { label: "Wedding Suites", href: "#" },
    { label: "Save the Dates", href: "#" },
    { label: "Custom Stationery", href: "#" },
    { label: "Shop on Etsy", href: SITE_CONFIG.etsyUrl, external: true },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Journal", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Shipping & Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Pinterest, href: "https://pinterest.com", label: "Pinterest" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl tracking-wide text-foreground">
              Join the Cloud
            </h3>
            <p className="mt-3 max-w-md text-muted-foreground">
              Subscribe for exclusive previews, design inspiration, and wedding
              planning tips delivered to your inbox.
            </p>
            <form className="mt-6 flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-xs bg-background"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-3"
          >
            <div>
              <h4 className="font-serif text-sm uppercase tracking-[0.15em] text-foreground">
                Shop
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                      {link.external && <ExternalLink className="h-3 w-3" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm uppercase tracking-[0.15em] text-foreground">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-sm uppercase tracking-[0.15em] text-foreground">
                Resources
              </h4>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 md:flex-row"
        >
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-serif text-xl tracking-wide text-foreground"
            >
              Poetic Cloud
            </Link>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link
              href="https://etsy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Our Etsy Store
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Poetic Cloud. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
