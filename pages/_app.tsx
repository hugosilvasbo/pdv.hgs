import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import 'typeface-roboto'
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
