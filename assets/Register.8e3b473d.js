import{i,j as u,f as e,e as c,b as m,q as p,m as r,F as f,p as w}from"./vendor.3101e866.js";import{L as s,I as o,a as t}from"./Input.b6585547.js";import{C as h}from"./Checkbox.371bc5b2.js";import{B as v}from"./Button.df7d7fac.js";import{r as d}from"./LockClosedIcon.cc4fbb8a.js";import{r as b}from"./MailIcon.d402bb11.js";import{r as g}from"./UserAddIcon.d3f3e5ee.js";function k(a,n){return i(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])}var B=c({setup(){const a=m({name:"",email:"",password:"",password_confirmation:"",terms:!1,processing:!1}),n=()=>{};return()=>e("form",{onSubmit:p(n,["prevent"])},[e("div",{class:"grid gap-6"},[e("div",{class:"space-y-2"},[e(s,{for:"name",value:"Name"},null),e(o,null,{default:()=>[e(t,{withIcon:!0,id:"name",type:"text",placeholder:"Name",class:"block w-full",modelValue:a.name,"onUpdate:modelValue":l=>a.name=l,required:!0,autofocus:!0,autocomplete:"name"},null)],icon:()=>e(k,{"aria-hidden":"true",class:"w-5 h-5"},null)})]),e("div",{class:"space-y-2"},[e(s,{for:"email",value:"Email"},null),e(o,null,{default:()=>[e(t,{withIcon:!0,id:"email",type:"email",class:"block w-full",placeholder:"Email",modelValue:a.email,"onUpdate:modelValue":l=>a.email=l,required:!0,autocomplete:"username"},null)],icon:()=>e(b,{"aria-hidden":"true",class:"w-5 h-5"},null)})]),e("div",{class:"space-y-2"},[e(s,{for:"password",value:"Password"},null),e(o,null,{default:()=>[e(t,{withIcon:!0,id:"password",type:"password",class:"block w-full",placeholder:"Password",modelValue:a.password,"onUpdate:modelValue":l=>a.password=l,required:!0,autocomplete:"new-password"},null)],icon:()=>e(d,{"aria-hidden":"true",class:"w-5 h-5"},null)})]),e("div",{class:"space-y-2"},[e(s,{for:"password_confirmation",value:"Confirm Password"},null),e(o,null,{default:()=>[e(t,{withIcon:!0,id:"password_confirmation",type:"password",class:"block w-full",placeholder:"Confirm Password",modelValue:a.password_confirmation,"onUpdate:modelValue":l=>a.password_confirmation=l,required:!0,autocomplete:"new-password"},null)],icon:()=>e(d,{"aria-hidden":"true",class:"w-5 h-5"},null)})]),e("div",null,[e(s,{for:"terms"},{default:()=>[e("div",{class:"flex items-center"},[e(h,{name:"terms",id:"terms",checked:a.terms,"onUpdate:checked":l=>a.terms=l},null),e("div",{class:"ml-2"},[r("I agree to the")," ",e("a",{target:"_blank",href:"#",class:"underline text-sm text-blue-600 hover:text-blue-900"},[r("Terms of Service")])," ",r("and")," ",e("a",{target:"_blank",href:"#",class:"underline text-sm text-blue-600 hover:text-blue-900"},[r("Privacy Policy")])])])]})]),e("div",null,[e(v,{type:"submit",class:"justify-center gap-2 w-full",disabled:a.processing},{default:({iconSizeClasses:l})=>e(f,null,[e(g,{"aria-hidden":"true",class:l},null),e("span",null,[r("Register")])])})]),e("p",{class:"text-sm text-gray-600 dark:text-gray-400"},[r("Already have an account?")," ",e(w,{to:{name:"Login"},class:"text-blue-500 hover:underline"},{default:()=>[r("Login")]})])])])}});export{B as default};