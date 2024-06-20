import { IItem, IRep } from "@/interfaces";

import { DateFormatter } from ".";
import { faker } from '@faker-js/faker';

export const Reps: IRep[] = [
    { name: 'Amy Elsner', email: 'amyelsner@dummymail.com' },
    { name: 'Anna Fali', email: 'annafali@dummymail.com' },
    { name: 'Asiya Javayant', email: 'asiyajavayant@dummymail.com' },
    { name: 'Bernardo Dominic', email: 'bernardodominic@dummymail.com' },
    { name: 'Elwin Sharvill', email: 'elwinsharvill@dummymail.com' },
    { name: 'Ioni Bowcher', email: 'ionibowcher@dummymail.com' },
    { name: 'Ivan Magalhaes', email: 'ivanmagalhaes@dummymail.com' },
    { name: 'Onyama Limba', email: 'onyamalimba@dummymail.com' },
    { name: 'Stephen Shaw', email: 'stephenshaw@dummymail.com' },
    { name: 'XuXue Feng', email: 'xuxuefeng@dummymail.com' }
]

export const Items: IItem[] = [
    {
        id: '1',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'negotiation',
        rep: Reps[6],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '1',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[6],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '1',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[6],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '1',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'pending approval',
        rep: Reps[6],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '1',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[6],
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: '1',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'negotiation',
        rep: Reps[6],
        created_at: new Date(),
        updated_at: new Date()
    },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const BarGraphData = {
    labels: months,
    datasets: [
        {
            label: 'Item 1',
            data: months.map(() => faker.datatype.number({ min: 0, max: 150000 })),
            backgroundColor: '#4CAF50',
            borderColor: '#43A047',
            width: 5,
            borderWidth: 1,
        },
        {
            label: 'Item 2',
            data: months.map(() => faker.datatype.number({ min: 0, max: 150000 })),
            backgroundColor: '#FFB700',
            borderColor: '#FF984D',
            width: 5,
            borderWidth: 1,
        },
    ],
};


export const UserGroups = [
    {
        _id: 11,
        title: "Staff"
    },
    {
        _id: 12,
        title: "HOD",
    },
    {
        _id: 13,
        title: "Audit"
    },
    {
        _id: 14,
        title: "Procurement"
    },
    {
        _id: 15,
        title: "Manager"
    },
    {
        _id: 16,
        title: "Store House"
    }
]

export const getUserGroup = (id: number) => {
    return UserGroups.find((group) => group._id === id)
}

export const ItemsColumns = [
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
        selector: (row: any) => row.actions
    },
];