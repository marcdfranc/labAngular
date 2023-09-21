import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course';

@Component({
	selector: 'app-course-form',
	templateUrl: './course-form.component.html',
	styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

	form = this._formBuilder.group(
	{
		id: [''],
		name: [''],
		category: ['']
	});		
	
	constructor(
		private _formBuilder: NonNullableFormBuilder, 
		private _coursesService: CoursesService,
		private _snackBar: MatSnackBar,
		private _location: Location,
		private _route : ActivatedRoute
	) {
		/*this.form = this._formBuilder.group(
		{
			name: [null],
			category: [null]
		});	*/	
	}

	ngOnInit(): void {
		const course : Course = this._route.snapshot.data['course'];
		this.form.setValue(course);
	}

	onSubmit() {
		this._coursesService.save(this.form.value)
			.subscribe(result => this.onSuccess(), error => this.onError());
	}

	onCancel() {
		this._location.back();
	}

	private onSuccess() {
		this._snackBar.open(					
			"Course Created with success",
			'',
			{ duration : 3000}
		);
		this.onCancel();
	}

	private onError() {
		this._snackBar.open(					
			"Error on save Course.",
			'',
			{ duration : 3000}
		)
	}

}
