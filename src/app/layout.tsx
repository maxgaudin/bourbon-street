import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bourbon Street Memorial - Remembering the Victims",
  description: "A memorial website honoring the victims of the 2025 New Year's Eve Terrorist Attack on Bourbon Street in New Orleans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapClient />
        <header className="bg-white shadow-sm">
          <nav className="container py-4">
            <h1 className="h2 text-dark">
              Bourbon Street Memorial
            </h1>
          </nav>
        </header>
        <main className="container py-4">
          {children}
        </main>
        <footer className="bg-white shadow-sm mt-4">
          <div className="container py-4">
            <p className="text-center text-muted">
              In memory of those we lost on New Year's Eve 2025
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
