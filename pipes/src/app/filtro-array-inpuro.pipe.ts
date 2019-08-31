import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
	name: 'filtroArrayInpuro',
	pure: false
})
export class FiltroArrayInpuroPipe extends FiltroArrayPipe {

	
}
