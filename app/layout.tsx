import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";


const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MecaToolsXpress - Ferretería Online de Herramientas Industriales",
  description: "Compra herramientas industriales de calidad en MecaToolsXpress. Fresadoras, tornos, productos varios y más. Envío en 24/48h. Descuentos hasta -15% en tu primera compra.",
  keywords: ["ferretería online", "herramientas industriales", "fresadoras", "tornos", "maquinaria industrial", "MecaToolsXpress", "herramientas profesionales"],
  authors: [{ name: "MecaToolsXpress" }],
  creator: "MecaToolsXpress",
  publisher: "MecaToolsXpress",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://mecaxpress.com'),
  openGraph: {
    title: "MecaToolsXpress - Ferretería Online de Herramientas Industriales",
    description: "Compra herramientas industriales de calidad. Envío en 24/48h. Descuentos hasta -15%.",
    url: process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://mecaxpress.com',
    siteName: "MecaToolsXpress",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MecaToolsXpress - Ferretería Online",
    description: "Herramientas industriales de calidad. Envío en 24/48h.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${urbanist.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
