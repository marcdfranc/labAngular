import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	id: string | null = '';
	constructor(private _route: ActivatedRoute) { }

	ngOnInit(): void {
		this._route.queryParamMap.subscribe(params => this.id = params.get('id'));
	}
}
