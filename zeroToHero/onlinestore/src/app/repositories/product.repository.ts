import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ProductResponse } from "../models/product.model";


@Injectable()
export class ProductRepository {
    private products : ProductResponse[] = []; 
     

    constructor(private datasource : ProductService) {
        datasource.listProducts().subscribe((data) => {
            this.products = data;
        })
    }
}