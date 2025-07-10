// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch(err =>
      console.error('Bootstrap load failed:', err)
    )
  }, [])

  return (
    <>
      <Head>
        <title>Jackson Njihia – Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
