/* eslint-disable @next/next/no-img-element */

import { IItem, IRep } from '@/interfaces';
import { Items, Reps } from '@/utils/data';
import React, { FC, useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import { DateFormatter } from '@/utils';
import { FaSort } from 'react-icons/fa';
import SubHeaderComponentMemo from './header';
import { toast } from 'react-toastify';

interface Props {
  data: any
  columns: any;
}
const Table: FC<Props> = ({ data, columns }) => {

  const TableData = data.map((item: any) => {
    return {
      ...item,
      actions: <>
        <div className='flex items-center gap-x-2'>
          <button className='text-green-500 hover:text-green-600'>Edit</button>
          <button className='text-red-500 hover:text-red-600'>Delete</button>
        </div>
      </>
    }
  })

  const onRowClicked = (row: any) => {
    toast.success(`You clicked ${row.name}`, { autoClose: 2000 })
  }
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleExport = () => {
    console.log('Exporting data');
  };

  const handleAddNewItem = () => {
    console.log('Adding new item');
  };

  const handleRefresh = () => {
    console.log('Refreshing data');
  };

  const handleItemsPerPageChange = (itemsPerPage: number) => {
    console.log('Items per page:', itemsPerPage);
  };



  return (
    <div className="w-full h-full px-8">
      <DataTable
        columns={columns}
        data={TableData}
        // selectableRows
        highlightOnHover
        sortIcon={<FaSort />}
        subHeader
        pagination
        subHeaderComponent={
          <SubHeaderComponentMemo
            title="Items"
            itemsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            onSearch={handleSearch}
            onExport={handleExport}
            onAddNewItem={handleAddNewItem}
            onItemsPerPageChange={handleItemsPerPageChange}
            onRefresh={handleRefresh}
            showExport
            showAddNewItem
            showRefresh
          />
        }
        onRowClicked={onRowClicked}
      />
    </div>
  );
}


export default Table

