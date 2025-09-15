import type React from "react"
export interface NavItem {
  href: string
  label: string
}

export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

export interface PortfolioItem {
  title: string
  description: string
  image: string
  stat: string
}
