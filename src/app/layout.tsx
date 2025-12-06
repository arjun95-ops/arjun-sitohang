import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { PortfolioProvider } from "@/context/PortfolioContext";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arjun Sitohang - Senior UI/UX Developer",
  description: "Portfolio of Arjun Sitohang - Senior UI/UX Developer specializing in React, Next.js, TypeScript, and creative digital solutions.",
  keywords: ["Arjun Sitohang", "UI/UX Developer", "React", "Next.js", "TypeScript", "Portfolio", "Web Development"],
  authors: [{ name: "Arjun Sitohang" }],
  icons: {
    icon: "https://i.imgur.com/uMwYkju.jpeg",
  },
  openGraph: {
    title: "Arjun Sitohang - Senior UI/UX Developer",
    description: "Portfolio of Arjun Sitohang - Senior UI/UX Developer specializing in React, Next.js, TypeScript, and creative digital solutions.",
    url: "https://arjun-sitohang.vercel.app",
    siteName: "Arjun Sitohang Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Sitohang - Senior UI/UX Developer",
    description: "Portfolio of Arjun Sitohang - Senior UI/UX Developer specializing in React, Next.js, TypeScript, and creative digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} antialiased bg-background text-foreground font-mono`}
      >
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
        <Toaster />
      </body>
    </html>
  );
}
