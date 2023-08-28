// pages/_app.tsx
import RootLayout from '@/app/layout';
import "../app/globals.css";
import "../components/Table/Pagination/Pagination.css"
import "../components/Buttons/Buttons.css"
import "../components/Loader/Loader.css"
import "../components/Forms/Forms.css"
import "../components/ErrorComponent/ErrorComponent.css"
import "../components/Tabs/Tabs.css"

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
