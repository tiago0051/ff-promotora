import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
