import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';

const ROUTES: Routes = [
	{
		path: 'templateForm',
		component: TemplateFormComponent
	},
	{
		path: 'dataForm',
		component: DataFormComponent
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'templateForm'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
