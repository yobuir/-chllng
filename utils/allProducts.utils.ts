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
    originalPrice:number;
    updatedAt: string;
    updatedBy: User;
    createdBy: User;
    createdAt: string; 
}

export interface ProductsResponse {
    status: number;
    message: string;
    data: {
        products: Product[];
    };
}


const fetchProducts = async (filters: Record<string, string | number>): Promise<Product[]> => {
    const query = new URLSearchParams(filters as any).toString();
    const response = await fetch(`/api/products?${query}`);
    const data: ProductsResponse = await response.json();
    return data.data.products;
};

export default fetchProducts; 