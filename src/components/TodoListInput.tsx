import React, { useCallback } from "react";
import { TodolistType } from "../types/todoList";
import uuid from "react-uuid";
import { StyleInputbox } from "../styled/styledTodoList";
import { atom, useRecoilState } from "recoil";

interface TodolistInputProps {
  addTodoList: (todo: TodolistType) => void;
}

export const todoListState = atom<TodolistType[]>({
  key: "todoListState",
  default: [],
});

const TodoListInput = ({ addTodoList }: TodolistInputProps) => {
  const [inputText, setInputText] =
    useRecoilState<TodolistType[]>(todoListState);

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
    <StyleInputbox>
      <form onSubmit={handleSubmitForm}>
        <input value={inputText} onChange={onChangeInput}></input>
        <button>추가</button>
      </form>
    </StyleInputbox>
  );
};

export default TodoListInput;
