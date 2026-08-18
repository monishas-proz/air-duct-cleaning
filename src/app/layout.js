import { Hanken_Grotesk, Montserrat, DM_Sans } from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import LayoutWrapper from "@/components/LayoutWrapper";
import BackgroundWindEffect from "@/components/common/AnimatedBackground";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Adhi Robotic Services | Air Quality Management & HVAC Solutions",
  description:
    "Adhi Robotic Services is a trusted provider of air quality management, HVAC cleaning, air duct cleaning, AHU maintenance, cleanroom solutions, and industrial environmental services. We serve healthcare, pharmaceutical, commercial, and manufacturing industries with reliable and professional solutions.",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${montserrat.variable} ${dmSans.variable}`}
      >
        <BackgroundWindEffect />
        <div className="site-content">
          <LayoutWrapper>
            {children}

             <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
              }}
            />
          </LayoutWrapper>
        </div>
      </body>
    </html>
  );
}
