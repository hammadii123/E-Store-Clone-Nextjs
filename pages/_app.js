// pages/_app.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../src/app/globals.css"; // Ensure global styles are loaded

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
