import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./atoms";

import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  console.log(todoList);

  return (
    <div>
      <TodoListStats />
      <TodoItemCreator />
      <TodoListFilters />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
