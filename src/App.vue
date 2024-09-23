<script setup lang="ts">
import ToDoItem from "./features/To-Do/presentation/components/ToDoItem.vue";
import {useTodoStore} from "./features/To-Do/domain/store";
import ToDoForm from "./features/To-Do/presentation/components/ToDoForm.vue";
import {ref, watch} from "vue";
import ToDoItemEdit from "./features/To-Do/presentation/components/ToDoItemEdit.vue";

const store = useTodoStore();
const todoItems = ref([]);
const editingTodo = ref(null);

const startEditing = (item) => {
  editingTodo.value = item;
};
const toggle = (id, completed) => {
  store.editTodo(id, completed);
}
const saveTodo = (id, newLabel) => {
  store.editTodo(id, newLabel);
  editingTodo.value = null;
};

const cancelEditing = () => {
  editingTodo.value = null;
};

const deleteTodoItem = (id: number) => {
  store.deleteTodo(id);
};


watch(() => store.todos, (newTodos) => {
  todoItems.value = newTodos;
  console.log(todoItems.value); // Обновленный список задач
});
</script>

<template>
  <div id="app">
    <to-do-form/>
    <h1>To-Do List</h1>
    <ul>
      <li v-for="item in todoItems" :key="item.id">
        <to-do-item :text="item.text"
                    :completed="item.completed"
                    :id="item.id"
                    @remove="deleteTodoItem(item.id)"
                    @edit="startEditing(item)"
                    :class="{ completed: todoItems.completed }"
        />
      </li>
    </ul>
    <to-do-item-edit
        v-if="editingTodo"
        :currentLabel="editingTodo.label"
        :id="editingTodo.id"
        @toggle="toggle"
        @save="saveTodo"
        @cancel="cancelEditing"
    />
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
