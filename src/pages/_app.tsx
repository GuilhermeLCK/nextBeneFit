import "../styles/banners.scss";
import "../styles/carrosel.scss";
import "../styles/footer.scss";
import "../styles/globals.scss";
import "../styles/header.scss";
import "../styles/sectionCalculadora.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
