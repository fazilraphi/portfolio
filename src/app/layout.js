import "./globals.css";

import Navbar from "@/components/layout/Navbar";

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
