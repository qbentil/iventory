

"use client"

import { FC, useState } from "react";

import { SearchNormal } from "iconsax-react";
import _ from "lodash";

interface SearchSelectInputProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  labelHidden?: boolean;
  handleSearch: (query: string) => void;
}

const SearchSelectInput: FC<SearchSelectInputProps> = ({ id, placeholder, label, required, labelHidden, disabled, handleSearch }) => {

  return (

    <form className="flex items-center max-w-sm mx-auto">
      {
        !labelHidden && <label htmlFor="simple-search" className="sr-only">{label}</label>
      }
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchNormal size={14} className="text-gray-400" variant="TwoTone" />
        </div>
        <input onChange={
          _.debounce((e) => {
            handleSearch(e.target.value);
          }, 500)

        }
          id={id}
          disabled={disabled}
          required={required}
          type="text" className="border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-72 ps-10 p-2.5 focus:border-primary-400  " placeholder={placeholder || "Search all..."} />
      </div>
    </form>

  )
}

export default SearchSelectInput;