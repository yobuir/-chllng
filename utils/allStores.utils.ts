export interface FindStoreFiltersDto {
  name?: string;
  address?: string;
  description?: string;
  pageNumber?: number;
  recordsPerPage?: number;
  sortBy?: string;
  sortOrder?: string;
  createdFromDate?: string;
  createdToDate?: string;
  numberOfProducts?: string;
}


export async function fetchStores(filters: FindStoreFiltersDto): Promise<any> {
  const queryParams = new URLSearchParams(filters as any).toString();
  const response = await fetch(`/api/stores?${queryParams}`);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}
