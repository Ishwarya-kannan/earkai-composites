import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://earkaicomposites.com"),

  title: {
    default: "Earkai Composites",
    template: "%s | Earkai Composites",
  },

  description:
    "Earkai Composites is a trusted supplier of composite raw materials, consumables, machinery and engineering solutions.",

  keywords: [
    "Composite Materials",
    "Composite Raw Materials",
    "Composite Consumables",
    "RTM Products",
    "Vacuum Bagging",
    "Composite Machinery",
    "Earkai Composites",
  ],

  authors: [{ name: "Earkai Composites" }],

  openGraph: {
    title: "Earkai Composites",
    description:
      "Premium Composite Raw Materials, Consumables, Machinery and Engineering Solutions.",

    url: "https://earkaicomposites.com",
    siteName: "Earkai Composites",

    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Earkai Composites",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Earkai Composites",
    description: "Premium Composite Manufacturing Solutions",
    images: ["/images/hero/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}