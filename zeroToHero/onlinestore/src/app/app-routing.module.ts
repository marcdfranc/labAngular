import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store/store.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'store'
	},
	{
		path: 'store',
		loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
	}	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
