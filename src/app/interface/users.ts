export interface Users {
    username: string;
    name: string;
    email: string;
    company: Array<Company>;
    address: Array<Address>;
}

export interface Address {
    city: string
}

export interface Company {
    name: string;
}

