import{a as u,c,e as t,q as B,u as A,k as D,r as i,o as C,i as x,t as d,f as v,h as b,v as k,p as g,b as w,m}from"./index-zlIGHKXK.js";import{_ as N}from"./ButtonComponent-Rb31Mvhp.js";const V={class:"w-full bg-gray-300 h-2 relative"},I={__name:"RangeComponent",props:{percentage:{type:Number}},setup(p){return(a,s)=>(u(),c("div",V,[t("div",{class:"absolute left-0 top-0 bottom-0 bg-primary-orange",style:B({width:p.percentage+"%"})},null,4)]))}},L={class:"py-3 px-2"},T={class:"grid grid-cols-2 hover:shadow-lg transition-all duration-300"},z={class:"bg-white p-4"},G={class:"flex flex-col justify-between bg-white p-4"},P={class:"text-muted text-xs"},U=t("span",{class:"italic text-xs"},"By",-1),M={class:"my-2 font-semibold text-sm w-full"},R={class:"text-xs text-gray-400"},j={class:"text-primary-orange font-semibold"},q={key:0,class:"flex flex-col my-4"},F={key:0,class:"bg-white px-4 py-2 border my-4"},H=t("label",{for:"",class:"text-xs"},"Extend Loan",-1),J={class:"text-xs mb-2"},K={class:"italic"},O={key:1,class:"relative"},Q={class:"py-2 px-4 border my-2"},W=t("span",{class:"text-xs"},"Select Due Date",-1),ee={__name:"CardComponent",props:["info"],setup(p){const a=A(),s=D.useToast(),e=p,r=i("Get Book"),l=i(""),y=i("Extend"),E=async f=>{try{if(e.info.loan&&e.info.loan.status==="approved"&&a.user.id===e.info.loan.loaned_to.id&&confirm("Are you sure you want to return this book?")){const h=localStorage.getItem("token");if(!h)throw new Error("No token found");(await m.post("/bookloans/"+e.info.loan.id+"/return",{},{headers:{Authorization:`Bearer ${h}`}})).data.success&&(r.value="Get Book",e.info.loan=null,l.value="",s.success("Book returned successfully"));return}if(e.info.loan&&e.info.loan.status!=="returned"){s.info("Already loaned");return}if(!l.value){s.info("Please set due date");return}const o=localStorage.getItem("token");if(!o){s.info("Please login first");return}if(r.value="Loading...",(await m.post("/bookloans/"+f+"/books",{due_date:l.value},{headers:{Authorization:`Bearer ${o}`}})).data.success){s.success("Book loaned successfully"),r.value="Pending";return}}catch(o){console.log(o),s.error("Something went wrong"),r.value="Get Book"}},S=i({}),_=i(0),$=async f=>{try{y.value="Loading...";const o=localStorage.getItem("token");if(!o){s.info("Please login first");return}const n=await m.post("/bookloans/"+e.info.loan.id+"/extend/"+f,{},{headers:{Authorization:`Bearer ${o}`}});n.data.success&&s.success(n.data.message)}catch(o){console.log(o)}finally{y.value="Extend"}};return C(async()=>{S.value=await a.getUser()}),(f,o)=>(u(),c("div",L,[t("div",T,[t("div",z,[t("div",{style:B({backgroundImage:"url("+e.info.image+")"}),class:"w-full h-64 md:h-72 bg-center bg-cover bg-no-repeat"},null,4)]),t("div",G,[t("div",null,[t("span",P,[U,x(" "+d(e.info.publisher),1)]),t("h5",M,d(e.info.name),1),t("p",R,[x(" Added by: "),t("span",j,d(e.info.added_by.name),1)])]),t("div",null,[e.info.loan&&e.info.loan.status!=="returned"?(u(),c("div",q,[e.info.loan.loaned_to.id===v(a).user.id?(u(),c("div",F,[H,b(t("input",{type:"number",class:"w-full border border-gray-300 rounded py-2 px-4 text-xs focus:outline-none",placeholder:"Enter number of days","onUpdate:modelValue":o[0]||(o[0]=n=>_.value=n)},null,512),[[k,_.value]]),t("button",{class:"text-xs text-white bg-primary-orange py-1 px-6 my-2",onClick:o[1]||(o[1]=n=>$(_.value))}," Extend ")])):g("",!0),t("h4",J,[x(" Loan Days Remaining "),t("span",K,d(e.info.remaining_days)+"/"+d(e.info.total_days),1)]),w(I,{percentage:e.info.percentage_progress},null,8,["percentage"])])):g("",!0),!e.info.loan||e.info.loan.status==="returned"?(u(),c("div",O,[t("div",Q,[W,b(t("input",{type:"date",class:"w-full border border-gray-300 rounded p-2 text-xs focus:outline-none cursor-pointer","onUpdate:modelValue":o[2]||(o[2]=n=>l.value=n)},null,512),[[k,l.value]])])])):g("",!0),w(N,{text:e.info.loan?e.info.loan.status==="approved"&&v(a).user.id===e.info.loan.loaned_to.id?"return":e.info.loan.status==="returned"?"Get Book":e.info.loan.status:r.value,onClick:o[3]||(o[3]=n=>E(e.info.id)),showIcon:!0},null,8,["text"])])])])]))}};export{ee as _};