/* eslint-disable @next/next/no-img-element */

import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { IItem, IRep } from '@/interfaces';
import { Items, Reps } from '@/utils/data';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import React, { useEffect, useState } from 'react';
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';

import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';

// import { CustomerService } from './service/CustomerService';






const CustomerData = [

]

export default function BasicFilterDemo() {
  const [items, setItems] = useState<IItem[]>(Items);
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'rep.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    price: { value: null, matchMode: FilterMatchMode.EQUALS },
    quantity: { value: null, matchMode: FilterMatchMode.EQUALS },
    
    // verified: { value: null, matchMode: FilterMatchMode.EQUALS }
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
  const [representatives] = useState<IRep[]>(Reps);
  const [statuses] = useState<string[]>(['pending approval', 'approved', 'new', 'negotiation', 'renewal']);

  const getSeverity = (status: string) => {
    switch (status) {
      case 'pending approval':
        return 'danger';

      case 'approved':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
  };

  useEffect(() => {
    // CustomerService.getCustomersMedium().then((data: Customer[]) => {
    //     setCustomers(getCustomers(data));
    // });
    setLoading(false);
  }, []);

  const getItemss = (data: IRep[]) => {
    return [...(data || [])].map((d) => {
      // @ts-ignore
      d.date = new Date(d.date);

      return d;
    });
  };

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
        </span>
      </div>
    );
  };

  const countryBodyTemplate = (rowData: IItem) => {
    return (
      <div className="flex align-items-center gap-2">
        <span>{rowData.price}</span>
      </div>
    );
  };

  const representativeBodyTemplate = (rowData: IItem) => {
    const representative = rowData.rep;

    return (
      <div className="flex align-items-center gap-2">
        <span>{representative.name}</span>
      </div>
    );
  };

  const representativesItemTemplate = (option: IItem) => {
    return (
      <div className="flex align-items-center gap-2">
        {/* <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" /> */}
        <span>{option.name}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData: IItem) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
  };

  const statusItemTemplate = (option: string) => {
    return <Tag value={option} severity={getSeverity(option)} />;
  };

  // const verifiedBodyTemplate = (rowData: IItem) => {
  //   return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
  // };

  const representativeRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
    return (
      <MultiSelect
        value={options.value}
        options={representatives}
        itemTemplate={representativesItemTemplate}
        onChange={(e: MultiSelectChangeEvent) => options.filterApplyCallback(e.value)}
        optionLabel="name"
        placeholder="Any"
        className="p-column-filter"
        maxSelectedLabels={1}
        style={{ minWidth: '14rem' }}
      />
    );
  };

  const statusRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
    return (
      <Dropdown value={options.value} options={statuses} onChange={(e: DropdownChangeEvent) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
    );
  };

  const verifiedRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
    return <TriStateCheckbox value={options.value} onChange={(e: TriStateCheckboxChangeEvent) => options.filterApplyCallback(e.value)} />;
  };

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable value={items} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
        globalFilterFields={['name', 'prices', 'quantity', 'status', 'rep.name']} header={header} emptyMessage="No customers found.">
        <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
        <Column header="Price" filterField="price" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by price" />
        <Column field="quantity" header="Quantity" filter filterPlaceholder="Search by quantity" style={{ minWidth: '12rem' }} />
        <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
          body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
        <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
        {/* <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} /> */}
      </DataTable>
    </div>
  );
}
