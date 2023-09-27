import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart-summary',
	templateUrl: './cart-summary.component.html',
	styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

	
	constructor(private _router: Router) {
			
	}

	openCart() {
		this._router.navigateByUrl('/cart');
	}

	
}
