import style from './todoitem.module.css';

export default function TodoItem({ todo, todos, setTodos }) {
    function handleDelete(todo) {
        console.log("delete button clicked " + todo);
        let todoarr = todos.filter((item) => item.name !== todo.name);
        console.log(todoarr);
        setTodos(todoarr);
        //setTodos(todos.filter((item) => item !== todo));
    }

    function handleClick(name) {
        let newArr = todos.map(todo =>
            todo.name === name ? { ...todo, done: !todo.done } : todo
        );
        console.log(newArr);
        setTodos(newArr);
    }

    return (
        <div className={style.item}>
            <div className={style.itemName}>
                <span
                    className={todo.done?style.completed:""} 
                    key={todo.name}
                    onClick={() => handleClick(todo.name)}
                >
                    {todo.name}
                </span>
                <span>
                    <button className={style.deleteButton} onClick={() => handleDelete(todo)}>X</button>
                </span>
            </div>
            <hr className={style.line} />
        </div>
    );
}