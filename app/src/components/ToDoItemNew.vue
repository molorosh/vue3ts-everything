<script setup lang="ts">
import { db, ToDoState, type ToDoItem } from '@/localDb/todoDb';
import { ref } from 'vue'
defineProps<{
  title: string
}>()
const taskTitle = ref("");
const taskNotes = ref("");
const taskDate = ref(new Date());
const taskError = ref("");
const taskHasError = ref(false);
const taskMessage= ref("");
const taskHasMessage = ref(false);
const addTask = async () =>{
  taskError.value = "";
  taskHasError.value = false;
  taskMessage.value = "";
  taskHasMessage.value = false;
  taskDate.value = new Date();
  try{
    let todo: ToDoItem = {
      title: taskTitle.value,
      notes: taskNotes.value,
      created: taskDate.value,
      state: ToDoState.New
    };
    const id = await db.todos.add(todo);
    taskMessage.value =  `added todo : ${id}`;
  } catch (error) {
    taskError.value = `Failed to add: ${error}`;
  }
  taskHasError.value = taskError.value.length > 0;
  taskHasMessage.value = taskMessage.value.length > 0;
}
</script>

<template>
  <div>
    <p><b>{{ title }}</b></p>
    <p>Title: <input v-model="taskTitle" type="text"/></p>
    <p>Notes: <input v-model="taskNotes" type="text"/></p>
    <p><button @click="addTask">Add</button></p>
    <p style="color:brown;" v-if="taskHasError">Error: {{ taskError }}</p>
    <p style="color:blueviolet" v-if="taskHasMessage">Message: {{ taskMessage }}</p>
  </div>
</template>
