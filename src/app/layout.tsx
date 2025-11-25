import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AdminProvider } from "@/context/admin-context"; // Import Context

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arjun Sitohang | Senior UI/UX Developer",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrains.className} bg-black text-white min-h-screen selection:bg-pink-500/30`}>
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}