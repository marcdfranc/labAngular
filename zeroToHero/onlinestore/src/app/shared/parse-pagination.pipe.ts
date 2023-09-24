import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from '../models/pagination.model';

@Pipe({
	name: 'parsePagination'
})
export class ParsePaginationPipe implements PipeTransform {

	transform(value: string, key: string | null): number {
		const pagination = JSON.parse(value);

		switch (key) {
			case 'totalPages':
				return <number> pagination.TotalPages;
			case 'currentPage':
				return <number> pagination.CurrentPage;
			case 'totalPages':
				return <number> pagination.TotalPages;
			case 'totalPages':
				return <number> pagination.TotalPages;

			case '':


			default:
				return  0;				
		}


		

	}

}
