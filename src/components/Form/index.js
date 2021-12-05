import React, { useEffect } from "react";
import "./form.css";
import BtnActions from "../BtnActions";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import { v4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: v4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        id="todo"
        name="todo"
        placeholder="Add a todo..."
        value={input || ""}
        required
        onChange={onInputChange}
      />
      <BtnActions
        endIcon={editTodo ? <DoneIcon /> : <AddIcon />}
        variant="contained"
        type="submit"
        title="Add"
        color="primary"
      >
        {editTodo ? "Ok" : "Add"}
      </BtnActions>
    </form>
  );
};

export default Form;
