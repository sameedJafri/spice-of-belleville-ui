import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Spice Of Belleville",
  description: "Food and drink menu for Spice of Belleville",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="app">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
