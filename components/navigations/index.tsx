import Link from 'next/link'
import { NavItems } from '@/utils'
import React from 'react'

const Navigations = () => {
    return (
        <div className="w-full flex items-center justify-center bg-gray-700 pt-3 pb-2">
            <Link href={"/"} className='flex items-center justify-center gap-x-1'>
                <p className="flex items-center justify-center gap-x-1">
                    {/* <img src="/assets/logo.png" className="h-6 mr-3" alt="Flowbite Logo" /> */}
                    <span className="self-center text-gray-200 hover:text-green-600 text-2xl font-semibold whitespace-nowrap">SMS.IO</span>
                </p>
            </Link>
            <div className="w-[80%] flex gap-x-10 gap-y-7 flex-wrap items-center justify-center">
                {
                    NavItems.map((item) => (
                        <Link href={item.link} key={item.link} className={`rounded-md hover:underline decoration-${item.color}-600 cursor-pointer gap-y-1 flex flex-col items-center justify-center`}>
                            <div className={`w-[40px] h-[40px] flex items-center justify-center rounded-full bg-${item.color}-50`}>
                                <item.icon className={`text-${item.color}-600`} />
                            </div>
                            <p className={`text-gray-100 font-bold text-[0.6rem]`}>{item.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navigations