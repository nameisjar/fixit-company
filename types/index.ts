import type { Component } from 'vue'

export interface Service {
  slug: string
  title: string
  navTitle: string
  shortDescription: string
  description: string
  icon: Component
  features: string[]
  benefits: string[]
  process: string[]
  audiences: string[]
  ctaText: string
}

export interface FaqItem { question: string; answer: string }

export interface PortfolioItem {
  slug: string
  title: string
  category: string
  location: string
  description: string
  status: 'placeholder'
  services: string[]
}
