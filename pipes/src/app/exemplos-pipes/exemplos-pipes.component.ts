import { Component, OnInit } from '@angular/core';
import { resolve } from 'path';
import { reject } from 'q';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-exemplos-pipes',
	templateUrl: './exemplos-pipes.component.html',
	styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

	livro = {
		titulo: 'Learning Javascriot Data Structures ans Algorithms 2nd ed',
		rating: 4.54321,
		numeroPaginas: 314,
		preco: 44.99,
		dataLancamento: new Date(2016, 5, 23),
		url: ' http://a.co/4CKy4vA'
	}

	livros: string[] = ['Java', 'Angula 2', 'Cordova'];

	filtro: string = '';

	valorAsync = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Valor assíncrono'), 2000);
	});

	valorAsync2 = Observable.interval(2000).map(valor => 'Valor assíncrono 2');

	constructor() { }

	ngOnInit() {
	}

	addLivro(livro) {
		this.livros.push(livro);
		//console.log(this.livros);
	}
	
	getLivros() {
		if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
			return this.livros;
		}

		return this.livros.filter(v => v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) != -1);	
	}

}
