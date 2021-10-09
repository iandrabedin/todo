import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDelete,
  MdModeEdit,
} from "react-icons/md";
import { ITodoItem } from "../../types/todo";
import Button from "../Button";

interface TodoListProps {
  item: ITodoItem;
  id: number;
  checkTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  toggleEditing: (id: number) => void;
  handleEditing: (itemId: number, text: string) => void;
}

export const TodoList = ({
  item,
  id,
  checkTodo,
  removeTodo,
  toggleEditing,
  handleEditing,
}: TodoListProps) => {
  const handleOnSubmitEditing = (e) => {
    e.preventDefault();
    handleEditing(id, e.target[0].value);
    toggleEditing(id);
  };

  return (
    <div key={id} style={{ display: "flex" }}>
      <Button onClick={() => checkTodo(id)}>
        {item.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Button>
      {item.isEditing ? (
        <form
          onSubmit={(e) => {
            handleOnSubmitEditing(e);
          }}
        >
          <input
            id="todoTextEdit"
            name="todoTextEdit"
            type="text"
            maxLength={40}
            value={item.text}
            onChange={(e) => handleEditing(id, e.target.value)}
            onBlur={() => toggleEditing(id)}
            required
          />
        </form>
      ) : (
        <p>{item.text}</p>
      )}
      <Button onClick={() => removeTodo(id)}>
        <MdDelete />
      </Button>
      <Button onClick={() => toggleEditing(id)}>
        <MdModeEdit />
      </Button>
    </div>
  );
};
export default TodoList;
