import { Component } from '@angular/core';
import { Model, TodoItem } from 'src/models/model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	model = new Model();

	description: string = '';

	getName(): string {
		return this.model.user;
	}

	getTodoItems(): TodoItem[] {
		return this.model.items;
	}

	/*
	to use with html variable
	addTaskItem(description: string): void {
		if (description !== '') {
			this.model.items.push(new TodoItem(description, false));
		}

	}/*/

	addTaskItem(): void {
		if (this.description !== '') {
			this.model.items.push(new TodoItem(this.description, false));
			this.description = '';
		}
	}

	
}
