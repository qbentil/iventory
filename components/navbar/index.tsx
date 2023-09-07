/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { userHooks } from '@/hooks'

const Navbar = () => {
    const [user, setUser] = React.useState<any | null>(null)

    React.useEffect(() => {
        let user = userHooks({ type: 'get' })
        // check if user is object and not empty
        if (typeof user === 'object' && Object.keys(user).length > 0) {
            setUser(user)
        }
    }, [])
    return (
        <nav className="w-full shadow">
            <div className=" flex flex-wrap items-center justify-between mx-auto px-4">
                <a href="#" className="flex items-center justify-center gap-x-1">
                    <img src="/assets/logo.png" className="h-12 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">SMS.IO</span>
                </a>
                <div className="flex gap-2 rounded-full bg-green-50 px-3 py-2 cursor-pointer items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <img className="w-10 h-10 rounded-full" src="https://codersquiz.netlify.app/img/bentil.jpeg" alt="user photo" />
                    </button>
                    {/* user info, name and potforlio */}
                    <div className="flex flex-col items-start justify-center px-3 text-left rounded-md gap-y-1" id="user-dropdown">
                        <span className="text-sm font-medium text-gray-900">
                            {user?.name || 'John Doe'}
                        </span>
                        <span className="text-xs font-medium text-gray-500">
                            {user?.email || 'useremail@gmail.com'}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
