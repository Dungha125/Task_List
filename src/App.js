import React, { useState, useEffect } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
function App() {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage khi trang được tải lại
    const storedListTodo = localStorage.getItem('listTodo');
    if (storedListTodo) {
      setListTodo(JSON.parse(storedListTodo));
    }
  }, []); // Chạy chỉ một lần khi trang được tải

  useEffect(() => {
    // Lưu dữ liệu vào localStorage mỗi khi có thay đổi trong listTodo
    localStorage.setItem('listTodo', JSON.stringify(listTodo));
  }, [listTodo]); // Chạy mỗi khi listTodo thay đổi


  const addList = (inputText) =>{
    if(inputText !== '')
    setListTodo([...listTodo,inputText]);
  }
  
  //xoa task
  const deleteListItem = (key) =>
  {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  //edit task
  const editItem = (index, editedText) => {
    let newListTodo = [...listTodo];
    newListTodo[index] = editedText;
    setListTodo([...newListTodo]);
  }

  return (
    <div className='main'>
      <div className='center'>
        <h1>Task LIST</h1>
        <TodoInput addList={addList}/>
        <div className='List'>
          {listTodo.map((listItem,i)=>{
            return (
              <TodoList key={i} index={i}  item={listItem} deleteItem={deleteListItem} editItem={editItem}/>
            )
          })}
        </div>
      </div>
      <ul className="bg-bubbles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
      <div className='name'>@Create by Dungha</div>
    </div>
  )
}

export default App