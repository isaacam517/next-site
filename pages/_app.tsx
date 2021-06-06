import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProps } from 'next/app'
import '../shared/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
