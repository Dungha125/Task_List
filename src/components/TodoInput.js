import React, { useState } from 'react'

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const enterpress = (e)=>
    {
      if(e.keyCode===13)
      {
        props.addList(inputText)
        setInputText("")
      }
    }
  return (
    <div className='inputarea'>
        <input type='text' 
        placeholder='Nhập tại đây'
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }} 
        onKeyDown={enterpress}/>
        <button className='btninput' onClick={()=>
        {
            props.addList(inputText)
            setInputText("")
        }}>+</button>
       
    </div>
  )
}

export default TodoInput