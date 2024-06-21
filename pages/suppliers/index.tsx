import React from "react";
import RootLayout from "@/App/layout";
import { Table } from "@/components";
import { Suppliers, SuppliersColumn } from "@/utils/data";
import { toast } from "react-toastify";

const Stock = () => {
    const onRowClicked = (row: any) => {
        toast.success(`You clicked ${row.name}`, { autoClose: 2000 })
    }
    
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
            <div className="w-screen overflow-x-hidden">
            <Table
                title="Suppliers"
                columns={SuppliersColumn}
                data={Suppliers}
                onRowClicked={onRowClicked}
                handleExport={handleExport}
                handleAddNewItem={handleAddNewItem}
                handleRefresh={handleRefresh}
                />
            </div>
        </RootLayout>
    );
};

export default Stock;
