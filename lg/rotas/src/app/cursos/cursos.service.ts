import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

	constructor() { }
	
	getCursos () {
		return [
			{id: 1, nome: 'Angular 5'},
			{id: 2, nome: 'Java'},
			{id: 3, nome: 'Oracle DB'}
		];
	}

	getCurso(id: number) {
		let cursos: any[] = this.getCursos();
		return cursos.find(curso => curso.id == id);
	}
}
