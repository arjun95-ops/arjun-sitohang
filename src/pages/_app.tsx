import type { AppProps } from 'next/app';
import { PortfolioProvider } from '@/context/PortfolioContext';
import "@/app/globals.css"; // Reuse global styles

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PortfolioProvider>
            <Component {...pageProps} />
        </PortfolioProvider>
    );
}
