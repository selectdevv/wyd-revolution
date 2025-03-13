import type { AppProps } from 'next/app'
import Menu from '@/components/menu'
import Image from "next/image";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-dvw justify-items-center bg-black/50">
      <div className="min-h-screen justify-items-center w-300 p-8">
        <Image className="-mt-6" src="/images/logo02.png" alt="Logo WYD Revolution" width={300} height={300} />
        <Menu />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp