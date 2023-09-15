export interface IRep {
    name: string;
    email: string
}

export interface IItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
    created_at: Date;
    updated_at: Date;
    status: 'pending approval' | 'approved' | 'new' | 'negotiation' | 'renewal';
    rep: IRep;
}

export interface ICategory {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
}

