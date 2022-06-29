import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
