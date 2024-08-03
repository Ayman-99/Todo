import {useState} from "react";
import Todoitem from "./Todoitem.jsx";
import SubmitForm from "./SubmitForm.jsx";

export default function Todo(){
    const [todo, setTodo] = useState({name: "", done: false});
    const [todos, setTodos] = useState([]);
    const completed = todos.filter((todo) => todo.done);
    const uncompleted = todos.filter((todo) => !todo.done);
    const sorted = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done: false});
    }
    return (<div>
        <SubmitForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo}/>
        <ul>
            {sorted.map((todo, index) =>
                <Todoitem key={index} todo={todo} todos={todos} setTodos={setTodos}/>
            )}
        </ul>
        <h1><span>Completed </span> {completed.length}</h1>
        <h2><span>Uncompleted </span> {uncompleted.length}</h2>
    </div>);
}

