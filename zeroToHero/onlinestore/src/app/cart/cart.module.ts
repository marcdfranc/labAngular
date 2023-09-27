import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
	declarations: [
		CartSummaryComponent,
		CartDetailComponent,
		CheckoutComponent
	],
	imports: [
		CommonModule,
		CartRoutingModule
	],
	exports: [
		CartSummaryComponent
	]
})
export class CartModule { }
