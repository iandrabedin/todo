import React, { useState } from "react";
import TodoList from "../../components/TodoList";
import { ITodoItem } from "../../types/todo";

const Home = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  const addTodo = (itemText: string) => {
    setTodoList([...todoList, { text: itemText, isChecked: false }]);
  };

  const removeTodo = (itemId: number) => {
    const removedList = todoList.splice(itemId, 1);
    setTodoList(removedList);
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
          <TodoList
            id={index}
            key={index}
            item={item}
            checkTodo={checkTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
