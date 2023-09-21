import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
	courses$: Observable<Course[]> | null = null;

	constructor(
		private _coursesService: CoursesService,
		public dialog: MatDialog,
		private _router: Router,
		private _route: ActivatedRoute,
		private _snackBar: MatSnackBar
	) {
		this.refresh();
	}

	private refresh() {
		this.courses$ = this._coursesService.list()
			.pipe(
				catchError(error => {
					this.OnError("Error on load courses.");
					return of([])
				})
			);
	}

	OnError(errorMsg: string) {
		this.dialog.open(ErrorDialogComponent, {
			data: errorMsg
		});
	}

	onAdd() {
		this._router.navigate(['new'], { relativeTo: this._route })
	}

	onEdit(course: Course) {
		this._router.navigate(['edit', course.id], { relativeTo: this._route })
	}

	onDelete(course: Course) {
		this._coursesService.remove(course.id).subscribe(() => {
			this.refresh();
			this._snackBar.open(
				"Course removed with success",
				'x',
				{
					duration: 3000,
					verticalPosition: 'top',
					horizontalPosition: 'center'
				}
			);
		}, error => this.OnError("Erro on remove Course"));
	}

}
