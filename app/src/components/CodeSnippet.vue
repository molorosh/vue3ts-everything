<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps<{
  title?: string,
  showCode?: boolean,
  preventToggle?: boolean
}>();
const showToggling = ref(!props.preventToggle === true);
const show = ref(props.showCode != false || props.preventToggle == true);
const hasNoTitle = computed(() => { return props.title === undefined; })
const hastitle = computed(() => { return props.title !== undefined; })
const toggle = () =>{ show.value = !show.value; }
</script>

<template>
  <div class="codeSnippet">
    <p v-if="title" class="codeSnippetTitle">{{ title }} <button class="codeSnippetToggle" v-if="showToggling" @click="toggle()"><span v-if="!show">▼</span><span v-if="show">▲</span></button></p>
    <Transition name="codeSnippetToggle">
      <pre v-if="show" class="codeSnippetCode" v-bind:class="{ codeSnippetCode3Corners: hastitle, codeSnippetCode4Corners: hasNoTitle }"><slot></slot></pre>
  </Transition>
  </div>
</template>

<style>
/* basic styles for code snippet */
button.codeSnippetToggle {
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
  font-size: small;
}
.codeSnippet {
  color: black;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.codeSnippetTitle {
  color: black;
  background-color: rgb(210, 210, 210);
  border: 1px black solid;
  display: inline-block;
  font-family: 'Noto Sans', sans-serif;
  font-size: small;
  padding: 0rem 1rem;
  border-radius: 0.75rem 0.75rem 0.0rem 0.0rem;
}
.codeSnippetCode {
  color: black;
  background-color: rgb(241, 241, 241);
  border: 1px black solid;
  font-family: 'Roboto Mono', monospace;
  font-size: small;
  padding: 0.5rem 1.0rem;
}
.codeSnippetCode3Corners{
  border-radius: 0.0rem 0.75rem 0.75rem 0.75rem;
}
.codeSnippetCode4Corners{
  border-radius: 0.75rem 0.75rem 0.75rem 0.75rem;
}
/* transistions for expand and collapse (name="codeSnippetToggle") */
.codeSnippetToggle-enter-active,
.codeSnippetToggle-leave-active {
  transition: opacity 0.5s ease;
}

.codeSnippetToggle-enter-from,
.codeSnippetToggle-leave-to {
  opacity: 0;
}
</style>
