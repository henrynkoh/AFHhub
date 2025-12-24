import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFHhub - Your Complete Adult Family Home Platform",
  description: "Comprehensive platform for AFH providers, property management, and resident placement services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

