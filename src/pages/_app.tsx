// pages/_app.tsx
import RootLayout from '@/app/layout';
import "../app/globals.css";

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
