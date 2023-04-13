<script lang="ts" setup>
import { ToDoState } from '@/localDb/todoDb';
import { computed } from 'vue'
const props = defineProps<{
  val: ToDoState
}>();
const text = computed(() => {
  var txt = "unknown";
  switch(props.val){
    case ToDoState.Cancelled:
      txt = "Abandoned";
      break;
    case ToDoState.Completed: 
      txt = "Done";
      break;
    case ToDoState.New:
      txt = "Fresh";
      break;
    case ToDoState.Paused:
      txt = "On Hold";
      break;
    case ToDoState.Started:
      txt = "In Progress";
      break;
  }
  return txt;
})
</script>
<template>
  <span v-bind:title=val.toString()>{{ text }}</span>
</template>