import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }: AppProps) {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || "test";
  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      <Component {...pageProps} />
    </PayPalScriptProvider>
  );
}

export default MyApp;
