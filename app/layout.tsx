import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sizebay Demo - VTEX Day 2026",
  description:
    "Demonstração das funcionalidades da Sizebay para o VTEX Day 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}
      >
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://sizebay.com/wp-content/uploads/2022/04/Logo-Sizebay-Azul.svg"
                alt="Sizebay Logo"
                className="h-5 md:h-6 object-contain"
              />
              <span className="text-gray-300 font-light text-lg md:text-xl">
                |
              </span>
              <div className="font-bold text-base md:text-lg tracking-tight text-pink-600">
                VTEX DAY 2026
              </div>
            </Link>
          </div>
        </header>

        <main className="flex-grow w-full px-4 py-6 md:max-w-7xl md:mx-auto md:px-8 md:py-10">
          {children}
        </main>

        <footer className="bg-white border-t py-4 text-center text-gray-500 text-xs mt-auto">
          &copy; 2026 Sizebay Demo.
        </footer>
      </body>
    </html>
  );
}
