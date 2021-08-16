import { useState } from 'react'




const Form = ({onAdd}) => {
    const[text,setText] = useState('')

    const onSubmit = () => {
        if(!text) {
            alert("Input is blank")
            return;
        }
        onAdd({text})
        setText('')
        

        
    }
        
    
    return(
        <div className='input'>
            <input className='input__text'type="text" placeholder='add todos' value={text} onChange={(e) => setText(e.target.value)}/>
            <button className='input__button' onClick={onSubmit}>Add Todo</button>
            
            
        </div>
    )
}
export default Form;