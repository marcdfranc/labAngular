import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { checkoutProtectorGuard } from './guards/checkout-protector.guard';


const routes: Routes = [
	{
		path: '',
		component: CartDetailComponent
	},
	{
		path: 'checkout',
		component: CheckoutComponent,
		canActivate: [checkoutProtectorGuard]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CartRoutingModule { }
