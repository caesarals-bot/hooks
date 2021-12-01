
import { todoReducer } from './todoReducer';
import { useReducer } from 'react';


import './styles.css';
import { useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



const init = () => {
    
    return  JSON.parse( localStorage.getItem('todos')) || [];
    // return[{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     donde: false
    // }]

}


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = ( todoId ) => {
        const id = todoId 

        const action = {
            type: 'delete',
            payload: id
        }
        dispatch( action )
    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type:'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        })
        
        
    }

   
    return (
        <div className="">
            <h1>Todo App ( {todos.length} )</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    {/* TodoList, todos, handleDelete, handleToggle  */}
                    <TodoList
                      todos = {todos}
                      handleToggle={handleToggle}
                      handleDelete={handleDelete}
                       />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
        
    )
}
