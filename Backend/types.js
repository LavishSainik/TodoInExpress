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
    title:zod.string(),
    desc:zod.string()
})

const completeTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo:createTodo,
    completeTodo:completeTodo
}

