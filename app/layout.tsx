import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Toda mudança tem um começo.",
  description:
    "Um presente mais do que especial para Mariana, feito como uma demonstração de amor e carinho.",
  keywords: ["amor", "Mariana", "historia", "dia dos namorados"],
  authors: [{ name: "Winicius Augusto" }],
  openGraph: {
    title: "Toda mudança tem um começo.",
    description: "Um presente mais do que especial para Mariana.",
    images: ["/photos/chapter-11/formatura.jpg"],
    type: "website",
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Toda mudança tem um começo.",
    description: "Um presente mais do que especial para Mariana.",
    images: ["/photos/chapter-11/formatura.jpg"]
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
