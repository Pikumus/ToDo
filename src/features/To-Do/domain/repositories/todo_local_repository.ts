export abstract class FormRepository {
    abstract getTodo(): Promise<Form>;

    abstract postTodo(form: Form): Promise<void>;
}