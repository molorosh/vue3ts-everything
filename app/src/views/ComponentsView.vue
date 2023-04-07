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
    <p>I wrote a component to show code snippets (so I need to have line breaks).  The guts of it (without the styling or transition) looks like this:</p>
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
<h2>Transition</h2>
<p>I've added a a couple of (boolean | undefined) props "showCode" and "preventToggle" that control if the code starts collapsed or visible, and also if the toggle button is there at all.</p>
<h3>Poems by Percy Bysshe Shelley</h3>
<CodeSnippet title="Ozymandias" :showCode=true>I met a traveller from an antique land
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
The lone and level sands stretch far away.</CodeSnippet>
<CodeSnippet title="To a Skylark" :showCode=false>Hail to thee, blithe Spirit!
Bird thou never wert,
That from Heaven, or near it,
Pourest thy full heart
In profuse strains of unpremeditated art. –

Higher still and higher
From the earth thou springest
Like a cloud of fire;
The blue deep thou wingest,
And singing still dost soar, and soaring ever singest.</CodeSnippet>
<CodeSnippet title="Bereavement" :preventToggle=true>How stern are the woes of the desolate mourner
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
When woe fades away like the mist of the heath.</CodeSnippet>
  </main>
</template>
