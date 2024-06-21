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

export interface ISupplier {
    id: string;
    name: string;
    contactPerson: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    description: string;
    status: "active" | "inactive";
}

export interface IWarehouse {
    id: string;
    name: string;
    address: string;
    city: string;
    country: string;
    capacity: number;
    rackCount: number;
    aisleCount: number;
    binCount: number;
    description: string;
    status: "active" | "inactive"
}
