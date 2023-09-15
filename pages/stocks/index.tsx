import React from 'react'
import RootLayout from '@/App/layout'
import { Table } from '@/components'

const Stock = () => {
    return (
        <RootLayout>
            <div className="w-screen overflow-x-hidden">
                {/* <div className="card"> */}
                <Table />
                {/* </div> */}
            </div>
        </RootLayout>
    )
}

export default Stock