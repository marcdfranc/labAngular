import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	projects: string[] = [];
	itemCounter: number = this.projects.length;
	projectText: string = "Angular Project";


	ngOnInit(): void {

	}

	addItem() {
		this.projects.push(this.projectText);
		this.projectText = '';
		this.itemCounter = this.projects.length;
	}

	removeItem( i:number) {
	
		this.projects.splice(i,1);
		this.itemCounter = this.projects.length;
	}
}
