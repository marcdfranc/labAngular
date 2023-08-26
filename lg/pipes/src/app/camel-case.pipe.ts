import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		let values = value.split(' ');
		let resultado = '';

		for (const v of values) {
			resultado+= this.capitalize(v) + ' ';
		}

		return resultado + args[0]+args[1];
	}

	private capitalize(valor: string) {
		return valor.substr(0, 1) + valor.substr(1).toLowerCase();
	}
}
