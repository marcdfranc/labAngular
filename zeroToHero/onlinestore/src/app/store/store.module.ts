import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { SharedModule } from '../shared/shared.module';
import { CartSummaryComponent } from '../cart/cart-summary/cart-summary.component';


@NgModule({
	declarations: [
		StoreComponent		
	],
	imports: [
		CommonModule,
		StoreRoutingModule,
		SharedModule
	],
	exports: [
	
	]
})
export class StoreModule { }
