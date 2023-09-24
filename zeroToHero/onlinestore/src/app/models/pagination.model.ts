export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class Pagination implements Pagination {
    constructor(init: PaginationValues) {
		Object.assign(this, init);
	}
}

export class PaginationValues {
    currentPage: number = 0;
    itemsPerPage: number = 0;
    totalItems: number = 0;
    totalPages: number = 0;

    constructor(pagination: PaginationValues) {
        if (pagination) {
            this.currentPage = pagination.currentPage;
            this.itemsPerPage = pagination.itemsPerPage;
            this.totalItems = pagination.totalItems;
            this.totalPages = pagination.totalPages;
        }
    }
}


export interface List<Type> {
    items : Type[],
    pagination: Pagination
}

export class List<Type> implements List<Type> {
    constructor(init: ListValues<Type>) {
		Object.assign(this, init);
	}
}


export class ListValues<Type> {
    items : Type[] = []
    pagination: Pagination = {
        currentPage: 0,
        itemsPerPage: 0,
        totalItems: 0,
        totalPages: 0
    };

    constructor(items : Type[], pagination: Pagination ) {
        if (items) {
            this.items = items;
        }
        if (pagination) {
            this.pagination = pagination;
        }
    }
}
