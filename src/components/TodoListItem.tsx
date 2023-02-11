import { TodolistType } from "../types/todoList";
import cn from "classnames";
import {
  StyleCheckBox,
  StyleDeleteBox,
  StyleTodoListItem,
} from "../styled/styledTodoList";

interface TodolistProps extends TodolistType {
  deleteTodoList: (todolistID: string) => void;
  checkTodoList: (todolistID: string) => void;
}

const TodoListItem = ({
  id,
  index,
  todo,
  isCheck,
  deleteTodoList,
  checkTodoList,
}: TodolistProps) => {
  return (
    <StyleTodoListItem className={cn("checkbox", { isCheck })}>
      <h1>{index}</h1>
      <p>{todo}</p>
      <StyleCheckBox
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
