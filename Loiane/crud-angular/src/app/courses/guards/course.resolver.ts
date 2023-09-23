import { ResolveFn } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { inject } from '@angular/core';
import { Course } from '../models/course';
import { of } from 'rxjs';

export const courseResolver: ResolveFn<Course> = (route, state, service: CoursesService = inject(CoursesService)) => {

	if (route.params && route.params['id']) {
		return service.loadById(route.params['id']);
	}
	
	return of({
		id: '',
		name: '',
		category: ''
	});
};
