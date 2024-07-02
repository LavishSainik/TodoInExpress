const express = require('express')
const app = express()

app.use(express.json())
app.get("/getTodo",(req,res)=>{
    res.json
})

// body
// {title:string,
//  desc:string
// }

app.post("/addTodo",(req,res)=>{

})

app.put("/completed",(req,res)=>{

})


app.listen(3000,()=>{
    console.log("hey...listening on port 3000");
});