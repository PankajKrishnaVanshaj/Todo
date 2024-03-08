// src/components/TodoList.js
import React from "react";
import { ScrollView } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <ScrollView>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;
