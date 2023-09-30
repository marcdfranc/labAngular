import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { SharedModule } from '../shared/shared.module';
import { CartSummaryComponent } from '../cart/containers/cart-summary/cart-summary.component';
import { CartModule } from '../cart/cart.module';


@NgModule({
	declarations: [
		StoreComponent		
	],
	imports: [
		CommonModule,
		StoreRoutingModule,
		CartModule,
		SharedModule
	],
	exports: [
	
	]
})
export class StoreModule { }
