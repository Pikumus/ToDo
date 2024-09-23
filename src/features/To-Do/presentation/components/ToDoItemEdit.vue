<template>
  <div>
    <input v-model="updatedLabel" @keyup.enter="save"/>
    <button @click="save">Сохранить</button>
    <button @click="cancel">Отмена</button>
  </div>
</template>

<script setup lang="ts">
import {ref, defineEmits, defineProps} from 'vue';

const props = defineProps<{
  currentLabel: string;
  id: number;
}>();

const emit = defineEmits<{
  (e: 'save', id: number, newLabel: string): void;
  (e: 'cancel'): void;
}>();

const updatedLabel = ref(props.currentLabel);

const save = () => {
  emit('save', props.id, updatedLabel.value);
};

const cancel = () => {
  emit('cancel');
};
</script>

<style scoped>
/* Ваши стили */
</style>
