/* eslint-disable @next/next/no-img-element */

import { PiCaretDownBold, PiUserSwitchThin } from 'react-icons/pi'

import { AiOutlineSetting } from 'react-icons/ai'
import { CiLogout } from 'react-icons/ci'
import Link from 'next/link'
import React from 'react'
import { formatDate } from '@/utils'
import { userHooks } from '@/hooks'

const Header = () => {
    const [user, setUser] = React.useState<any | null>(null)
    const [time, setTime] = React.useState<any | null>(new Date().toLocaleTimeString())
    const [dropdown, setDropdown] = React.useState<boolean>(false)

    React.useEffect(() => {
        let user = userHooks({ type: 'get' })
        // check if user is object and not empty
        if (typeof user === 'object' && Object.keys(user).length > 0) {
            setUser(user)
        }
    }, [])

    // live clock
    React.useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const Logout = () => {
        userHooks({ type: 'remove' })
        window.location.reload()
    }


    return (
        <nav className="w-full shadow bg-gray-800 text-white">
            <div className=" flex flex-wrap items-center justify-between mx-auto px-6">
                <Link href={"/"} className='flex items-center justify-center gap-x-1'>
                    <a href="#" className="flex items-center justify-center gap-x-1">
                        {/* <img src="/assets/logo.png" className="h-6 mr-3" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-green-600">SMS.IO</span>
                    </a>
                    <p className='text-xl text-gray-400'>| DVLA</p>
                </Link>
                {/* Cureent Date and live clock */}
                <div className="flex items-center justify-center gap-x-2">
                    <p className='text-sm text-gray-200'>{formatDate(new Date().toDateString())}</p>
                    {/* vertical line */}
                    <div className="w-[1px] h-[15px] bg-gray-300"></div>
                    <p className='text-sm text-gray-200'>{time}</p>
                </div>
                {/* user profile */}
                <div className="flex items-center justify-center gap-x-3 px-2">
                    <div className="flex gap-2 rounded-full px-3 py-2 cursor-pointer items-center">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <img className="w-10 h-10 rounded-full" src="https://codersquiz.netlify.app/img/bentil.jpeg" alt="user photo" />
                        </button>
                        {/* user info, name and potforlio */}
                        <div onClick={() => setDropdown(!dropdown)} className="flex items-center gap-x-1 justify-center px-3 text-left gap-y-1" id="user-dropdown">
                            <span className="text-sm text-white font-medium">
                                {user?.email || 'John Doe'}
                            </span>
                            <div className="w-[1px] h-[10px] bg-gray-600"></div>
                            <PiCaretDownBold className=' text-gray-500 hover:text-gray-200' />
                        </div>
                    </div>

                    {/* vertical line seperate */}
                    {/* logout link */}


                    {/* dropdown */}
                    {
                        dropdown && (
                            <div onClick={() => setDropdown(false)} className="w-[13%] absolute right-0 top-10 z-50 origin-top-right rounded-md shadow-lg px-1">
                                <div className="bg-white rounded-md shadow-xs">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" id="user-dropdown">
                                        {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Switch Accouunt</a> */}
                                        <div onClick={Logout} className="px-4 py-2 flex cursor-pointer gap-x-2 items-center justify-start text-sm text-gray-700 hover:bg-gray-100">
                                            <PiUserSwitchThin className='w-5 h-5' />
                                            <span>HOD View</span>
                                        </div>
                                        <div onClick={Logout} className="px-4 py-2 flex cursor-pointer gap-x-2 items-center justify-start text-sm text-gray-700 hover:bg-gray-100">
                                            <AiOutlineSetting className='w-5 h-5' />
                                            <span>Settings</span>
                                        </div>
                                        {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a> */}
                                        <div onClick={Logout} className="px-4 py-2 flex cursor-pointer gap-x-2 items-center justify-start text-sm text-gray-700 hover:bg-gray-100">
                                            <CiLogout className='w-5 h-5' />
                                            <span>Logout</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </nav>
    )
}

export default Header
