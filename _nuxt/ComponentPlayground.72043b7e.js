import{b as m,u as c,J as a,a as i,af as u,r as l,a7 as n,x as d}from"./entry.283b6cd8.js";import{u as f}from"./asyncData.9c672b05.js";import _ from"./Ellipsis.24cc51ab.js";import y from"./ComponentPlaygroundData.b54fc318.js";import"./TabsHeader.d4091f15.js";import"./ComponentPlaygroundProps.d9230913.js";import"./ProseH4.cd1bac35.js";import"./ProseCodeInline.1754c6a5.js";import"./Badge.41eebb24.js";import"./ContentSlot.06fd524c.js";import"./ProseP.e613db45.js";import"./index.a29203b1.js";import"./ComponentPlaygroundSlots.vue.79e4fa60.js";import"./ComponentPlaygroundTokens.vue.9cea2afc.js";async function g(o){m();const t=c(o);{const{data:e}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return a(()=>e.value)}}const v=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=a(()=>u(o.component)),e=l({...o.props}),r=await g(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,p])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=p}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(_,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(v,[["__scopeId","data-v-9ca9b996"]]);export{V as default};
