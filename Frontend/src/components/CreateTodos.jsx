import { useState } from "react";
export function CreateTodos(){
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    return <div>
        <input onChange={(e)=>{setTitle(e.target.value)}}  style={{padding:10,margin:10}} type="text" placeholder="title" /> 
        <input onChange={(e)=>{setDesc(e.target.value)}} style={{padding:10,margin:10}} type="text" placeholder="description" /> 
        <button 
          onClick={()=>{
            fetch("http://localhost:3000/addTodo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    desc:desc
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("todo added");
            })
          }}
        style={{padding:3,margin:3}}>Add</button>
    </div>
}