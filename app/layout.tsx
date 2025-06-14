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
  title: "LinkHire - Where Talent Meets Opportunity.",
  description: "LinkHire is a smart job platform that connects employers with top talent. Post jobs, find remote or local opportunities, and hire faster - all in one place.",
  openGraph: {
    title: "LinkHire – Where Talent Meets Opportunity",
    description:
      "Post jobs, find remote or local opportunities, and connect with top talent on LinkHire.",
    url: "https://linkhire.com",
    siteName: "LinkHire",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LinkHire Job Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkHire – Where Talent Meets Opportunity",
    description:
      "Discover jobs, post listings, and connect with top talent on LinkHire.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
