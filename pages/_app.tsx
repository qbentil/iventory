import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer closeButton={true} position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Component {...pageProps} />
    </>
  )
}
