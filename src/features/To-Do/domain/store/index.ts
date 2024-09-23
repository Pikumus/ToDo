import {defineStore} from 'pinia';
import {Todo} from '../models/todo.ts';
import {TodoLocalRepository} from '../../data/repositories/form-local-repository.ts';

const repositories = new TodoLocalRepository();

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as Todo[],
    }),
    actions: {
        async loadTodos() {
            const todos = await repositories.getTodos();
            this.todos = todos || [];
        },
        async addTodo(newTodo: Todo) {
            this.todos.push(newTodo);
            await repositories.saveTodo(this.todos);
        },
        async deleteTodo(id: number) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            await repositories.saveTodo(this.todos);
        },
        async editTodo(id: number, newLabel: string) {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = completed;
                todo.text = newLabel;
                repositories.saveTodos(this.todos);
            }
        },
    },
});
