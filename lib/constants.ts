import { MessageCircle, Palette, Send } from "lucide-react"

export const SITE_CONFIG = {
  name: "Poetic Cloud",
  description: "Bespoke Wedding Invitations & Custom Stationery",
  etsyUrl: "https://www.etsy.com/shop/PoeticCloud",
  contactEmail: "Poeticclouddesignstudio@gmail.com",
}

export const HERO_CONTENT = {
  badge: "Fine Art Stationery",
  title: "Paper Goods for Life's Most Poetic Moments",
  description: "Handcrafted wedding invitations and bespoke stationery, designed to tell your unique love story with timeless elegance and artisan quality.",
  primaryCta: "Start Your Project",
  secondaryCta: "View Collections",
}

export const PROCESS_CONTENT = {
  badge: "Our Process",
  title: "The Bespoke Experience",
  description: "Creating your custom stationery is a collaborative journey. Here's how we bring your vision to life.",
  steps: [
    {
      id: 1,
      icon: MessageCircle,
      title: "Consultation",
      description: "We begin with a thoughtful conversation to understand your vision, aesthetic preferences, and the story you want to tell through your stationery.",
    },
    {
      id: 2,
      icon: Palette,
      title: "Design",
      description: "Our artisans craft custom concepts tailored to your celebration. We refine every detail until your pieces are perfect.",
    },
    {
      id: 3,
      icon: Send,
      title: "Delivery",
      description: "Your finished stationery arrives beautifully packaged and ready to make a lasting impression on your guests.",
    },
  ],
}
