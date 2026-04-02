import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Joshua Balangue | Premium Virtual Assistant",
  description: "Elite data-driven support and administrative services.",
  icons: {
    icon: "/joshua-portfolio/JB.jpg", 
    apple: "/joshua-portfolio/JB.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-bg text-slate-100 antialiased selection:bg-accent/30">
        <Navbar />
        {children}
      </body>
    </html>
  );
}