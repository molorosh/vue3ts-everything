import{_ as n}from"./CodeSnippet.vue_vue_type_style_index_0_lang-3a770bc3.js";import{e as h,o as l,c as d,a as e,b as o,m as r,d as t,t as s}from"./index-223e0880.js";const p=t("h1",null,"Components Page",-1),c=t("p",null,"Stuff about components and rendering.",-1),f=t("h2",null,"CodeSnippet component",-1),u=t("p",null,"I wrote a component to show code snippets (so I need to have line breaks).  The guts of it (without the styling or transition) looks like this:",-1),m=t("p",null,"And this is what that looks like:",-1),g=t("p",null,"In practise this is done inside vite.config.ts",-1),w=t("h2",null,"Transition",-1),_=t("p",null,`I've added a a couple of (boolean | undefined) props "showCode" and "preventToggle" that control if the code starts collapsed or visible, and also if the toggle button is there at all.`,-1),v=t("h3",null,"Poems by Percy Bysshe Shelley",-1),S=h({__name:"ComponentsView",setup(k){const a="{{",i="}}";return(b,y)=>(l(),d("main",null,[p,e(),c,e(),f,e(),u,e(),o(n,{title:"simplified component code"},{default:r(()=>[e(`<script setup lang="ts">\r
import { computed } from "vue";\r
const props = defineProps<{\r
  title?: string\r
}>();\r
<\/script>\r
\r
<template>\r
  <div>\r
    <p v-if="title">`+s(a)+" title "+s(i)+`</p>\r
    <pre><slot></slot></pre>\r
  </div>\r
</template>`)]),_:1}),e(),o(n,{title:"CodeSnippet on the page"},{default:r(()=>[e(`<CodeSnippet title="the title goes here">The source code goes here.\r
In order for the line breaks to get passed through to the 'slot' we need to set\r
compilerOptions.whitespace = "preserve"</CodeSnippet>`)]),_:1}),e(),m,e(),o(n,{title:"the title goes here"},{default:r(()=>[e(`The source code goes here.\r
In order for the line breaks to get passed through to the 'slot' we need to set\r
compilerOptions.whitespace = "preserve"\r
`)]),_:1}),e(),g,e(),o(n,{title:"vite.config.ts"},{default:r(()=>[e(`plugins: [\r
    vue(\r
      {\r
        template: {\r
          compilerOptions: {\r
            whitespace: "preserve",\r
          },\r
        },\r
      }\r
    ), \r
    vueJsx()\r
  ],`)]),_:1}),e(),w,e(),_,e(),v,e(),o(n,{title:"Ozymandias",showCode:!0},{default:r(()=>[e(`I met a traveller from an antique land\r
Who said: Two vast and trunkless legs of stone\r
Stand in the desert. Near them, on the sand,\r
Half sunk, a shattered visage lies, whose frown,\r
And wrinkled lip, and sneer of cold command,\r
Tell that its sculptor well those passions read\r
Which yet survive, stamped on these lifeless things,\r
The hand that mocked them, and the heart that fed;\r
And on the pedestal these words appear:\r
“My name is Ozymandias, king of kings:\r
Look on my works, ye Mighty, and despair!”\r
Nothing beside remains. Round the decay\r
Of that colossal wreck, boundless and bare\r
The lone and level sands stretch far away.`)]),_:1}),e(),o(n,{title:"To a Skylark",showCode:!1},{default:r(()=>[e(`Hail to thee, blithe Spirit!\r
Bird thou never wert,\r
That from Heaven, or near it,\r
Pourest thy full heart\r
In profuse strains of unpremeditated art. –\r
\r
Higher still and higher\r
From the earth thou springest\r
Like a cloud of fire;\r
The blue deep thou wingest,\r
And singing still dost soar, and soaring ever singest.`)]),_:1}),e(),o(n,{title:"Bereavement",preventToggle:!0},{default:r(()=>[e(`How stern are the woes of the desolate mourner\r
As he bends in still grief o’er the hallowed bier,\r
As enanguished he turns from the laugh of the scorner,\r
And drops to perfection’s remembrance a tear;\r
When floods of despair down his pale cheeks are streaming,\r
When no blissful hope on his bosom is beaming,\r
Or, if lulled for a while, soon he starts from his dreaming,\r
And finds torn the soft ties to affection so dear.\r
Ah, when shall day dawn on the night of the grave,\r
Or summer succeed to the winter of death?\r
Rest awhle, hapless victim! and Heaven will save\r
The spirit that hath faded away with the breath.\r
Eternity points, in its amaranth bower\r
Where no clouds of fate o’er the sweet prospect lour,\r
Unspeakable pleasure, of goodness the dower,\r
When woe fades away like the mist of the heath.`)]),_:1})]))}});export{S as default};
