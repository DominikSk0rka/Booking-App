import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booking Asnet",
  description: "Booking Asnet",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <main className="flex flex-col min-h-screen bg-secondary">
            <NavBar />
            <section className="bg-rose-200 flex-grow">{children}</section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
