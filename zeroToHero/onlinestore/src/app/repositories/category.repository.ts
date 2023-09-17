import { Injectable } from "@angular/core";
import { CategoryResponse } from "../models/category.model";
import { CategoryService } from "../services/category.service";


@Injectable()
export class CategoryRepository {
    private categories : CategoryResponse[] = [];
    
    constructor(private datasource : CategoryService) {
        datasource.listCategories().subscribe((data) => {
            this.categories = data;
        })
    }
}