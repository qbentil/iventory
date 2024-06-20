import { BsCameraReels, BsShieldLock } from 'react-icons/bs'

import { BiLogOutCircle } from 'react-icons/bi'
import React from 'react'

const Footer = () => {
  return (
    // the footer should be fixed to the bottom of the page
    <footer className="bottom-0 left-0 right-0 bg-gray-100">
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] flex items-center justify-center px-3 py-2">
          {/* logo */}
          {/* <div className="flex items-center justify-center animate-pulse">
            <BsCameraReels className="text-2xl" />
            <p className="text-2xl font-bold ml-2">SMS.IO 1.0</p>
          </div> */}

          {/* security text */}
          <div className="flex items-center  gap-x-5 justify-center">

            <p className="text-sm text-gray-500">
              &copy; {
                new Date().getFullYear()
              }
              <span className="font-bold"> SMS.IO 1.0 | DVLA</span>
            </p>
            <span className='text-sm text-green-500'><BsShieldLock /></span>
          </div>

        </div>
      </div>
    </footer>

  )
}

export default Footer