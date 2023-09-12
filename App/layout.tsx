import { AiFillTags, AiOutlineStock } from 'react-icons/ai';
import { Authenticate, Footer, Header, Navigations } from '@/components'

import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Authenticate >
            {/*  */}
            <div className='w-screen h-screen flex flex-col  bg-green-600'>
                {/* header */}
                <Header />

                {/* navs */}
                <Navigations />
                {/* children */}
                {children}
                {/* footer */}
                <Footer />
            </div>
        </Authenticate>
    )
}

export default RootLayout