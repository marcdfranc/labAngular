import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { CategoryResponse } from 'src/app/models/category.model';
import { List, Pagination } from 'src/app/models/pagination.model';
import { ProductResponse } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: ['./store.component.css']
})
export class StoreComponent {
	products$ : Observable<List<ProductResponse>> | null = null;
	
	pageNumbers: number[] = [];
	currentPage = 1;
	categories: CategoryResponse[] = [];
	selectedCategory : string | undefined = undefined;
	pageSize : number = 4;

	
	constructor(private _productService : ProductService, private _categoryService : CategoryService) {
		this.refresh();
		this._categoryService.listCategories()			
			.subscribe( c => {
				this.categories = c;
			});
	}
	

	private refresh() {		
		this.products$ = this._productService.listProducts(this.selectedCategory, this.currentPage, this.pageSize)
				
	}

	changeCategory(category : string | undefined) {
		this.selectedCategory = category;
		this.currentPage = 1;
		this.refresh();		
	}

	getPageNumbers(pagination : Pagination | null) : number[] {
		return pagination? Array(pagination.totalPages).fill(0).map((x, i)=> i + 1) : [];		
	}

	changePageSize(newSize : number) {		
		this.pageSize = Number(newSize);
		this.currentPage = 1;
		this.refresh();	
	}

	changePage(page: number) {
		this.currentPage = page
		this.refresh();
	}

}
