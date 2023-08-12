import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css'],
	providers: [CursosService],
})
export class CursosComponent implements OnInit {
	cursos;

	cursosService: CursosService;

	constructor(private _cursosService: CursosService) { 
		//this.cursosService = new CursosService();

		this.cursosService = this._cursosService;

	}

	ngOnInit() {
		this.cursos = this.cursosService.getCursos();
		
		/* modo antigo 
		this.cursosService.emitirCursoCriado.subscribe(function(curso){
			console.log(curso);
		}); */

		CursosService.criouNovoCurso.subscribe(curso => {
			if (curso != null) {
				this.cursos.push(curso);
			}			
		});
	}

}
