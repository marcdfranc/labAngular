import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './containers/cart-summary/cart-summary.component';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
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
