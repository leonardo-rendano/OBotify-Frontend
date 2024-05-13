import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "oBotify",
  description: "By Leonardo Rendano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50 h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
