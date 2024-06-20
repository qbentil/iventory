/* eslint-disable @next/next/no-img-element */

import React, { FC } from 'react';

import { BiSort } from 'react-icons/bi';
import DataTable from 'react-data-table-component';
import SubHeaderComponentMemo from './header';
import { toast } from 'react-toastify';

interface Props {
  data: any
  columns: any;
  onRowClicked?: (row: any) => void;
  handleSearch?: (query: string) => void;
  handleExport?: () => void;
  handleAddNewItem?: () => void;
  handleRefresh?: () => void;

}
const Table: FC<Props> = ({ data, columns, onRowClicked, handleSearch, handleExport, handleAddNewItem, handleRefresh }) => {

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

  const [TableDataState, setTableDataState] = React.useState(TableData)

  const _handleSearch = (query: string) => {
    if (!query) {
      setTableDataState(TableData)
      return;
    }
    // filter using items in coumns which has searchable set to true
    const filteredData = TableData.filter((item: any) => {
      return columns.some((column: any) => {
        if (column.searchable) {
          const value = column.selector(item);
          if (typeof value === 'string') {
            return value.toLowerCase().includes(query.toLowerCase());
          }
          return false;
        }
        return false;
      });
    });
    setTableDataState(filteredData)
  };


  return (
    <div className="w-full h-full px-8">
      <DataTable
        columns={columns}
        data={TableDataState}
        // selectableRows
        highlightOnHover
        sortIcon={<BiSort />}
        subHeader
        pagination
        subHeaderComponent={
          <SubHeaderComponentMemo
            title="Items"
            onSearch={handleSearch || _handleSearch}
            onExport={handleExport}
            onAddNewItem={handleAddNewItem}
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

