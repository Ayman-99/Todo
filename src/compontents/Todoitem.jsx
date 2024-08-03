
export default function Todoitem({todo, todos, setTodos}) {

    function handleDelete(item){
        const newTodos = todos.filter((todo) => todo.name !== item);
        setTodos(newTodos);
    }
    function handleDone(name){
        const newTodos = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo);
     //   console.log(todos);
        setTodos(newTodos);
    }
    const check = todo.done ? "strike" : "";
    return (
        <>
            <li className={check} onClick={() => handleDone(todo.name)}>{todo.name}</li>
            <span>
                <button onClick={() => handleDelete(todo.name)}>Delete</button>
            </span>
        </>
    )
}