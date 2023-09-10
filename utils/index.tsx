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

