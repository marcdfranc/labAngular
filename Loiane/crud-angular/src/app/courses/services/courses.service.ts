import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http'
import { delay, first } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CoursesService {

	private readonly API = '/api/courses';
	constructor(private httpClient: HttpClient) { }

	list() {		
		return this.httpClient.get<Course[]>(this.API).pipe(
			// delay(5000),
			first()
		);
	}

	loadById(id : string)  {	
		return this.httpClient.get<Course>(`${this.API}/${id}`);
	}

	save(course:  Partial<Course>) {		
		return course.id? this.update(course) : this.create(course);
	}
	
	private create(course:  Partial<Course>) {
		return this.httpClient.post<void>(this.API, course);
		
	}

	private update(course:  Partial<Course>) {
		return this.httpClient.put<void>(`${this.API}/${course.id}`, course);
	}

	remove(id: string) {
		return this.httpClient.delete<void>(`${this.API}/${id}`);
	}
}
