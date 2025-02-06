import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.min.css";
import "../app/styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Navbar CSS
import "../app/styles/navbar.css";
// Footer CSS
import "../app/styles/footer.css";
// Globals CSS
import "../app/styles/globals.css";
// Responsive CSS
import "../app/styles/responsive.css";

import type { Metadata } from "next";
import { Open_Sans, Jost, Monoton } from "next/font/google";
import ScrollToTop from "@/components/Layouts/ScrollToTop";
import AosAnimation from "@/components/Layouts/AosAnimation";
import Header from "@/components/Layouts/header";
import Footer from "@/components/Layouts/footer";
import Script from 'next/script';

// For all body text font
const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

// For heading text font
const jost = Jost({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const monoton = Monoton({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-monoton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whr.ai Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KCBN5FJX');
          `,
        }}
      />
      <body
        className={`${open_sans.variable} ${jost.variable} ${monoton.variable}`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCBN5FJX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        {/* <Footer /> */}

        <AosAnimation />

        <ScrollToTop />
      </body>
    </html>
  );
}
