// import { Hanken_Grotesk, Montserrat, DM_Sans } from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import LayoutWrapper from "@/components/LayoutWrapper";

// const hankenGrotesk = Hanken_Grotesk({
//   variable: "--font-hanken-grotesk",
//   subsets: ["latin"],
// });

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
// });

// const dmSans = DM_Sans({
//   variable: "--font-dm-sans",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Air Care",
  description: "Air Care Website",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
      <body>
        <LayoutWrapper>
          {children}

           <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
            }}
          />
          
        </LayoutWrapper>
      </body>
    </html>
  );
}