import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='dark'>
      <Head />
      <body className='home-container'>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css' rel='stylesheet' />
        <Main />
        <NextScript />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js' />
      </body>
    </Html>
  )
}
