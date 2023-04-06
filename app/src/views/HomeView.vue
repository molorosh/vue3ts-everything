<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const count = ref(store.count)
// we can also declare things are being reactive in an ad-hoc manner
const reactiveThing = reactive({ count: 0 })
const increment = () => {
  store.increment()
}
const watcherCountText = ref('')
const watchTotalsText = ref('')
// setup watchers
// a basic one pointed at a ref<number>
watch(count, async (newVal, oldVal) => {
  let now = new Date()
  let timestamp = now.toISOString()
  watcherCountText.value = 'value goes from ' + oldVal + ' to ' + newVal + ' at ' + timestamp
})
// this is a "getter" watcher that is more flexible in terms of what it watches
watch(
  () => store.count,
  (count) => {
    watcherCountText.value = `count is now: ${count}`
  }
)
// and we can use the getter pattern to watch for changes
watch(
  () => reactiveThing.count,
  (count) => {
    watcherCountText.value = `reactive count is: ${count}`
  }
)
// we can watch a lot of different things in an array
// and we will also specify immeadiate so that it runs initially too (before any changes)
watch([count, () => reactiveThing.count, () => store.count], (newVals, oldVals) => {
    let sum = newVals[0] + newVals[1] + newVals[2]
    watchTotalsText.value = `sum is: ${sum}`
  }, 
  { immediate: true }
);
</script>

<template>
  <main>
    <h1>Home Page</h1>
    <h2>Some Basic Ref and Store behaviours</h2>
    <p>
      The counter is set to {{ count }} initially. This one won't automatically change based on the
      store value changes.
    </p>
    <p>
      But you can change it here: <input type="number" v-model="count" /> but this won't change the
      value in the store.
    </p>
    <p>The Store value can be referenced directly as {{ store.count }}.</p>
    <p>
      and you can change it by calling actions on the store:
      <button @click="increment">Increment Counter</button>
    </p>
    <p>This is a ad-hoc reactive property <input type="number" v-model="reactiveThing.count" /></p>
    <h2>Watchers</h2>
    <p>watcherCountText:</p>
    <pre>{{ watcherCountText }}</pre>
    <p>watchTotalsText:</p>
    <pre>{{ watchTotalsText }}</pre>
  </main>
</template>
