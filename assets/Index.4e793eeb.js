import{i as m,j as g,f as e,e as u,F as d,k as D,o as p,l as L,m as i,w as s,v as r,g as h}from"./vendor.3101e866.js";import{L as M}from"./Logo.a98c4a9c.js";import{r as _,G as I,F as T}from"./EyeIcon.82f54c03.js";import{h as w,s as f,i as F,t as $,a as o}from"./index.c7cf3a14.js";import{r as v,a as z,b as N}from"./XIcon.d24efc57.js";import{B as c}from"./Button.df7d7fac.js";function b(a,l){return m(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])}function E(a,l){return m(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}function G(a,l){return m(),g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}var O="/kui-dashboard-vue-jsx/assets/desktop-light.a5ff7721.svg",V="/kui-dashboard-vue-jsx/assets/desktop-dark.6bd7d146.svg",W="/kui-dashboard-vue-jsx/assets/mobile-dark.3d8c5820.svg",X="/kui-dashboard-vue-jsx/assets/mobile-dark-2.80293175.svg",U="/kui-dashboard-vue-jsx/assets/mobile-light.8b36dae2.svg",Y="/kui-dashboard-vue-jsx/assets/mobile-light-2.eb551da9.svg";var Z=u({props:{variant:{type:String,default:"primary",validator(a){return["primary","success","warning","error","info"].includes(a)}},title:{type:String,default:"Notification"},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}},emits:["close-toast"],setup(a,{emit:l}){const{variant:t,title:k,text:x,hideClose:q}=a,y=[{"bg-white":t=="primary","bg-green-100":t=="success","bg-yellow-100":t=="warning","bg-red-100":t=="error","bg-cyan-100":t=="info"}],j=[{"bg-purple-400":t=="primary","bg-green-400":t=="success","bg-yellow-400":t=="warning","bg-red-400":t=="error","bg-cyan-400":t=="info"}],C=[{"text-purple-500":t=="primary","text-green-500":t=="success","text-yellow-500":t=="warning","text-red-500":t=="error","text-cyan-500":t=="info"}];let n;switch(t){case"primary":n=b;break;case"success":n=b;break;case"warning":n=E;break;case"error":n=v;break;case"info":n=G;break}const S=()=>{l("close-toast")};return()=>e("div",{class:"p-6"},[e("div",{class:["relative p-4 rounded-md shadow-lg dark:bg-dark-eval-3",y]},[e("div",{class:"flex items-start gap-4"},[e("span",{class:["inline-flex p-1 rounded-full",j]},[e(n,{"aria-hidden":"true",class:"w-6 h-6 text-white"},null)]),e(c,{onClick:S,iconOnly:!0,size:"sm",variant:"secondary",class:"absolute right-2 top-2"},{default:({iconSizeClasses:B})=>e(d,null,[e(v,{"aria-hidden":"true",class:B},null)])}),e("div",{class:"space-y-2"},[e("div",{class:C},[k]),e("p",{class:"text-gray-600 dark:text-gray-400"},[x])])])])])}});const A=D(),H=({title:a="Warning",text:l})=>A.error({component:Z,props:{variant:"warning",title:a,text:l}}),K=u({setup(){return p(()=>{window.addEventListener("scroll",w)}),L(()=>{window.removeEventListener("scroll",w)}),()=>e("nav",{class:["fixed bottom-0 md:top-0 md:bottom-auto inset-x-0 duration-500 transition-all z-20",{"shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700 translate-y-full md:-translate-y-full":f.down,"shadow-t-lg md:shadow-lg bg-white dark:bg-gray-700":f.up}]},[e("div",{class:["relative max-w-7xl mx-auto flex items-center justify-between p-4 md:h-24",{"shadow-t-lg bg-white dark:bg-gray-700":F.value}]},[e("a",{href:"#",class:"inline-block rounded-md p-2 bg-white dark:bg-dark-eval-1"},[e("span",{class:"sr-only"},[i("Home")]),e(M,{class:"w-10 h-auto md:w-12"},null)]),e(c,{onClick:$,iconOnly:!0,type:"button",variant:"secondary"},{default:({iconSizeClasses:a})=>e(d,null,[s(e(z,{class:a},null),[[r,!o.value]]),s(e(N,{class:a},null),[[r,o.value]])])})])])}}),P=u({setup(){return()=>e("div",{class:"flex flex-col items-center justify-center gap-6 lg:flex-row"},[e(c,{to:{name:"Dashboard"},type:"button",class:"w-full justify-center items-center gap-2"},{default:({iconSizeClasses:a})=>e(d,null,[e(_,{"aria-hidden":"true",class:a},null),e("span",{class:"whitespace-nowrap"},[i("Live Preview")])])}),e(c,{href:"https://github.com/kamona-ui/kui-dashboard-vue-jsx",target:"_blank",class:"w-full justify-center items-center gap-2",variant:"black"},{default:({iconSizeClasses:a})=>e(d,null,[e(I,{"aria-hidden":"true",class:a},null),e("span",{class:"whitespace-nowrap"},[i("Github")])])}),e(c,{href:"https://www.figma.com/community/file/1019844542917981418",target:"_blank",class:"w-full justify-center items-center gap-2",variant:"info"},{default:({iconSizeClasses:a})=>e(d,null,[e(T,{"aria-hidden":"true",class:a},null),e("span",{class:"whitespace-nowrap"},[i("Figma File")])])})])}});var se=u({setup(){return p(()=>{h.from(["#mobile2Showcase","#mobile1Showcase"],{rotateZ:0,rotateY:0,rotateX:0,duration:2}),h.from(["#desktopShowcase"],{rotateZ:0,rotateY:0,rotateX:0,duration:2,onComplete:()=>{H({text:"This template is not finished yet and still in design phase. We are building it in public."})}})}),()=>e("div",{class:"min-h-screen text-gray-900 bg-gray-100 dark:bg-dark-bg"},[e(K,null,null),e("main",null,[e("h1",{class:"sr-only"},[i("K UI Dashboard Template")]),e("section",{class:"relative min-h-screen overflow-hidden bg-gradient-to-tr from-purple-500 via-blue-300 to-indigo-400 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-800"},[e("h2",{class:"sr-only"},[i("Showcase")]),e("div",{class:"absolute inset-x-[-10vw] top-0 bottom-20 md:bottom-0 md:top-24 rounded-[77vw/50vw] rounded-t-none md:rounded-b-none md:rounded-[77vw/50vw] bg-white dark:bg-dark-bg"},null),e("div",{class:"px-6 pb-24 md:pt-28 mx-auto max-w-7xl"},[e("div",{class:"grid gap-5 perspective-100vw md:grid-cols-4 md:grid-rows-1"},[e("div",{class:"hidden md:flex items-center justify-center transform-style-3d"},[e("div",{id:"mobile2Showcase",class:"w-full h-full flex items-center justify-center rotate-x-25 rotate-y-25 rotate-z--15"},[s(e("img",{src:Y,class:"h-auto w-[70%] drop-shadow-2xl"},null),[[r,!o.value]]),s(e("img",{src:X,class:"h-auto w-[70%] drop-shadow-2xl"},null),[[r,o.value]])])]),e("div",{class:"transform-style-3d flex flex-col gap-10 items-center justify-center md:pb-18 col-span-3 row-start-2 md:row-start-1 md:col-span-2 md:col-start-2"},[e("div",{class:"flex items-center mt-10 md:mt-4 justify-center transform-style-3d"},[s(e("img",{id:"desktopShowcase",class:"rotate-x-15 w-[75%] md:w-full",src:O,alt:"Desktop showcase"},null),[[r,!o.value]]),s(e("img",{id:"desktopShowcase",class:"rotate-x-15 w-[75%] md:w-full",src:V,alt:"Desktop showcase"},null),[[r,o.value]])]),e(P,null,null)]),e("div",{class:"hidden md:flex items-center justify-center transform-style-3d"},[e("div",{id:"mobile1Showcase",class:"w-full h-full flex items-center justify-center rotate-x-25 rotate-y--25 rotate-z-15"},[s(e("img",{src:U,class:"h-auto w-[70%] drop-shadow-2xl"},null),[[r,!o.value]]),s(e("img",{src:W,class:"h-auto w-[70%] drop-shadow-2xl"},null),[[r,o.value]])])])])])])])])}});export{se as default};