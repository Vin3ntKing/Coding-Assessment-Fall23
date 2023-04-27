import React from "react";
import axios from "axios";

const TodoList = ({ todos, fetchTodos }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.text}
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
