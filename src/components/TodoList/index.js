import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import "./todoList.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleValidate = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.title}
                className={todo.completed ? "completed" : null}
                onChange={(e) => e.preventDefault()}
              />
              <ModeEditOutlineIcon
                className="editIcon"
                onClick={() => handleEdit(todo)}
              />
              <DoneIcon
                className="validIcon"
                onClick={() => handleValidate(todo)}
              />
              <DeleteIcon
                className="deleteIcon"
                onClick={() => handleDelete(todo)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
