import "./globals.css";
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export const metadata = {
  title: "U!Source",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
   
      <Header/>
      <main className="container">
      {children}
      </main>
      <Footer/>
 
      </body>
    </html>
  );
}

