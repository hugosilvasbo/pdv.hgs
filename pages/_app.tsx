import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import 'typeface-roboto'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
