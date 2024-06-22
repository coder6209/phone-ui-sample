import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {IBM_Plex_Sans} from "next/font/google";
import "./globals.css";

const IBM = IBM_Plex_Sans({subsets: ["latin"], weight: ["400"]});

export const metadata = {
  title: "Phone UI Sample - React",
  description: "a phone UI sample using tailwindcss, next.js, framer motion and lucide icons",
};

export default async function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={IBM.className}>
        <NavBar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
