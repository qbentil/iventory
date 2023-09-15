import React from 'react'
import RootLayout from '@/App/layout'
import { Table } from '@/components'

const Items = () => {
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

export default Items