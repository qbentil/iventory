import { Items, ItemsColumns } from '@/utils/data'

import React from 'react'
import RootLayout from '@/App/layout'
import { Table } from '@/components'
import { toast } from 'react-toastify'

const Assets = () => {
  const onRowClicked = (row: any) => {
    toast.success(`You clicked ${row.name}`, { autoClose: 2000 })
  }
  // const handleSearch = (query: string) => {
  //   console.log('Searching for:', query);
  // };

  const handleExport = () => {
    console.log('Exporting data');
  };

  const handleAddNewItem = () => {
    console.log('Adding new item');
  };

  const handleRefresh = () => {
    console.log('Refreshing data');
  };

  return (
    <RootLayout>
      <div className="h-full w-screen overflow-x-hidden bg-white">
        <Table
          title='Items'
          columns={ItemsColumns}
          data={Items}
          onRowClicked={onRowClicked}
          handleExport={handleExport}
          handleAddNewItem={handleAddNewItem}
          handleRefresh={handleRefresh}
        />
      </div>
    </RootLayout>
  )
}

export default Assets