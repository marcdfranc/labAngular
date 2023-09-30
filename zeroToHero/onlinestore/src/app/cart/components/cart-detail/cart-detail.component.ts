import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent {

	
	constructor(private _router : Router) {	}

	goToCheckout() {
		this._router.navigateByUrl('/checkout');
	}

}
