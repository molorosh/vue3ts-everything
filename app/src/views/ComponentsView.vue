<script setup lang="ts">
import CodeSnippet from '@/components/CodeSnippet.vue';
const bra = "{{";
const ket = "}}";
</script>

<template>
  <main>
    <h1>Components Page</h1>
    <p>Stuff about components and rendering.</p>
    <h2>CodeSnippet component</h2>
    <p>I wrote a component to show code snippets (so I need to have line breaks).  The guts of it (without the styling) looks like this:</p>
    <CodeSnippet title="simplified component code">&lt;script setup lang="ts"&gt;
import { computed } from "vue";
const props = defineProps&lt;{
  title?: string
}&gt;();
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p v-if="title"&gt;{{bra}} title {{ket}}&lt;/p&gt;
    &lt;pre&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/pre&gt;
  &lt;/div&gt;
&lt;/template&gt;</CodeSnippet>

<CodeSnippet title="CodeSnippet on the page">&lt;CodeSnippet title="the title goes here"&gt;The source code goes here.
In order for the line breaks to get passed through to the 'slot' we need to set
compilerOptions.whitespace = "preserve"&lt;/CodeSnippet&gt;</CodeSnippet>

<p>And this is what that looks like:</p>
    <CodeSnippet title="the title goes here">The source code goes here.
In order for the line breaks to get passed through to the 'slot' we need to set
compilerOptions.whitespace = "preserve"
</CodeSnippet>
    <p>In practise this is done inside vite.config.ts</p>
    <CodeSnippet title="vite.config.ts">plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            whitespace: "preserve",
          },
        },
      }
    ), 
    vueJsx()
  ],</CodeSnippet>

  </main>
</template>
