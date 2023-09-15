import React from 'react'
import RootLayout from '@/App/layout'

const Office = () => {
    return (
        <RootLayout>
            <div className='p-6 flex items-center justify-center w-full h-[60vh] text-white'>
                <p>This office page is for internal customization of the system and will only be accessible to administrators.</p>
            </div>
        </RootLayout>
    )
}

export default Office