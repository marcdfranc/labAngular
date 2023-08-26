import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Person } from 'src/models/Person';

@Injectable({
	providedIn: 'root'
})
export class PersonService {

	private _url: string = "http://localhost:4200/assets/JSONData/person.json" 

	constructor(private _http : HttpClient) { }
	
	getData() : Observable<Person[]> {
		return this._http.get<Person[]>(this._url).pipe(catchError(this.showError));
	}


	showError(errorResponse: HttpErrorResponse)  {
		if (errorResponse.error instanceof ErrorEvent) {
			console.error("Angular Application Error", errorResponse.error.message);			
		} else {
			console.error("Server side Error", errorResponse.error.message);			
		}
		return throwError("Friendly Message to be displayed in console");
	}
}
