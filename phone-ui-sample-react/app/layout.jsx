import {Alexandria} from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({subsets: ["latin"], weight: ["400"]});

export const metadata = {
  title: "Phone UI Sample - React",
  description: "a phone UI sample using tailwindcss, next.js, framer motion and lucide icons",
};

export default async function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={alexandria.className}>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
