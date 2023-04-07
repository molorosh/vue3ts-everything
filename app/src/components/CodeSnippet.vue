<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  title?: string
}>();
const hasNoTitle = computed(() => { return props.title === undefined; })
const hastitle = computed(() => { return props.title !== undefined; })
</script>

<template>
  <div class="codeSnippet">
    <p v-if="title" class="codeSnippetTitle">{{ title }}</p>
    <pre class="codeSnippetCode" v-bind:class="{ codeSnippetCode3Corners: hastitle, codeSnippetCode4Corners: hasNoTitle }"><slot></slot></pre>
  </div>
</template>

<style>
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
</style>
