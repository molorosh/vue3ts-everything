import{_ as n}from"./CodeSnippet.vue_vue_type_style_index_0_lang-9c4000a0.js";import{f as h,o as l,c as d,a as e,h as o,i as s,b as t,t as a}from"./index-0422dd54.js";const p=t("h1",null,"Components Page",-1),c=t("p",null,"Stuff about components and rendering.",-1),f=t("h2",null,"CodeSnippet component",-1),u=t("p",null,"I wrote a component to show code snippets (so I need to have line breaks).  The guts of it (without the styling or transition) looks like this:",-1),m=t("p",null,"And this is what that looks like:",-1),g=t("p",null,"In practise this is done inside vite.config.ts",-1),w=t("h2",null,"Transition",-1),_=t("p",null,`I've added a a couple of (boolean | undefined) props "showCode" and "preventToggle" that control if the code starts collapsed or visible, and also if the toggle button is there at all.`,-1),v=t("h3",null,"Poems by Percy Bysshe Shelley",-1),S=h({__name:"ComponentsView",setup(k){const i="{{",r="}}";return(b,y)=>(l(),d("main",null,[p,e(),c,e(),f,e(),u,e(),o(n,{title:"simplified component code"},{default:s(()=>[e(`<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  title?: string
}>();
<\/script>

<template>
  <div>
    <p v-if="title">`+a(i)+" title "+a(r)+`</p>
    <pre><slot></slot></pre>
  </div>
</template>`)]),_:1}),e(),o(n,{title:"CodeSnippet on the page"},{default:s(()=>[e(`<CodeSnippet title="the title goes here">The source code goes here.
In order for the line breaks to get passed through to the 'slot' we need to set
compilerOptions.whitespace = "preserve"</CodeSnippet>`)]),_:1}),e(),m,e(),o(n,{title:"the title goes here"},{default:s(()=>[e(`The source code goes here.
In order for the line breaks to get passed through to the 'slot' we need to set
compilerOptions.whitespace = "preserve"
`)]),_:1}),e(),g,e(),o(n,{title:"vite.config.ts"},{default:s(()=>[e(`plugins: [
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
  ],`)]),_:1}),e(),w,e(),_,e(),v,e(),o(n,{title:"Ozymandias",showCode:!0},{default:s(()=>[e(`I met a traveller from an antique land
Who said: Two vast and trunkless legs of stone
Stand in the desert. Near them, on the sand,
Half sunk, a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal these words appear:
“My name is Ozymandias, king of kings:
Look on my works, ye Mighty, and despair!”
Nothing beside remains. Round the decay
Of that colossal wreck, boundless and bare
The lone and level sands stretch far away.`)]),_:1}),e(),o(n,{title:"To a Skylark",showCode:!1},{default:s(()=>[e(`Hail to thee, blithe Spirit!
Bird thou never wert,
That from Heaven, or near it,
Pourest thy full heart
In profuse strains of unpremeditated art. –

Higher still and higher
From the earth thou springest
Like a cloud of fire;
The blue deep thou wingest,
And singing still dost soar, and soaring ever singest.`)]),_:1}),e(),o(n,{title:"Bereavement",preventToggle:!0},{default:s(()=>[e(`How stern are the woes of the desolate mourner
As he bends in still grief o’er the hallowed bier,
As enanguished he turns from the laugh of the scorner,
And drops to perfection’s remembrance a tear;
When floods of despair down his pale cheeks are streaming,
When no blissful hope on his bosom is beaming,
Or, if lulled for a while, soon he starts from his dreaming,
And finds torn the soft ties to affection so dear.
Ah, when shall day dawn on the night of the grave,
Or summer succeed to the winter of death?
Rest awhle, hapless victim! and Heaven will save
The spirit that hath faded away with the breath.
Eternity points, in its amaranth bower
Where no clouds of fate o’er the sweet prospect lour,
Unspeakable pleasure, of goodness the dower,
When woe fades away like the mist of the heath.`)]),_:1})]))}});export{S as default};
