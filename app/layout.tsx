import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Que os Caminhos se Cruzem | Para Mariana",
  description: "Uma historia de amor, amadurecimento e transformacao construida especialmente para Mariana.",
  keywords: ["amor", "Mariana", "historia", "dia dos namorados"],
  authors: [{ name: "Winicius Augusto" }],
  openGraph: {
    title: "Que os Caminhos se Cruzem",
    description: "Uma capsula do tempo emocional feita para Mariana.",
    images: ["/photos/og-image.png"],
    type: "website",
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Que os Caminhos se Cruzem",
    description: "Uma historia de amor, amadurecimento e transformacao.",
    images: ["/photos/og-image.png"]
  },
  robots: { index: false, follow: false }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
