export interface TodoItem {
	description: string,
	done: boolean;
}

export interface Model {
	user: string,
	items: TodoItem[]
}

export class Model implements Model {
	constructor() {
		this.user = "Marcelo";
		this.items = [
			{description: 'Buy Flowers', done: false},
			{description: 'Get Shoes', done: false},
			{description: 'Collect Tickets', done: true},
			{description: 'Do Workout', done: false}
		]
	}
}

export class TodoItem implements TodoItem {
	constructor(description: string, done: boolean) {
		this.description = description;
		this.done = done;
	}
}