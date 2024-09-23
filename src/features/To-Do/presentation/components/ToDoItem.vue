<script setup lang="ts">
const props = defineProps<{
  text: string;
  completed?: boolean;
  id: number;
}>();

const toggleComplete = () => {
  emit('toggle', {id: props.id, completed: !props.completed}); // Убедись, что completed обновляется корректно
};


const emit = defineEmits();

</script>


<template>
  <div>
    <input type="checkbox" id="todo-item" :checked="completed" @change="toggleComplete"/>
    <label for="todo-item">{{ text }}</label>
    <button @click="emit('edit', props.id)">Редактировать</button>
    <button @click="emit('remove',props.id)">Удалить</button>
  </div>
</template>

<style></style>
