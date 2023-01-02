import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
