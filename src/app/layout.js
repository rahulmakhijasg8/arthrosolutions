import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arthro Solutions Orthopaedics",
  description: "From Sports Injuries to Joint Replacement Comprehensive Solutions Under one roof by globally trained Orthopaedic surgeon, Dr. Mohit Upadhyaya.",
  icons:{
    icon: '/favi.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
