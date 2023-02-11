import { TodolistType } from "../types/todoList";
import cn from "classnames";
import styled from "styled-components";

interface TodolistProps extends TodolistType {
  deleteTodoList: (todolistID: string) => void;
  checkTodoList: (todolistID: string) => void;
}

const StyleTodoListItem = styled.div`
  display: flex;
  align-items: center;
  & h2 {
    min-width: 50%;
  }
`;

const StyleCheckBox = styled.button`
  width: 50px;
  height: 50px;
`;

const StyleDeleteBox = styled.button`
  width: 50px;
  height: 50px;
`;

const TodoListItem = ({
  id,
  index,
  todo,
  isCheck,
  deleteTodoList,
  checkTodoList,
}: TodolistProps) => {
  return (
    <StyleTodoListItem>
      <h1>{index}</h1>
      <h2>{todo}</h2>
      <StyleCheckBox
        className={cn("checkbox", { isCheck })}
        onClick={() => {
          checkTodoList(id);
        }}
      >
        체크
      </StyleCheckBox>
      <StyleDeleteBox
        onClick={() => {
          deleteTodoList(id);
        }}
      >
        삭제
      </StyleDeleteBox>
    </StyleTodoListItem>
  );
};

export default TodoListItem;
