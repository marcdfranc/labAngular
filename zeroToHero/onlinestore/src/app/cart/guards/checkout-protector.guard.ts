import { CanActivateFn, Router } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { inject } from '@angular/core';

export const checkoutProtectorGuard: CanActivateFn = (route, state, router: Router = inject(Router)) => {
	if (route.component === CheckoutComponent) {
		if (!state.root.component) {
			router.navigateByUrl('store');
			return false;
		}
	}
	return true;
};
