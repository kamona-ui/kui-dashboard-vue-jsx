import{d as t,E as d,c as s,a,e as i}from"./index-c_NQVIbU.js";import{L as l,I as n,a as u}from"./Input-cPeBAvHM.js";import{B as c}from"./Button-3E1D0FCt.js";const w=t({setup(){const e=d({password:"",processing:!1}),o=()=>{};return()=>s("form",{onSubmit:i(o,["prevent"])},[s("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},[a("This is a secure area of the application. Please confirm your password before continuing.")]),s("div",{class:"grid gap-4"},[s("div",{class:"space-y-2"},[s(l,{for:"password",value:"Password"},null),s(n,{icon:"tabler--lock"},{default:()=>[s(u,{withIcon:!0,id:"password",type:"password",class:"block w-full",placeholder:"Password",modelValue:e.password,"onUpdate:modelValue":r=>e.password=r,required:!0,autocomplete:"current-password",autofocus:!0},null)]})]),s("div",null,[s(c,{type:"submit",class:"w-full justify-center",disabled:e.processing},{default:()=>[a("Confirm")]})])])])}});export{w as default};
