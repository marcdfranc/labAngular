import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';

	mostrarMenu: boolean = false;

	constructor(private authService: AuthService) {
		this.mostrarMenu = this.authService.usuarioEstaAutenticado();
		if (this.mostrarMenu) {
			console.log(this);
		} else {
			console.log('sem menu');
		}
	}

	ngOnInit(): void {
		this.authService.mostrarMenuEmitter.subscribe(
			mostrar => this.mostrarMenu = mostrar
		);
	}
}
