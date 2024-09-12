import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Pushp Store",
  description: "Pushp E-commerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ClerkProvider>
          <Navbar/>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
