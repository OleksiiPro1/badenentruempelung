// src/pages/_app.tsx
import '../app/globals.css'; // путь к твоему глобальному CSS
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
