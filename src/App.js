import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import Alert from './components/Alert';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessesge, setAlertMessesge] = useState('');
  useEffect(() => {
    // Lưu dữ liệu vào localStorage mỗi khi có thay đổi trong listTodo
    localStorage.setItem('listTodo', JSON.stringify(listTodo));
  }, [listTodo]); // Chạy mỗi khi listTodo thay đổi

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
      setAlertType('success');
      setAlertMessesge("Đã thêm");
      setShowAlert(true);
      // Tự động ẩn thông báo sau 3 giây (3000ms)
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }

  // xoa task
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
    setAlertType('error');
    setAlertMessesge("Đã xóa");
    setShowAlert(true);
    // Tự động ẩn thông báo sau 3 giây (3000ms)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  // edit task
  const editItem = (index, editedText) => {
    let newListTodo = [...listTodo];
    newListTodo[index] = editedText;
    setListTodo([...newListTodo]);
    setAlertType('success');
    setAlertMessesge("Đã sửa");
    setShowAlert(true);
    // Tự động ẩn thông báo sau 3 giây (3000ms)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <div className='main'>
      <div className='center'>
        <h1>Task LIST</h1>
        <TodoInput addList={addList} />
        <div className='List'>
          {listTodo.map((listItem, i) => {
            return (
              <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} editItem={editItem} />
            )
          })}
        </div>
        {showAlert && (
          <Alert type={alertType} message={alertMessesge} onClose={() => setShowAlert(false)} />
        )}
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

export default App;