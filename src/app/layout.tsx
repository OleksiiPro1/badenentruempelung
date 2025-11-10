// app/layout.tsx
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Script from "next/script";
import type { Metadata } from "next";

import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "Entrümpelung & Räumung in Wien vom Profi – schnell & diskret",
  description:
    "Ihr Profi für Entrümpelung & Räumung in Wien: schnelle Termine, klare Abläufe, diskrete Durchführung. Kostenlose Besichtigung & fixe Zusagen.",
  manifest: "/manifest.webmanifest",
  themeColor: "#ffffff",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icons/icon-192.png" }],
    shortcut: [{ url: "/favicon.ico" }],
    other: [
      { rel: "icon", url: "/icons/maskable-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icons/maskable-512.png", sizes: "512x512", type: "image/png" }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="font-sans text-dark">

        {/* --- Google Analytics (gtag.js) --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TT3GSNPE0M"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TT3GSNPE0M', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* --- /Google Analytics --- */}

        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
