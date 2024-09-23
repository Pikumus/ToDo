<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useTodoStore} from "../../domain/store";
import {Todo} from "../../domain/models/todo.ts";

const store = useTodoStore();

onMounted(async () => {
  await store.loadTodos();
});

async function onSubmit() {
  if (text.value.trim()) {
    const newTodo: Todo = {
      id: Date.now(),
      text: text.value,
      completed: false,
    };

    await store.addTodo(newTodo);
    text.value = '';
  }
}
const text = ref("");
</script>

<template>
  <form @submit.prevent="onSubmit">
    <text for="new-todo-input">What needs to be done?</text>
    <input
        type="text"
        id="new-todo-input"
        name="new-todo"
        autocomplete="off"
        v-model.lazy.trim=text
    />
    <button type="submit">Add</button>
  </form>
</template>

<style scoped>
/* Ваши стили */
</style>
