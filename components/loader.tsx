import React from 'react'
import { TbLoader3 } from 'react-icons/tb'

const Loader = ({ text }: { text?: string }) => {
    return (
        // transparent and blur background, with a spinner in the middle of the screen, while the app is loading, before the user is authenticated
        <div className='w-screen h-screen flex items-center justify-center bg-black bg-opacity-80 fixed top-0 left-0 z-50'>
            {/* <div className='w-20 h-20 border-4 border-green-500 rounded-full animate-spin'></div> */}
            <TbLoader3 className='text-8xl text-green-500 animate-spin' />
            <p className='text-white font-bold text-2xl animate-pulse'>{text || "Loading..."}</p>
        </div>

    )
}

export default Loader