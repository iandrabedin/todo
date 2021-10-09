import React, { useState } from "react";
import TodoList from "../../components/TodoList";
import { ITodoItem } from "../../types/todo";
import Button from "../../components/Button";

const Home = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  const addTodo = (itemText: string) => {
    setTodoList([
      ...todoList,
      { text: itemText, isChecked: false, isEditing: false },
    ]);
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

  const removeTodo = (itemId: number) => {
    todoList.splice(itemId, 1);
    setTodoList([...todoList]);
  };

  const toggleEditing = (itemId: number) => {
    const editedList = todoList.map((item, index) => {
      if (index === itemId) {
        item.isEditing = !item.isEditing;
      }
      return item;
    });
    setTodoList(editedList);
  };

  const handleEditing = (itemId: number, text: string) => {
    const editedList = todoList.map((item, index) => {
      if (index === itemId) {
        item.text = text;
      }
      return item;
    });
    setTodoList(editedList);
  };

  const handleOnSubmitNewTodo = (e) => {
    e.preventDefault();
    addTodo(e.target.elements.todoText.value);
    setTodoText("");
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <form onSubmit={(e) => handleOnSubmitNewTodo(e)}>
          <input
            id="todoText"
            type="text"
            maxLength={40}
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            required
          />
        </form>
        <Button onClick={() => addTodo(todoText)} variant="primary">
          Add item
        </Button>
      </div>
      <div>
        {todoList.map((item, index) => (
          <TodoList
            id={index}
            key={index}
            item={item}
            checkTodo={checkTodo}
            removeTodo={removeTodo}
            toggleEditing={toggleEditing}
            handleEditing={handleEditing}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
