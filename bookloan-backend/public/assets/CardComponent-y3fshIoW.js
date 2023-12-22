import{a as d,c as u,b as t,p as B,u as S,r as l,o as $,i as _,t as i,f as v,h as b,v as w,m,e as k,n as x}from"./index-kPpeyqsD.js";import{_ as D}from"./ButtonComponent-_B2EXK9V.js";const C={class:"w-full bg-gray-300 h-2 relative"},V={__name:"RangeComponent",props:{percentage:{type:Number}},setup(f){return(n,e)=>(d(),u("div",C,[t("div",{class:"absolute left-0 top-0 bottom-0 bg-primary-orange",style:B({width:f.percentage+"%"})},null,4)]))}},I={class:"py-3 px-2"},L={class:"grid grid-cols-2 hover:shadow-lg transition-all duration-300"},z={class:"bg-white p-4"},G={class:"flex flex-col justify-between bg-white p-4"},P={class:"text-muted text-xs"},T=t("span",{class:"italic text-xs"},"By",-1),U={class:"my-2 font-semibold text-sm w-full"},M={class:"text-xs text-gray-400"},R={class:"text-primary-orange font-semibold"},j={key:0,class:"flex flex-col my-4"},q={key:0,class:"bg-white px-4 py-2 border my-4"},F=t("label",{for:"",class:"text-xs"},"Extend Loan",-1),H={class:"text-xs mb-2"},J={class:"italic"},K={key:1,class:"relative"},O={class:"py-2 px-4 border my-2"},Q=t("span",{class:"text-xs"},"Select Due Date",-1),Y={__name:"CardComponent",props:["info"],setup(f){const n=S(),e=f,a=l("Get Book"),r=l(""),g=l("Extend"),E=async c=>{try{if(e.info.loan&&e.info.loan.status==="approved"&&n.user.id===e.info.loan.loaned_to.id&&confirm("Are you sure you want to return this book?")){const h=localStorage.getItem("token");if(!h)throw new Error("No token found");const y=await x.post("/bookloans/"+e.info.loan.id+"/return",{},{headers:{Authorization:`Bearer ${h}`}});y.data.success&&(a.value="Get Book",e.info.loan=null,r.value="",alert(y.data.message));return}if(e.info.loan&&e.info.loan.status!=="returned")throw alert("Already loaned"),new Error("Already loaned");if(!r.value)throw alert("Please set due date"),new Error("Please set due date");const o=localStorage.getItem("token");if(!o)throw new Error("No token found");a.value="Loading...";const s=await x.post("/bookloans/"+c+"/books",{due_date:r.value},{headers:{Authorization:`Bearer ${o}`}});s.data.success&&(alert(s.data.message),a.value="Pending")}catch(o){console.log(o),a.value="Get Book"}},A=l({}),p=l(0),N=async c=>{try{g.value="Loading...";const o=localStorage.getItem("token");if(!o)throw alert("Please login first"),new Error("No token found");const s=await x.post("/bookloans/"+e.info.loan.id+"/extend/"+c,{},{headers:{Authorization:`Bearer ${o}`}});s.data.success&&alert(s.data.message)}catch(o){console.log(o)}finally{g.value="Extend"}};return $(async()=>{A.value=await n.getUser()}),(c,o)=>(d(),u("div",I,[t("div",L,[t("div",z,[t("div",{style:B({backgroundImage:"url("+e.info.image+")"}),class:"w-full h-64 md:h-72 bg-center bg-cover bg-no-repeat"},null,4)]),t("div",G,[t("div",null,[t("span",P,[T,_(" "+i(e.info.publisher),1)]),t("h5",U,i(e.info.name),1),t("p",M,[_(" Added by: "),t("span",R,i(e.info.added_by.name),1)])]),t("div",null,[e.info.loan&&e.info.loan.status!=="returned"?(d(),u("div",j,[e.info.loan.loaned_to.id===v(n).user.id?(d(),u("div",q,[F,b(t("input",{type:"number",class:"w-full border border-gray-300 rounded py-2 px-4 text-xs focus:outline-none",placeholder:"Enter number of days","onUpdate:modelValue":o[0]||(o[0]=s=>p.value=s)},null,512),[[w,p.value]]),t("button",{class:"text-xs text-white bg-primary-orange py-1 px-6 my-2",onClick:o[1]||(o[1]=s=>N(p.value))}," Extend ")])):m("",!0),t("h4",H,[_(" Loan Days Remaining "),t("span",J,i(e.info.remaining_days)+"/"+i(e.info.total_days),1)]),k(V,{percentage:e.info.percentage_progress},null,8,["percentage"])])):m("",!0),!e.info.loan||e.info.loan.status==="returned"?(d(),u("div",K,[t("div",O,[Q,b(t("input",{type:"date",class:"w-full border border-gray-300 rounded p-2 text-xs focus:outline-none cursor-pointer","onUpdate:modelValue":o[2]||(o[2]=s=>r.value=s)},null,512),[[w,r.value]])])])):m("",!0),k(D,{text:e.info.loan?e.info.loan.status==="approved"&&v(n).user.id===e.info.loan.loaned_to.id?"return":e.info.loan.status==="returned"?"Get Book":e.info.loan.status:a.value,onClick:o[3]||(o[3]=s=>E(e.info.id)),showIcon:!0},null,8,["text"])])])])]))}};export{Y as _};
