/* eslint-disable @next/next/no-img-element */

import { IItem, IRep } from '@/interfaces';
import { Items, Reps } from '@/utils/data';
import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';
import { DateFormatter } from '@/utils';

const columns = [
  {
    name: 'Name',
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: 'Price',
    selector: (row: any) => row.price,
    sortable: true
  },
  {
    name: 'Quantity',
    selector: (row: any) => row.quantity,
  },
  {
    name: 'Total',
    selector: (row: any) => row.category,
    sortable: true,
  },
  {
    name: 'Arrival Date',
    selector: (row: any) => DateFormatter(row.created_at),
    sortable: true,
  },
  {
    name: 'Rep',
    selector: (row: any) => row.rep.name,
    sortable: true,
  },
  {
    name: 'Action',
    selector: (row: any) => <p>Actions</p>
  },
];

const tableData = Items.map((item: IItem) => {
  
})


const Table = () => {

  return (
    <div className="max-h-[80vh]">
      <DataTable
        columns={columns}
        data={Items}
        selectableRows
      />
    </div>
  );
}


export default Table

