<script setup lang="ts">
import CodeSnippet from '@/components/CodeSnippet.vue';
</script>

<template>
  <main>
    <h1>Home Page</h1>
    <CodeSnippet title="the-title">this is the internal content
that goes onto multiple
lines that =&gt; works</CodeSnippet>
  <hr/>
  <CodeSnippet>this is the internal content
that goes onto multiple
lines that =&gt; works
but has no title!</CodeSnippet>
  </main>
</template>
