import { useState } from 'react'
const Form = ({onAdd}) => {
    const[text,setText] = useState('')
    const[error,setError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            setError(true)
            setTimeout(() => {
                setError(false)

            },5000)
            return;
        }
        onAdd({text})
        setText('')
    }
        
    
    return(
        <form className='input'>
            <input className='input__text'type="text" placeholder='add new todo' value={text} onChange={(e) => setText(e.target.value)}/>
            {error && <div className="error-msg">input is empty</div>}
            <button className='input__button' onClick={onSubmit}>Add Todo</button>
            
            
        </form>
        
    )
}
export default Form;