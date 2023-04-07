import{d as w,r as p,e as _,f as g,g as S,w as i,o as x,c as b,a as e,b as t,t as h,h as v,v as f,u as y}from"./index-ae420116.js";const C=w("counter",()=>{const u=p(0),c=_(()=>u.value*2);function a(){u.value++}return{count:u,doubleCount:c,increment:a}}),B=t("h1",null,"Basic Page",-1),$=t("h2",null,"Some Basic Ref and Store behaviours",-1),k=t("pre",{class:"codeSnippet"},`import { ref, watch, reactive } from 'vue'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const count = ref(store.count)
// we can also declare things are being reactive in an ad-hoc manner
const reactiveThing = reactive({ count: 0 })
const increment = () => {
  store.increment()
}
const watcherCountText = ref('')
const watchTotalsText = ref('')`,-1),D=t("h2",null,"Watchers",-1),I=t("pre",{class:"codeSnippet"},`const watcherCountText = ref('')
const watchTotalsText = ref('')`,-1),N=t("p",null,"watcherCountText:",-1),U=t("p",null,"watchTotalsText:",-1),M=g({__name:"BasicView",setup(u){const c=C(),a=p(c.count),r=S({count:0}),T=()=>{c.increment()},l=p(""),d=p("");return i(a,async(n,o)=>{let m=new Date().toISOString();l.value="value goes from "+o+" to "+n+" at "+m}),i(()=>c.count,n=>{l.value=`count is now: ${n}`}),i(()=>r.count,n=>{l.value=`reactive count is: ${n}`}),i([a,()=>r.count,()=>c.count],(n,o)=>{let s=n[0]+n[1]+n[2],m=(o[0]??0)+(o[1]??0)+(o[2]??0);d.value=`sum is: ${s} (old sum is ${m})`},{immediate:!0}),(n,o)=>(x(),b("main",null,[B,e(),$,e(),k,e(),t("p",null,`
      The counter is set to `+h(a.value)+` initially. This one won't automatically change based on the
      store value changes.
    `,1),e(),t("p",null,[e(`
      But you can change it here: `),v(t("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=s=>a.value=s)},null,512),[[f,a.value]]),e(` but this won't change the
      value in the store.
    `)]),e(),t("p",null,"The Store value can be referenced directly as "+h(y(c).count)+".",1),e(),t("p",null,[e(`
      and you can change it by calling actions on the store:
      `),t("button",{onClick:T},"Increment Counter")]),e(),t("p",null,[e("This is a ad-hoc reactive property "),v(t("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=s=>r.count=s)},null,512),[[f,r.count]])]),e(),D,e(),I,e(),N,e(),t("pre",null,h(l.value),1),e(),U,e(),t("pre",null,h(d.value),1)]))}});export{M as default};
