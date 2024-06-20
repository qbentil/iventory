import { FaFileExport, FaPlus, FaSearch, FaSyncAlt } from 'react-icons/fa';
import React, { ChangeEvent, memo } from 'react';

import SearchSelectInput from '../core/search-input';

interface SubHeaderComponentMemoProps {
    title: string;
    onSearch: (query: string) => void;
    onExport?: () => void;
    onAddNewItem?: () => void;
    onRefresh?: () => void;
    showExport?: boolean;
    showAddNewItem?: boolean;
    showRefresh?: boolean;
}

const SubHeaderComponentMemo: React.FC<SubHeaderComponentMemoProps> = ({
    title,
    onSearch,
    onExport,
    onAddNewItem,
    onRefresh,
    showExport = true,
    showAddNewItem = true,
    showRefresh = true
}) => {
    return (
        <div className='w-full py-2'>
            <div className='flex items-center justify-between w-full'>
                <h2 className="text-2xl font-semibold">{title}</h2>
                {showAddNewItem && (
                    <button
                        className="flex items-center p-2 bg-green-100 text-green-600 text-sm rounded-md hover:bg-green-200"
                        onClick={onAddNewItem}
                    >
                        <FaPlus className="mr-1" />
                        Add New Item
                    </button>
                )}
            </div>
            <div className="w-full flex justify-between items-center py-4  border-b border-gray-300">
                {/* Search Bar */}
                <div className="flex items-center space-x-2">
                    <SearchSelectInput id='search' label='Search' placeholder='Search for anything' handleSearch={onSearch} />
                </div>

                {/* Filters and Actions */}
                <div className="flex items-center justify-center gap-x-4">
                    {showExport && (
                        <button
                            className="text-gray-600 hover:text-green-600 cursor-pointer "
                            onClick={onExport}
                        >
                            <FaFileExport className="" />
                        </button>
                    )}
                    {showRefresh && (
                        <button
                            className="text-gray-600 hover:text-green-600 cursor-pointer"
                            onClick={onRefresh}
                        >
                            <FaSyncAlt className="" />
                        </button>
                    )}
{/* 
                    <div className='flex items-center gap-x-2'>
                        <label htmlFor="items-per-page" className="text-sm text-gray-500">Items per page</label>
                        <select
                            name="items-per-page"
                            id="items-per-page"
                            className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-24 p-2 focus:border-primary-400"
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => onItemsPerPageChange(Number(e.target.value))}
                        >
                            {itemsPerPageOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default memo(SubHeaderComponentMemo);
