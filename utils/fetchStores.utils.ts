// Define the Store interface based on the expected response
export interface Store {
    id: string;
    name: string;
    address: string;
    description: string;
    createdCategories: any[]; 
    updatedCategories: any[];
    createdProducts: any[];
}

interface StoresResponse {
    status: number;
    message: string;
    data: {
        stores: Store[];
    };
}

const fetchStores = async (filters: Record<string, string | number | Date>): Promise<Store[]> => {
    const query = new URLSearchParams(filters as any).toString();
    const response = await fetch(`/api/stores?${query}`);
    const data: StoresResponse = await response.json();
    return data.data.stores;
};

export default fetchStores;
