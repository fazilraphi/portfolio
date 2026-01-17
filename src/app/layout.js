import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main content grows to push footer down */}
        <main className="flex-1">{children}</main>

        
      </body>
    </html>
  );
}
