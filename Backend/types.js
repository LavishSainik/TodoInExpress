const zod = require('zod')

// for adding todo 
// {
//     title:string,
//     desc:string
// }

// for mark as done 
//   {
//     id:string
//   }

const createTodo = zod.object({
    title:string(),
    desc:string()
})

const completeTodo = zod.object({
    id:string()
})

module.exports = {
    createTodo:createTodo,
    completeTodo:completeTodo
}

