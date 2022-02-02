import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }: AppProps) {
	// Google Tag Manager
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-WGJNJC6" });
	}, []);
	return <Component {...pageProps} />;
}
export default MyApp
