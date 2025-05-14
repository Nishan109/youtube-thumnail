declare module 'next/link'
declare module 'next/image'
declare module 'lucide-react'
declare module 'next' {
  interface Metadata {
    metadataBase?: URL
    title?: string | {
      default: string
      template: string
    }
    description?: string
    keywords?: string[]
    authors?: Array<{
      name: string
      url?: string
    }>
    alternates?: {
      canonical?: string
    }
    openGraph?: {
      title?: string
      description?: string
      url?: string
      type?: string
      locale?: string
      siteName?: string
      publishedTime?: string
      authors?: string[]
      tags?: string[]
      images?: Array<{
        url: string
        width?: number
        height?: number
        alt?: string
      }>
    }
    twitter?: {
      card?: string
      title?: string
      description?: string
      images?: string[]
      creator?: string
    }
  }
} 