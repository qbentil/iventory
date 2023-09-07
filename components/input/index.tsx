import { AiFillEdit, AiOutlineEye } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'

import { BiLoaderCircle } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { IconType } from "react-icons/lib";
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdDelete } from 'react-icons/md';

const Input = ({ autoComplete, type, id, name, placeholder, value, onChange }: { type: string, id: string, name?: string, placeholder: string, value: string, onChange: any, autoComplete?: string }) => {
    return (
        <>
            <input
                type={type}
                className=" min-h-[auto] w-full rounded outline-white focus:outline-green-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all  "
                id={id}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete || "off"}
                onChange={onChange}
                value={value}
            />
        </>
    )
}

export const TextArea = ({ id, name, placeholder, value, onChange }: { id: string, name?: string, placeholder: string, value: string, onChange: any }) => {
    return (
        <>
            <textarea
                className=" min-h-[auto] w-full rounded outline-white focus:outline-green-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all  "
                id={id}
                name={name}
                placeholder={placeholder} autoComplete='off'
                onChange={onChange}
                value={value}
            />
        </>
    )
}

export const Select = ({ id, name, placeholder, value, onChange, children }: { id: string, name?: string, placeholder: string, value: string, onChange: any, children: React.ReactNode }) => {
    return (
        <>
            <select
                className=" min-h-[auto] w-full rounded outline-gray-200 focus:outline-green-500 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all  "
                id={id}
                name={name}
                placeholder={placeholder} autoComplete='off'
                onChange={onChange}
                value={value}
            >
                {children}
            </select>
        </>
    )
}

export const Option = ({ value, children }: { value: string, children: React.ReactNode | string }) => {
    return (
        <>
            <option value={value}>{children}</option>
        </>
    )
}

export const Label = ({ htmlFor, children }: { htmlFor: string, children: React.ReactNode | string }) => {
    return (
        <>
            <label htmlFor={htmlFor} className="text-sm text-gray-500 font-bold">{children}</label>
        </>
    )
}

export const Form = ({ onSubmit, children }: { onSubmit: any, children: React.ReactNode }) => {
    return (
        <>
            <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
                {children}
            </form>
        </>
    )
}

export const FilterInput = ({ placeholder, onFilter, onClear, filterText }: { placeholder: string, onFilter: any, onClear: any, filterText: string }) => {
    return (
        <div className="relative w-full flex">
            <input
                className="w-full rounded outline-gray-200 focus:outline-green-500 bg-transparent px-3   leading-[2.15] outline-none transition-all  "
                placeholder={placeholder}
                onChange={onFilter}
                value={filterText}
            />
            {/* Abosulte X in the input when filterText */}
            {filterText && (
                <button
                    onClick={onClear}
                    className="absolute right-5 text-gray-500 hover:text-gray-700"
                >
                    X
                </button>
            )}
        </div>
    )
}



// BUTTONS

export const AddButton = ({ Icon, text, onClick, state }: { Icon?: IconType, text: React.ReactNode | string, onClick: any, state?: boolean }) => {
    return (
        <button
            onClick={onClick}
            className='mr-3 bg-blue-600 flex items-center justify-center text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-500'>
            {
                state ? <BiLoaderCircle className="animate-spin text-white text-lg mr-2" /> : (
                    <>
                        {
                            Icon ? <Icon className='text-2xl' /> : <IoIosAddCircleOutline className='text-2xl' />
                        }
                        <span className='ml-2'>{text}</span>
                    </>
                )
            }
        </button>
    )
}

export const ActionButton = ({ title, action, }: { title: string, action: any }) => {
    const [color, setColor] = useState("bg-gray-400")
    const [icon, setIcon] = useState(<AiOutlineEye className="text-lg " />)
    useEffect(() => {
        switch (title) {
            case "View":
                setColor("bg-blue-500")
                setIcon(<AiOutlineEye className="text-lg " />)
                break;
            case "Edit":
                setColor("bg-gray-400")
                setIcon(<AiFillEdit className="text-lg " />)
                break;
            case "Delete":
                setColor("bg-red-500")
                setIcon(<MdDelete className="text-lg " />)
                break;
            case "Verify":
                setColor("bg-emerald-500")
                setIcon(<BsCheck2 className="text-lg" />)
                break;

            default:
                break;

        }
    }, [title]);
    return (
        <button
            title={title}
            onClick={action}
            className={` 
            ${color} 
             rounded-md text-white p-2`}
        >
            {icon}
        </button>
    )
}



export default Input

