<script setup lang="ts">
import { ref } from "vue";
import ToDoItemNew from '@/components/ToDoItemNew.vue';
import ToDoItemListAll from '@/components/ToDoItemListAll.vue';
const dataChanged = () => {
  let newVal = changeFlag.value;
  newVal++
  if(newVal > 100){ 
    newVal = 0;
  }
  changeFlag.value = newVal;
}
const changeFlag = ref(0);
</script>

<template>
  <main>
    <h1>To Do Page</h1>
    <p>
      The obligatory implementation of a simple To-Do app.  
      Since I don't want the hassle of an actual backend datastore 
      (like SQL Server or Mongo DB) I'm using Dexie to store.
    </p>
    <p>We'll have two separate sorts of tasks: Once-and-done tasks and tasks that repeat and can be assigned days of the week.</p>
    <p>We've got a bare-bones dexie implementation.  
      It isn't reactive or dynamic and a manual page refresh is required for new to do items to show up in the list.
      That is something we will fix next.</p>
    <h2>To Do Items</h2>
    <ToDoItemNew title="Create a new To Do Item" @data-update="dataChanged"></ToDoItemNew>
    <Suspense>
      <ToDoItemListAll :key="changeFlag" title="List of all To Do Items"></ToDoItemListAll>
    </Suspense>
    <div>we are using a key to force the update of the list (key = {{ changeFlag }})</div>
  </main>
</template>
