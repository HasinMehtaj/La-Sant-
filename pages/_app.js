import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
