import{_ as o}from"./CodeSnippet.vue_vue_type_style_index_0_lang-d2e38f13.js";import{f as l,o as a,c,a as e,h as n,i as s,b as t,t as i}from"./index-b2e191c0.js";const h=t("h1",null,"Components Page",-1),d=t("p",null,"Stuff about components and rendering.",-1),u=t("h2",null,"CodeSnippet component",-1),_=t("p",null,"I wrote a component to show code snippets (so I need to have line breaks).  The guts of it (without the styling) looks like this:",-1),m=t("p",null,"And this is what that looks like:",-1),f=t("p",null,"In practise this is done inside vite.config.ts",-1),b=l({__name:"ComponentsView",setup(g){const p="{{",r="}}";return(v,w)=>(a(),c("main",null,[h,e(),d,e(),u,e(),_,e(),n(o,{title:"simplified component code"},{default:s(()=>[e(`<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  title?: string
}>();
<\/script>

<template>
  <div>
    <p v-if="title">`+i(p)+" title "+i(r)+`</p>
    <pre><slot></slot></pre>
  </div>
</template>`)]),_:1}),e(),n(o,{title:"CodeSnippet on the page"},{default:s(()=>[e(`<CodeSnippet title="the title goes here">The source code goes here.
In order for the line breaks to get passed through to the 'slot' we need to set
compilerOptions.whitespace = "preserve"</CodeSnippet>`)]),_:1}),e(),m,e(),n(o,{title:"the title goes here"},{default:s(()=>[e(`The source code goes here.
In order for the line breaks to get passed through to the 'slot' we need to set
compilerOptions.whitespace = "preserve"
`)]),_:1}),e(),f,e(),n(o,{title:"vite.config.ts"},{default:s(()=>[e(`plugins: [
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
  ],`)]),_:1})]))}});export{b as default};
