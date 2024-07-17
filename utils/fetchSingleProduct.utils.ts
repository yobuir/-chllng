
export interface Category {
    createdAt: string;
    description: string;
    id: string;
    name: string;
    updatedAt: string;
}

export interface User {
    createdAt: string;
    currency: string;
    email: string;
    firstName: string;
    id: string;
    isActive: boolean;
    lastName: string;
    phoneNumber: string;
    shippingAddress: string;
    stripeAccountId: string;
    updatedAt: string;
}

export interface Product {
    category: Category;
    id: string;
    name: string;
    code: string;
    description: string;
    reviews: any[];
    thumbnail: string[];
    unitPrice: number;
    originalPrice: number;
    updatedAt: string;
    updatedBy: User;
    createdBy: User;
    createdAt: string;
}


const fetchProduct = async (id: string): Promise<Product | null> => {
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();
    return data.data as Product;
};

export default fetchProduct;
