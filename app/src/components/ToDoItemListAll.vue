<script setup lang="ts">
import { db } from '@/localDb/todoDb';
import { ref } from 'vue'
defineProps<{
  title: string
}>();
const allTodos = ref(await db.todos.toArray());
</script>

<template>
  <div>
    <p><b>{{ title }}</b></p>
    <div class="todoGrid">

        <div class="todoGridHeader" style="grid-row: 1, grid-column: 1;">id</div>
        <div class="todoGridHeader" style="grid-row: 1, grid-column: 2;">title</div>
        <div class="todoGridHeader" style="grid-row: 1, grid-column: 3;">created</div>
        <div class="todoGridHeader" style="grid-row: 1, grid-column: 4;">notes</div>
        <div class="todoGridHeader" style="grid-row: 1, grid-column: 5;">state</div>
        <div class="todoGridHeader" style="grid-row: 1, grid-column: 6;">updated</div>

        <template v-for="(item, index) in allTodos">
          <div class="todoGridItem" :class="{ todoGridItemEven: index%2==0, todoGridItemOdd: index%2==1 }" style="grid-column: 1;">{{ item.id }}</div>
          <div class="todoGridItem" :class="{ todoGridItemEven: index%2==0, todoGridItemOdd: index%2==1 }" style="grid-column: 2;">{{ item.title }}</div>
          <div class="todoGridItem" :class="{ todoGridItemEven: index%2==0, todoGridItemOdd: index%2==1 }" style="grid-column: 3;">{{ item.created }}</div>
          <div class="todoGridItem" :class="{ todoGridItemEven: index%2==0, todoGridItemOdd: index%2==1 }" style="grid-column: 4;">{{ item.notes }}</div>
          <div class="todoGridItem" :class="{ todoGridItemEven: index%2==0, todoGridItemOdd: index%2==1 }" style="grid-column: 5;"><status :val=item.state></status></div>
          <div class="todoGridItem" :class="{ todoGridItemEven: index%2==0, todoGridItemOdd: index%2==1 }" style="grid-column: 6;">{{ item.updated }}</div>
        </template>  
    </div>

    

  </div>
</template>

<style scoped>
.todoGrid {
  display: grid;
  grid-template-columns: [id] 40px [title] auto [created] 300px [notes] 100px [state] 100px [updated] 300px;
  grid-auto-flow: row;
}
.todoGridHeader{
  font-weight: bold;
  background-color: silver;
  border: 1px solid black;
  padding: 0rem 0.1rem;
}
.todoGridItem{
  font-weight: normal;
  border: 1px solid silver;
  padding: 0rem 0.1rem;
}
.todoGridItemEven{
  background-color: white;
}
.todoGridItemOdd{
  background-color: azure;
}
</style>
