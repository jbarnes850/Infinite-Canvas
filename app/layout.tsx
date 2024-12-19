import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ComputeStatus } from "@/components/hardware/ComputeStatus";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Infinite Canvas',
  description: 'Your Private AI Creative Assistant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ComputeStatus />
        </div>
      </body>
    </html>
  );
}