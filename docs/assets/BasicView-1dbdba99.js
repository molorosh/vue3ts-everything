import{d as x,r as m,e as y,f as b,g as C,w as i,o as S,c as V,a as t,h as p,i as v,b as e,t as h,j as f,v as T,u as $}from"./index-b2e191c0.js";import{_ as g}from"./CodeSnippet.vue_vue_type_style_index_0_lang-d2e38f13.js";const B=x("counter",()=>{const u=m(0),a=y(()=>u.value*2);function s(){u.value++}return{count:u,doubleCount:a,increment:s}}),D=e("h1",null,"Basic Page",-1),k=e("h2",null,"Some Basic Ref and Store behaviours",-1),I=e("h2",null,"Watchers",-1),N=e("p",null,"watcherCountText:",-1),O=e("p",null,"watchTotalsText:",-1),E=b({__name:"BasicView",setup(u){const a=B(),s=m(a.count),r=C({count:0}),_=()=>{a.increment()},l=m(""),d=m("");return i(s,async(n,o)=>{let w=new Date().toISOString();l.value="value goes from "+o+" to "+n+" at "+w}),i(()=>a.count,n=>{l.value=`count is now: ${n}`}),i(()=>r.count,n=>{l.value=`reactive count is: ${n}`}),i([s,()=>r.count,()=>a.count],(n,o)=>{let c=n[0]+n[1]+n[2],w=(o[0]??0)+(o[1]??0)+(o[2]??0);d.value=`sum is: ${c} (old sum is ${w})`},{immediate:!0}),(n,o)=>(S(),V("main",null,[D,t(),k,t(),p(g,{title:"setup"},{default:v(()=>[t(`import { ref, watch, reactive } from 'vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const count = ref(store.count)
// we can also declare things are being reactive in an ad-hoc manner
const reactiveThing = reactive({ count: 0 })
const increment = () => {
  store.increment()
}
const watcherCountText = ref('')
const watchTotalsText = ref('')`)]),_:1}),t(),e("p",null,`
      The counter is set to `+h(s.value)+` initially. This one won't automatically change based on the
      store value changes.
    `,1),t(),e("p",null,[t(`
      But you can change it here: `),f(e("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=c=>s.value=c)},null,512),[[T,s.value]]),t(` but this won't change the
      value in the store.
    `)]),t(),e("p",null,"The Store value can be referenced directly as "+h($(a).count)+".",1),t(),e("p",null,[t(`
      and you can change it by calling actions on the store:
      `),e("button",{onClick:_},"Increment Counter")]),t(),e("p",null,[t("This is a ad-hoc reactive property "),f(e("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=c=>r.count=c)},null,512),[[T,r.count]])]),t(),I,t(),p(g,{title:"watcher setup"},{default:v(()=>[t(`const watcherCountText = ref('')
const watchTotalsText = ref('')
// setup watchers
// a basic one pointed at a ref<number>
watch(count, async (newVal, oldVal) => {
  let now = new Date()
  let timestamp = now.toISOString()
  watcherCountText.value = 'value goes from ' + oldVal + ' to ' + newVal + ' at ' + timestamp
})
// this is a "getter" watcher that is more flexible in terms of what it watches
watch(
  () => store.count,
  (count) => {
    watcherCountText.value = \`count is now: \${count}\`
  }
)
// and we can use the getter pattern to watch for changes
watch(
  () => reactiveThing.count,
  (count) => {
    watcherCountText.value = \`reactive count is: \${count}\`
  }
)
// we can watch a lot of different things in an array
// and we will also specify immeadiate so that it runs initially too (before any changes)
watch([count, () => reactiveThing.count, () => store.count], (newVals, oldVals) => {
    let sum = newVals[0] + newVals[1] + newVals[2];
    let oldSum = (oldVals[0]??0) + (oldVals[1]??0) + (oldVals[2]??0);
    watchTotalsText.value = \`sum is: \${sum} (old sum is \${oldSum})\`
  }, 
  { immediate: true }
);`)]),_:1}),t(),N,t(),e("pre",null,h(l.value),1),t(),O,t(),e("pre",null,h(d.value),1)]))}});export{E as default};
