import { AppProps } from "next/app";
import { useEffect } from "react";

import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((err) => {
          console.error('Service worker registration failed:', err);
        });
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
