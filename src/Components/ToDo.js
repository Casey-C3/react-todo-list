import {FaTrash } from 'react-icons/fa'

const ToDo = ({todos,onDelete,onToggle}) => {

   
   
    return (
        <>
        
            {todos.map(todo => 
                
                <div onDoubleClick={() => onToggle(todo.id)}
                    
                    className={`todo ${todo.complete ? 'todo-completed' : ''}`}
                    key ={todo.id} >
                        <p>{todo.text} </p>
                        <div>
                            <FaTrash className='trash' onClick={() => onDelete(todo.id)}/>
                        </div>
                    
                </div>
                
    
            )}
        </>
    )
}

export default ToDo;
 