const express = require('express')
const {createTodo,completeTodo}  = require("./types")
const { todo } = require('./db')
const cors = require("cors")
const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())
app.get("/getTodo",async(req,res)=>{
    const todoList =await todo.find({});
    res.send({
        todoList
    })
})

// body
// {title:string,
//  desc:string
// }

app.post("/addTodo",async(req,res)=>{
    const createPayload = req.body;
    const paresdBody = createTodo.safeParse(createPayload);
    if(!paresdBody.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        desc:createPayload.desc,
        completed:false
    })

    res.json({
        msg:"Todo created!!"
    })
})

app.put("/completed",async(req,res)=>{
    const payload = req.body
    const paresdPayload = completeTodo.safeParse(payload);
    if(!paresdPayload){
        res.status(411).json({
            msg:"Something went wrong"
        })
    }
     await todo.update({
        _id:payload.id
     },{
        completed:true
     })

     res.json({
        msg:"todo marked as completed!"
     })
})


app.listen(3000,()=>{
    console.log("hey...listening on port 3000");
});