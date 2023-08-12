import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from "../shared/services/log.service";


@Injectable()
export class CursosService  {
	
	emitirCursoCriado = new EventEmitter<string>();
	static criouNovoCurso = new EventEmitter<string>();

	private cursos = ['Angular 2', 'Java', 'Phonegap'];

	constructor(private logService : LogService) {

	}


	getCursos() {
		this.logService.consoleLog('Obtendo lista de cursos');
		return this.cursos;
	}

	addCurso(curso: string) {
		this.logService.consoleLog(`Criando curso: ${curso}`);
		this.cursos.push(curso);
		this.emitirCursoCriado.emit(curso);
		CursosService.criouNovoCurso.emit(curso);
	}
}