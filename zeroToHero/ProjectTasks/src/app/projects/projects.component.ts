import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	constructor(private _rout : Router) {

	}

	ngOnInit(): void {
		
	}

	NaviHome(): void {
		console.log('function reached.')
		this._rout.navigate(['']);
	}

}
