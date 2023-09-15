import React from 'react'
import RootLayout from '@/App/layout'

const Requisition = () => {
    return (
        <RootLayout>
            <div className='p-6 flex flex-col items-center justify-center w-full h-[60vh] text-white'>
                <p>This page will contain the requisition form for various signess to fill out.</p>
                <p>It will be different for each user level.</p>
            </div>
        </RootLayout>
    )
}

export default Requisition