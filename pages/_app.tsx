import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from 'next/app'
import { StateProvider } from '@/context/StateProvider'
import { ToastContainer } from 'react-toastify'
import initialState from "@/context/initialState";
import reducer from "@/context/reducer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider reducer={reducer} initialState={initialState} >
      <ToastContainer closeButton={true} position='top-right' autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Component {...pageProps} />
    </StateProvider>
  )
}
