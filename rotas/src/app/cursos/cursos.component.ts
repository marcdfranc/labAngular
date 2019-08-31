import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

	cursos;
	pagina: number;
	subscribe: Subscription;

	constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.cursos = this.cursosService.getCursos();
		this.subscribe = this.route.queryParams.subscribe(queryParams => {
			this.pagina = queryParams['pagina'];
		});
	}

	ngOnDestroy() {
		this.subscribe.unsubscribe();
	}

	nextPage() {
		this.router.navigate(['/cursos'], {
			queryParams: {
				'pagina': ++this.pagina
			}
		});
	}
}
