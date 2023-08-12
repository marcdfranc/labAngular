import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-direetiva-ngstyle',
	templateUrl: './direetiva-ngstyle.component.html',
	styleUrls: ['./direetiva-ngstyle.component.css']
})
export class DireetivaNgstyleComponent implements OnInit {

	ativo: boolean = false;
	tamanhoFonte: number = 10;
	constructor() { }

	ngOnInit() {
	}

	mudarAtivo() {
		this.ativo = !this.ativo;
	}
}
