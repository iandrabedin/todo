import React, { Fragment, useState } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";

interface ITodoItem {
  text: string;
  isChecked: boolean;
}

const Home = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  const addTodo = (itemText: string) => {
    setTodoList([...todoList, { text: itemText, isChecked: false }]);
  };

  const removeTodo = (itemId: number) => {
    todoList.splice(itemId, 1);
    setTodoList(todoList);
  };

  const checkTodo = (itemId: number) => {
    const checkedList = todoList.map((item, index) => {
      if (index === itemId) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setTodoList(checkedList);
  };

  const handleOnSubmit = () => {
    // send to DB
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <form onSubmit={() => handleOnSubmit}>
          <input
            id="todo"
            type="text"
            maxLength={40}
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            required
          />
        </form>
        <button onClick={() => addTodo(todoText)}>Add item</button>
      </div>
      <div>
        {todoList.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <button onClick={() => checkTodo(index)}>
              {item.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </button>
            <p>{item.text}</p>
            <button onClick={() => removeTodo(index)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
