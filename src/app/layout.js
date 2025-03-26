import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './provider'; // Import the Providers component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers> {/* Wrap children with Providers */}
      </body>
    </html>
  );
}