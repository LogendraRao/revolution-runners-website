import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Revolution Runners | Field Marketing Agency Malaysia",
    template: "%s | Revolution Runners",
  },
  description:
    "Malaysia's bold field marketing agency. We help banks, brands, and NGOs acquire customers through professional face-to-face engagement. Think Big, Think Different.",
  keywords: [
    "field marketing",
    "customer acquisition",
    "fundraising campaigns",
    "brand ambassadors",
    "Malaysia marketing agency",
    "face-to-face marketing",
    "credit card acquisition",
    "NGO fundraising",
  ],
  authors: [{ name: "Revolution Runners" }],
  creator: "Revolution Runners",
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Revolution Runners",
    title: "Revolution Runners | Field Marketing Agency Malaysia",
    description:
      "Malaysia's bold field marketing agency. We help banks, brands, and NGOs acquire customers through professional face-to-face engagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revolution Runners | Field Marketing Agency Malaysia",
    description:
      "Malaysia's bold field marketing agency. Think Big, Think Different.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
