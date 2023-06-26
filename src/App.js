import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './store';

const App = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const id = Date.now();
      dispatch(addTodo({ id, text }));
      setText('');
    }
  };

  return (
    <div>
      <h1>TODO List</h1>
      <div className='inputField'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" className='input'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button className='btn' type="submit">Add Todo</button>
      </form>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button  className = "btn" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

