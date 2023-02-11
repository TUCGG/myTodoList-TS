import React, { useCallback, useState } from "react";
import { TodolistType } from "../types/todoList";
import uuid from "react-uuid";

interface TodolistInputProps {
  addTodoList: (todo: TodolistType) => void;
}

const TodoListInput = ({ addTodoList }: TodolistInputProps) => {
  const [inputText, setInputText] = useState("");

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    []
  );

  const handleSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const todo = {
        id: uuid(),
        todo: inputText,
        isCheck: false,
      };
      addTodoList(todo);
      setInputText("");
    },
    [addTodoList, inputText]
  );

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input value={inputText} onChange={onChangeInput}></input>
        <button></button>
      </form>
    </div>
  );
};

export default TodoListInput;
