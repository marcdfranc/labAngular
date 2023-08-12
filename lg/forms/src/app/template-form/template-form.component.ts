import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
	selector: 'app-template-form',
	templateUrl: './template-form.component.html',
	styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

	usuario = {
		nome: null,
		email: null
	}


	constructor(private http: Http) { }

	ngOnInit() {
	}

	onSubmit(form) {
		console.log(form);
		
		this.http.post('teste/formulario', JSON.stringify(form.value)).map(res => res).subscribe(dados => console.log(dados));
	}


	verificaValidTouched(campo) {
		return !campo.valid && campo.touched;
	}

	aplicaCssInputErro(campo) {
		return {
			'is-invalid': this.verificaValidTouched(campo)
		}
	}

	consultaCEP(cepInput: NgModel, formulario) {
		this.resetaForm(formulario);
		if (cepInput.valid && cepInput.value !== null && cepInput.value !== '') {
			var cep = cepInput.value.replace(/\D/g, '');

			if (cep !== '') {
				var validaCep = /^[0-9]{8}$/;

				if (validaCep.test(cep)) {
					this.http.get(`https://viacep.com.br/ws/${cep}/json`).map(dados => dados.json()).subscribe(dados => this.populaDados(dados, formulario));

				}
			}
		}

	}

	populaDados(dados, formulario) {
		/* formulario.setValue({
			nome: formulario.value.nome,
			email: formulario.value.email,
			endereco: {
				cep: dados.cep,
				numero: formulario.value.endereco.numero,
				complemento: dados.complemento,
				rua: dados.logradouro,
				bairro: dados.bairro,
				cidade: dados.localidade,
				uf: dados.uf
			}
		}); */

		formulario.form.patchValue({
			endereco: {
				cep: dados.cep,
				complemento: dados.complemento,
				rua: dados.logradouro,
				bairro: dados.bairro,
				cidade: dados.localidade,
				uf: dados.uf
			}
		});
	}

	resetaForm(formulario) {
		formulario.form.patchValue({
			endereco: {
				complemento: null,
				rua: null ,
				bairro: null,
				cidade: null,
				uf: null
			}
		});
	}
}
