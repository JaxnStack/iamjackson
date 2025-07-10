import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
