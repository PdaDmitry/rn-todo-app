// import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { AddTodo } from "./src/components/AddTodo";
import { useState } from "react";
import { Todo } from "./src/components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <View style={styles.container}>
      <Navbar title="Todo App!" />
      <AddTodo addTodo={addTodo} />
      <View style={{ paddingHorizontal: 5 }}>
        {todos.map((todo, index) => (
          <Todo todo={todo.title} index={index + 1} key={todo.id} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 5,
  },
});
