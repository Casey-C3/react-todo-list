import {FaTrash } from 'react-icons/fa'

const ToDo = ({todos,onDelete,onToggle,filteredList}) => {
    return (
        <>
        
            {filteredList.map(todo => 
                
                <div onDoubleClick={() => onToggle(todo.id)}    
                    className={`todo ${todo.complete ? 'todo-completed' : ''}`}
                    key ={todo.id} >
                        <h2>{todo.text} </h2>
                        <div>
                            <FaTrash className='trash' onClick={() => onDelete(todo.id)}/>
                        </div>
                </div>
                
    
            )}
        </>
    )
}

export default ToDo;
 