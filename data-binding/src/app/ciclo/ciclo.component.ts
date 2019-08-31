import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-ciclo',
	templateUrl: './ciclo.component.html',
	styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

	@Input() valorInicial: number = 10;

	constructor() { 
		console.log("Construtor");
		
	}

	ngOnInit() {
		console.log("ngOnInit");
	}
	
	ngOnChanges() {
		console.log("ngOnChanges");
	}
	
	ngDoCheck() {
		console.log("ngDoCheck");
	}
	
	ngAfterContentChecked() {
		console.log("ngAfterContentChecked");
	}
	
	ngAfterViewInit() {
		console.log("ngAfterViewInit");
	}
	
	ngAfterViewChecked() {
		console.log("ngAfterViewChecked");
	}
	
	ngOnDestroy() {
		console.log("ngOnDestroy");
	}

	private log(hook: string) {
		console.log(hook);
	}

}
