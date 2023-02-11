import { useCallback, useState } from "react";
import { TodolistType } from "../types/todoList";

const useTodoList = () => {
  const [todoList, setTodoList] = useState<TodolistType[]>([]);

  //투두리스트 추가
  const addTodoList = useCallback((todo: TodolistType) => {
    setTodoList((prev) => [...prev, todo]);
  }, []);

  //투두리스트 제거
  const deleteTodoList = useCallback(
    (todoListId: string) => {
      const copyTodoList = [...todoList];
      const deleteIndex = copyTodoList.findIndex((todo) => {
        return todo.id === todoListId;
      });
      if (deleteIndex === -1) {
        return;
      }
      copyTodoList.splice(deleteIndex, 1);
      setTodoList(copyTodoList);
    },
    [todoList]
  );

  //투두리스트 체크
  const checkTodoList = useCallback(
    (todoListId: string) => {
      const copyTodoList = [...todoList];
      const todoListIndex = copyTodoList.findIndex((todo) => {
        return todo.id === todoListId;
      });
      if (todoListIndex === -1) {
        return;
      }
      copyTodoList[todoListIndex].isCheck =
        !copyTodoList[todoListIndex].isCheck;
      setTodoList(copyTodoList);
    },
    [todoList]
  );

  return {
    todoList,
    setTodoList,
    addTodoList,
    deleteTodoList,
    checkTodoList,
  };
};

export default useTodoList;
