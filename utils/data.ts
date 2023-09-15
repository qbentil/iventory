import { IItem, IRep } from "@/interfaces";

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
        status: 'approved',
        rep: Reps[6],
        created_at: new Date(),
        updated_at: new Date()      
    },
    {
        id: '2',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[8],
        created_at: new Date(),
        updated_at: new Date()      
    },
    {
        id: '3',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[4],
        created_at: new Date(),
        updated_at: new Date()      
    },
    {
        id: '4',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[0],
        created_at: new Date(),
        updated_at: new Date()      
    },
    {
        id: '5',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[3],
        created_at: new Date(),
        updated_at: new Date()      
    },
    {
        id: '6',
        name: 'Item 1',
        description: 'Item 1 description',
        price: 100,
        quantity: 46,
        image: 'https://picsum.photos/200/300',
        category: 'Category 1',
        status: 'approved',
        rep: Reps[5],
        created_at: new Date(),
        updated_at: new Date()      
    },
]