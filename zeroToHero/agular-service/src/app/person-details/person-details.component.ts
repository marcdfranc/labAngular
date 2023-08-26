import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
	persons: any[] = [];
	
	constructor(private _personService: PersonService) {	}

	ngOnInit(): void {
		this._personService.getData().subscribe(data => this.persons = data);
	}

}
