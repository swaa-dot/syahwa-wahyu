import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import { site, navLinks } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const body = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#utama" className="skip-link">Lompat ke konten</a>
        <Navbar name={site.name} links={navLinks} />
        {children}
      </body>
    </html>
  );
}
