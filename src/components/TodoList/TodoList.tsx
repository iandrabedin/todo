import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { ITodoItem } from "../../types/todo";

interface TodoListProps {
  item: ITodoItem;
  id: number;
  checkTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoList = ({
  item,
  id,
  checkTodo,
  removeTodo,
}: TodoListProps) => {
  return (
    <div key={id} style={{ display: "flex" }}>
      <button onClick={() => checkTodo(id)}>
        {item.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </button>
      <p>{item.text}</p>
      <button onClick={() => removeTodo(id)}>
        <MdDelete />
      </button>
    </div>
  );
};
export default TodoList;
