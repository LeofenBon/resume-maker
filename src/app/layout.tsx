import './globals.css';
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Footer />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
