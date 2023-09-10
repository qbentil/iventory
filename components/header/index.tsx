/* eslint-disable @next/next/no-img-element */

import { CiLogout } from 'react-icons/ci'
import Link from 'next/link'
import React from 'react'
import { formatDate } from '@/utils'
import { userHooks } from '@/hooks'

const Header = () => {
    const [user, setUser] = React.useState<any | null>(null)
    const [time, setTime] = React.useState<any | null>(null)

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
                        <span className="self-center text-xl font-semibold whitespace-nowrap">SMS.IO</span>
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
                        {/* <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <img className="w-10 h-10 rounded-full" src="https://codersquiz.netlify.app/img/bentil.jpeg" alt="user photo" />
                        </button> */}
                        {/* user info, name and potforlio */}
                        <div className="flex flex-col items-start justify-center px-3 text-left gap-y-1" id="user-dropdown">
                            <span className="text-sm text-white font-medium">
                                {user?.email || 'John Doe'}
                            </span>
                        </div>
                    </div>

                    {/* vertical line seperate */}
                    <div className="w-[1px] h-[30px] bg-gray-300"></div>
                    {/* logout link */}
                    <div onClick={Logout} className="flex cursor-pointer items-center justify-center gap-x-1 text-sm text-gray-300 hover:text-gray-400">
                        <CiLogout className='w-5 h-5' />
                        <span>Logout</span>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Header
