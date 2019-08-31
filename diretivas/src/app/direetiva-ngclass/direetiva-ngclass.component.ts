import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-direetiva-ngclass',
	templateUrl: './direetiva-ngclass.component.html',
	styleUrls: ['./direetiva-ngclass.component.css']
})
export class DireetivaNgclassComponent implements OnInit {
	meuFavorito: boolean = false;
	
	constructor() { }

	ngOnInit() {
	}

	onClick() {
		this.meuFavorito = !this.meuFavorito;

	}
}
