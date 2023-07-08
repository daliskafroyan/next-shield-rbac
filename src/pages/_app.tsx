import { NextShield } from 'next-shield';
import { useRouter } from 'next/router';

import './globals.css';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextShield
      isAuth={false}
      isLoading={false}
      router={router}
      privateRoutes={['/private', '/control-panel']}
      publicRoutes={['/', '/login']}
      accessRoute="/private"
      loginRoute="/login"
      LoadingComponent={<p>Loading...</p>}
    >
      <Component {...pageProps} />
    </NextShield>
  );
}
