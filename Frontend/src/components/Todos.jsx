export function Todos({listOfTodos}){
    return <div>
        {listOfTodos.map(function(todo){
            return <div>
                <h2>{todo.title}</h2>
                <h3>{todo.desc}</h3>
                <button>{todo.completed==true?"completed":"Mark as Done"}</button>
            </div>
        })}
    </div>
}