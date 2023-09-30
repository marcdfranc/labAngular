import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
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
