import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recrutamento com Tráfego Pago | Encontre os Melhores Profissionais",
  description:
    "Recrutamento inteligente usando tráfego pago para atrair candidatos qualificados. Multi-nicho, resultados rápidos e consultoria gratuita.",
  keywords: [
    "recrutamento",
    "tráfego pago",
    "captação de talentos",
    "recrutamento digital",
    "contratação",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
