import v from"./ArticlesListItem.84121cd5.js";import k from"./ProseA.77485865.js";import w from"./ProseCodeInline.1754c6a5.js";import{u as A}from"./asyncData.9c672b05.js";import{a as I,I as g,J as L,u as n,o as a,i as r,k as o,m as i,F as S,K as C,L as e,w as u,s as b,v as B,A as N,M as V,c as F,x as P}from"./entry.283b6cd8.js";import"./date.824a539b.js";const T=t=>(b("data-v-b83c54e7"),t=t(),B(),t),q={key:0,class:"articles-list"},D={class:"featured"},E={class:"layout"},J={key:1,class:"tour"},K=T(()=>o("p",null,"Seems like there are no articles yet.",-1)),M=I({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const d=t,{data:m}=([s,_]=g(async()=>A("articles",async()=>await N(V(d.path)).sort({date:-1}).find())),s=await s,_(),s),c=L(()=>m.value||[]);return(Y,j)=>{var p;const l=v,f=k,h=w;return(p=n(c))!=null&&p.length?(a(),r("div",q,[o("div",D,[i(l,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",E,[(a(!0),r(S,null,C(n(c).slice(1),(y,x)=>(a(),F(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",J,[K,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const U=P(M,[["__scopeId","data-v-b83c54e7"]]);export{U as default};
