interface ITodo {
  description: string;
  done: boolean;
}

export class App {
  heading: string;
  todos: ITodo[];
  todoDescription: string;
  result: string;
  items: string[] = ["Voici", "mon", "premier", "message"];

  constructor() {
    this.heading = 'Todos';
    this.todos = [];
    this.todoDescription = '';
    // reduce test
    this.result = this.items.reduce((accumulator: string, currentValue: string) => { return accumulator + currentValue }, "");
  }

  addTodo(): void {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }

  removeTodo(todo: ITodo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
