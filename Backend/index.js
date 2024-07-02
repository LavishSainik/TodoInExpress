const express = require('express')
const {createTodo,completeTodo}  = require("./types")
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
    const createPayload = req.body;
    const paresdBody = createTodo.safeParse(createPayload);
    if(!paresdBody.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
})

app.put("/completed",(req,res)=>{
    const payload = req.body
    const paresdPayload = completeTodo.safeParse(payload);
    if(!paresdPayload){
        res.status(411).json({
            msg:"Something went wrong"
        })
    }
    return;
})


app.listen(3000,()=>{
    console.log("hey...listening on port 3000");
});