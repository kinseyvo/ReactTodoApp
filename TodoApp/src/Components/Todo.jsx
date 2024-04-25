import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
    // const [todo, setTodo] = useState("");

    const [todos, setTodos] = useState([]);

    let totalTodos = todos.length;
    let completedTodos = todos.filter((todo) => todo.done).length;

    // function handleClick(e) {
    //     e.preventDefault();
    //     setTodos([...todos, todo]);
    //     // console.log(todos);
    // }

    return (
        <div>
            {/* <form onSubmit={(e) => handleClick(e)}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button>Add</button>
            </form> */}
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos = {setTodos}/>
            <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
        </div>
    );
}