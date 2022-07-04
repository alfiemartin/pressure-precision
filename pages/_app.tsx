import "../styles/globals.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import PageTemplate from "../components/Template";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageTemplate>
      <Component {...pageProps} />
    </PageTemplate>
  );
}

export default MyApp;
