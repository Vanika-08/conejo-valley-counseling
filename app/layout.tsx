import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling",
  description: "Compassionate counseling in Newbury Park and across California.",
  openGraph: {
    title: "Conejo Valley Family Counseling",
    description: "A safe space to reflect, heal, and grow.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts kit for beaufort-pro */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="https://use.typekit.net/fsc1wsd.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
