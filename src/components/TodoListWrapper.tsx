import { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import useTodoList from "../hooks/useTodoList";
import TodoListInput from "./TodoListInput";
import { StyleTodoListWrapper } from "../styled/styledTodoList";
import Header from "./Header";

const TodoListWrapper = () => {
  const { todoList, setTodoList, addTodoList, deleteTodoList, checkTodoList } =
    useTodoList();

  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      const storageTodoList = JSON.parse(localStorage.getItem("todoList")!);
      setTodoList(storageTodoList);
    }
  }, [setTodoList]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <StyleTodoListWrapper>
      <Header />
      <TodoListInput addTodoList={addTodoList} />
      {todoList.map((todo, index) => (
        <TodoListItem
          id={todo.id}
          key={todo.id}
          index={index + 1}
          todo={todo.todo}
          isCheck={todo.isCheck}
          deleteTodoList={deleteTodoList}
          checkTodoList={checkTodoList}
        />
      ))}
    </StyleTodoListWrapper>
  );
};

export default TodoListWrapper;
