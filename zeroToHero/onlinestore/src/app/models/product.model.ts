import { CategoryResponse } from "./category.model";

export interface ProductData {
    name: string;
    description?: string | undefined;
    price: number;
    categoryId: string;
}

export interface ProductResponse {
    id?: string;
    name?: string | undefined;
    description?: string | undefined;
    price?: number | undefined;
    created?: Date;
    category?: CategoryResponse;
}