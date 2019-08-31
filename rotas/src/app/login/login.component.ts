import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './models/usuario';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private usuario: Usuario;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.usuario = new Usuario();
	}

	fazerLogin() {
		this.authService.fazerLogin(this.usuario);
	}
}
