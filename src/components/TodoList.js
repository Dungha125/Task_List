import React, { useState } from 'react';

function TodoList(props) {
  const [editing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(props.item);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    props.editItem(props.index, editedItem);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedItem(props.item);
    setEditing(false);
  };

  const handleChange = (e) => {
    setEditedItem(e.target.value);
  };

  const renderItemContent = () => {
    if (editing) {
      return (
        <div className='listItemedit'>
          <input
            type="text"
            value={editedItem}
            onChange={handleChange}
            className='inputedit'
          />
          <button className='btnsave' onClick={handleSave}>
          <i class="fa-solid fa-circle-check"></i>
          </button>
          <button className='btncancel' onClick={handleCancel}>
          <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
      );
    } else {
      return (
        <div className='listItem'>
          {props.item}
          <span className='icon'>
            <span className='editicon'>
              <i className="fa-regular fa-pen-to-square" onClick={handleEdit}></i>
            </span>
            <span className='deleteicon'>
              <i className="fa-solid fa-trash-can" onClick={() => props.deleteItem(props.index)}></i>
            </span>
          </span>
        </div>
      );
    }
  };

  return (
    <li className='listItem'>
      {renderItemContent()}
    </li>
  );
}

export default TodoList;