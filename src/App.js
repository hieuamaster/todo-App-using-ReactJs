import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import TodoItems from './TodoItems';
const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md p-4 shadow-xl`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-yellow-300 text-slate-100 hover:text-slate-800`,
    count: `text-center p-2`
};
function App() {
    const [todos, setTodos] = useState(['Learn React', 'Leet code']);
    return (
        <div className={style.bg}>
            <div className={style.container}>
                <h3 className={style.heading}>Todo App</h3>
                <form className={style.form}>
                    <input className={style.input} type="text" placeholder="Add todo" />
                    <button className={style.button}>
                        <AiOutlinePlus size={30} />
                    </button>
                    </form>
                    <ul>
                        {todos.map((todo, index) => (
                            
                            <TodoItems key={index} todo= {todo}/>
                        ))}
                    </ul>
                    <p className={style.count}>You have 2 todos</p>
                
            </div>
        </div>
    );
}

export default App;
