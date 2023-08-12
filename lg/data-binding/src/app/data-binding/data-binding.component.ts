import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data-binding',
	templateUrl: './data-binding.component.html',
	styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	url = 'http://loiane.com';
	urlImage = 'http://lorempixel.com/400/200/nature/';
	cursoAngular: boolean = true;
	valorAtual;
	valorSalvo;
	isMouseOver:boolean = false;
	nome: string = "abc";
	nomeCurso: string = "Angular";

	pessoa = {
		nome: "Marcelo",
		idade: 40
	};

	constructor() { }

	ngOnInit() {
	}

	getValor () {
		return 1;
	}

	getCurtirCurso() {
		return true;
	}

	botaoClicado() {
		alert("Dero clique no azul!!!");
	}

	onKeyUp(evento:KeyboardEvent) {
		this.valorAtual = (<HTMLInputElement>evento.target).value;
		
		//let field: HTMLInputElement = <HTMLInputElement>evento.target;

		//console.log(field.value);
		//evento.
	}

	salvarValor(valor) {
		this.valorSalvo = valor;
	}

	mouseOverOut() {
		this.isMouseOver = !this.isMouseOver;
	}

	onMudouValor(evento) {
		console.log(evento.novoValor);
	}
}
