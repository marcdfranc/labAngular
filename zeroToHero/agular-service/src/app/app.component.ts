import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	persons: any[] = [];

	constructor(private _personService: PersonService) {}

	ngOnInit(): void {
		this._personService.getData().subscribe(data => this.persons = data);
	}

}
