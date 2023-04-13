import{q as _,r as m,s as y,d as b,u as C,x as i,o as S,c as V,a as t,j as p,m as v,b as e,t as h,w as f,v as T,y as $}from"./index-a61fba44.js";import{_ as g}from"./CodeSnippet.vue_vue_type_style_index_0_lang-1b2776ef.js";const B=_("counter",()=>{const c=m(0),a=y(()=>c.value*2);function r(){c.value++}return{count:c,doubleCount:a,increment:r}}),D=e("h1",null,"Basic Page",-1),k=e("h2",null,"Some Basic Ref and Store behaviours",-1),I=e("h2",null,"Watchers",-1),N=e("p",null,"watcherCountText:",-1),O=e("p",null,"watchTotalsText:",-1),q=b({__name:"BasicView",setup(c){const a=B(),r=m(a.count),u=C({count:0}),x=()=>{a.increment()},l=m(""),d=m("");return i(r,async(n,o)=>{let w=new Date().toISOString();l.value="value goes from "+o+" to "+n+" at "+w}),i(()=>a.count,n=>{l.value=`count is now: ${n}`}),i(()=>u.count,n=>{l.value=`reactive count is: ${n}`}),i([r,()=>u.count,()=>a.count],(n,o)=>{let s=n[0]+n[1]+n[2],w=(o[0]??0)+(o[1]??0)+(o[2]??0);d.value=`sum is: ${s} (old sum is ${w})`},{immediate:!0}),(n,o)=>(S(),V("main",null,[D,t(),k,t(),p(g,{title:"setup"},{default:v(()=>[t(`import { ref, watch, reactive } from 'vue'\r
import { useCounterStore } from '@/stores/counter'\r
const store = useCounterStore()\r
const count = ref(store.count)\r
// we can also declare things are being reactive in an ad-hoc manner\r
const reactiveThing = reactive({ count: 0 })\r
const increment = () => {\r
  store.increment()\r
}\r
const watcherCountText = ref('')\r
const watchTotalsText = ref('')`)]),_:1}),t(),e("p",null,`\r
      The counter is set to `+h(r.value)+` initially. This one won't automatically change based on the\r
      store value changes.\r
    `,1),t(),e("p",null,[t(`\r
      But you can change it here: `),f(e("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=s=>r.value=s)},null,512),[[T,r.value]]),t(` but this won't change the\r
      value in the store.\r
    `)]),t(),e("p",null,"The Store value can be referenced directly as "+h($(a).count)+".",1),t(),e("p",null,[t(`\r
      and you can change it by calling actions on the store:\r
      `),e("button",{onClick:x},"Increment Counter")]),t(),e("p",null,[t("This is a ad-hoc reactive property "),f(e("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=s=>u.count=s)},null,512),[[T,u.count]])]),t(),I,t(),p(g,{title:"watcher setup"},{default:v(()=>[t(`const watcherCountText = ref('')\r
const watchTotalsText = ref('')\r
// setup watchers\r
// a basic one pointed at a ref<number>\r
watch(count, async (newVal, oldVal) => {\r
  let now = new Date()\r
  let timestamp = now.toISOString()\r
  watcherCountText.value = 'value goes from ' + oldVal + ' to ' + newVal + ' at ' + timestamp\r
})\r
// this is a "getter" watcher that is more flexible in terms of what it watches\r
watch(\r
  () => store.count,\r
  (count) => {\r
    watcherCountText.value = \`count is now: \${count}\`\r
  }\r
)\r
// and we can use the getter pattern to watch for changes\r
watch(\r
  () => reactiveThing.count,\r
  (count) => {\r
    watcherCountText.value = \`reactive count is: \${count}\`\r
  }\r
)\r
// we can watch a lot of different things in an array\r
// and we will also specify immeadiate so that it runs initially too (before any changes)\r
watch([count, () => reactiveThing.count, () => store.count], (newVals, oldVals) => {\r
    let sum = newVals[0] + newVals[1] + newVals[2];\r
    let oldSum = (oldVals[0]??0) + (oldVals[1]??0) + (oldVals[2]??0);\r
    watchTotalsText.value = \`sum is: \${sum} (old sum is \${oldSum})\`\r
  }, \r
  { immediate: true }\r
);`)]),_:1}),t(),N,t(),e("pre",null,h(l.value),1),t(),O,t(),e("pre",null,h(d.value),1)]))}});export{q as default};
