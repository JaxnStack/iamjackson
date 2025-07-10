import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((err) =>
      console.error('Bootstrap load failed:', err)
    )
  }, [])

  return (
    <>
      <Head>
        <title>Jackson Njihia – Portfolio</title>
      </Head>
      <Header />
      <main className="flex-grow-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
