import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { keywordsForMetaData } from "@/utils/constants";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareFilez",
  description:
    "ShareFilez: Celebal Technologies internship project of File sharing and real-time chat. Experience seamless, secure data exchange with our WebRTC-powered Next.js app. Join us for instant messaging and efficient file transfer in a modern, user-friendly environment.",
  authors: [
    {
      name: "Khushal Kumar",
      url: "https://github.com/khushal0944",
    },
  ],
  keywords: keywordsForMetaData,
  icons: {
    icon: "./fastdroplight.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
