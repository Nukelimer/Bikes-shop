import { Cabin } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CartProvider from "@/components/CartProvider";
import { Toaster } from "@/components/ui/toaster";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--cabin",
});

export const metadata = {
  title: "Bike Shop",
  description: "Ride the calories away fam!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.variable}>
        <CartProvider>
          <Header />
          {children}

          <Toaster />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
