import { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import useTodoList from "../hooks/useTodoList";
import TodoListInput from "./TodoListInput";

const TodoListWrapper = () => {
  const { todoList, setTodoList, addTodoList, deleteTodoList, checkTodoList } =
    useTodoList();

  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      const storageTodoList = JSON.parse(localStorage.getItem("todoList")!);
      setTodoList(storageTodoList);
      console.log(localStorage.getItem("todoList")!);
    }
  }, [setTodoList]);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    console.log(localStorage.getItem("todoList")!);
  }, [todoList]);

  return (
    <div>
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
    </div>
  );
};

export default TodoListWrapper;
