// import { Hanken_Grotesk, Montserrat, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header />

        <main>{children}</main>

        <Footer />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}