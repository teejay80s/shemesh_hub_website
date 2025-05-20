import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/Whatsapp";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shemesh hub",
  description:
    "Shemesh Hub – Your trusted source for solar energy solutions in Africa. We specialize in solar panel installation, solar system design, off-grid and hybrid solutions, energy consulting, and affordable solar products. Buy solar panels, inverters, batteries, and accessories with flexible installment plans. Serving residential, commercial, and industrial clients across Nigeria and beyond. Go green, reduce electricity bills, and power your future with clean, renewable energy from Shemesh Hub.buy now pay later, installmental payment, sun king.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
