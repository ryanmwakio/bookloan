import{q as i,n as t}from"./index-kPpeyqsD.js";const p=i("book",{state:()=>({books:[],book:{},isloading:!1}),getters:{getBooks:o=>o.books,loading:o=>o.isloading},actions:{async addBook(o){const e=new FormData;e.append("name",o.name),e.append("publisher",o.publisher),e.append("isbn",o.isbn),e.append("category",o.category),e.append("sub_category",o.sub_category),e.append("description",o.description),e.append("pages",o.pages),e.append("image",o.image);try{this.isloading=!0;const n={Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"multipart/form-data"},a=await t.post("/books",e,{headers:n});if(a.data.success)return this.router.push("/admin/books");console.log(a.data.message)}catch(s){console.log(s)}finally{this.isloading=!1}},async getAllBooks(){try{this.isloading=!0;const o=await t.get("/books");this.books=o.data.data}catch(o){console.log(o)}finally{this.isloading=!1}}}});export{p as u};