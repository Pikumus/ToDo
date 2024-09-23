import {Todo_local_repository} from "../../domain/repositories/todo_local_repository.ts";
import {Todo} from "../../domain/models/todo.ts"

export class TodoLocalRepository extends Todo_local_repository {
    STORAGE_KEY_FORM = 'TodoList';

    async getTodos(): Promise<Todo[]> {
        const form = localStorage.getItem(this.STORAGE_KEY_FORM);
        return form ? JSON.parse(form) : null;
    }

    async saveTodo(todos: Todo[]): Promise<void> {
        console.log("Todo list saved:", todos);
        localStorage.setItem(this.STORAGE_KEY_FORM, JSON.stringify(todos));
    }

}
