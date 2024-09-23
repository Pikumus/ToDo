import {Todo} from "../models/todo.ts";

export abstract class Todo_local_repository {
    abstract getTodos(): Promise<Todo>;

    abstract saveTodo(form: Todo): Promise<void>;
}