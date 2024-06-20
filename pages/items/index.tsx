import { Items, ItemsColumns } from '@/utils/data'

import React from 'react'
import RootLayout from '@/App/layout'
import { Table } from '@/components'

const Assets = () => {
  return (
    <RootLayout>
      <div className="h-full w-screen overflow-x-hidden bg-white">
        <Table
          columns={ItemsColumns}
          data={Items}
        />
      </div>
    </RootLayout>
  )
}

export default Assets