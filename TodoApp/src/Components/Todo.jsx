import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";

export default function Todo() {
    // const [todo, setTodo] = useState("");

    const [todos, setTodos] = useState([]);

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
            <div>
                {/* {todos.map(todo => <h2 key={todo}>{todo}</h2>)} */}
                {todos.map((todo) => (
                    <TodoItem key={todo} todo={todo}/>
                ))}
            </div>
        </div>
    );
}