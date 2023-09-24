import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParsePaginationPipe } from './parse-pagination.pipe';



@NgModule({
	declarations: [
		ParsePaginationPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		ParsePaginationPipe
	]
})
export class SharedModule { }
