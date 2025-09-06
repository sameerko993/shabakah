import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Shabakah",
  description: "Sports Hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="bg-green-800 p-4 text-white flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
