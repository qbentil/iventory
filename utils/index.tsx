import { AiFillTags, AiOutlineStock } from 'react-icons/ai';
import { HiOutlineOfficeBuilding, HiOutlineUsers } from 'react-icons/hi';

import { BiSolidReport } from 'react-icons/bi';
import { FaOpencart } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

export const isValidEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}

// format date as January 1, 2021
export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

}


export const NavItems = [
    { title: 'Items', icon: AiFillTags, color: 'sky', link: '/items' },
    { title: 'Stocks', icon: AiOutlineStock, color: 'green', link: '/stocks' },
    { title: 'Reports', icon: BiSolidReport, color: 'yellow', link: '/reports' },
    { title: 'Requisition', icon: MdOutlineAdminPanelSettings, color: 'red', link: '/requisition' },
    // {title: "Expenditure", icon: MdOutlineAdminPanelSettings, color: 'red', link: '/expenditure'}
    // { title: 'Requisition', icon: FaOpencart, color: 'red', link: '/sales' },
    { title: 'Customers', icon: HiOutlineUsers, color: 'teal', link: '/customers' },
    { title: 'Office', icon: HiOutlineOfficeBuilding, color: 'gray', link: '/office' },

]

export const NavItemsAlt = [
    {
        title: 'Items', icon: ({ className }: { className: string }) => (
            <AiFillTags className={className} />
        ), color: '#87ceeb', link: '/items'
    },
    {
        title: 'Stocks', icon: ({ className }: { className: string }) => (
            <AiOutlineStock className={className} />
        ), color: 'green', link: '/stocks'
    },
    {
        title: 'Reports', icon: ({ className }: { className: string }) => (
            <BiSolidReport className={className} />
        ), color: 'yellow', link: '/reports'
    },
    {
        title: 'Requisition', icon: ({ className }: { className: string }) => (
            <MdOutlineAdminPanelSettings className={className} />
        ), color: 'red', link: '/requisition'
    },
    // {title: "Expenditure", icon: MdOutlineAdminPanelSettings, color: 'red', link: '/expenditure'}
    // { title: 'Requisition', icon: FaOpencart, color: 'red', link: '/sales' },
    {
        title: 'Customers', icon: ({ className }: { className: string }) => (
            <HiOutlineUsers className={className} />
        ), color: 'teal', link: '/customers'
    },
    {
        title: 'Office', icon: ({ className }: { className: string }) => (
            <HiOutlineOfficeBuilding className={className} />
        ), color: 'gray', link: '/office'
    },

]



export const ReduceColorOpacity = (color: string, opacity: number) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
}