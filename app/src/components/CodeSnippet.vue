<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="codeSnippet">
    <p v-if="title" class="codeSnippetTitle">{{ title }}</p>
    <pre class="codeSnippetCode"><slot></slot></pre>
  </div>
</template>

<style>
.codeSnippet {
  color: black;
  margin-left: 0.75rem;
}
.codeSnippetTitle {
  color: black;
  background-color: yellow;
  border: 1px red solid;
  display: inline-block;
}
.codeSnippetCode {
  color: black;
  border: 1px black dashed;
  border-radius: 0.0rem 0.5rem 0.5rem 0.5rem;
}
</style>
