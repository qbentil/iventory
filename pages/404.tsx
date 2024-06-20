import { FaHome } from "react-icons/fa"
import Link from "next/link"
import { MdSupportAgent } from "react-icons/md"
import RootLayout from "@/App/layout"
import { toast } from "react-toastify"

const _404Layout = () => {
  return (
    <RootLayout>
      <div className="h-screen w-screen">
        <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="max-w-max mx-auto">
            <main className="sm:flex">
              <p className="text-4xl font-extrabold text-green-600 sm:text-5xl font-mono">404</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl font-monserat-alt">COMPSSA . UGASS . TMS</h1>
                  <p className="mt-1 text-base text-gray-500">Encanto Nocturna Dinner and Awards Night!</p>
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <Link
                    href="/"
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-green-600 gap-x-2  hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <FaHome />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => toast.warn('Yet to implement contact support!')}
                    className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded text-green-700 bg-green-100 gap-x-2 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <MdSupportAgent />
                    Contact Support
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default _404Layout