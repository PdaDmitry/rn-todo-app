import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
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

    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Navbar title="Todo App!" />
      <AddTodo addTodo={addTodo} />
      {/*StatusBar - это строка состояния телефона(часы, заряд батареи и т.д.) */}
      <StatusBar style="light" />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item, index }) => (
          <Todo todo={item} index={index + 1} onRemove={removeTodo} />
        )}
        contentContainerStyle={styles.scrollContainer}
      />

      {/* <ScrollView contentContainerStyle={styles.scrollContainer}>
        {todos.map((todo, index) => (
          <Todo todo={todo} index={index + 1} key={todo.id} />
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Добавьте это, чтобы ScrollView занимал весь доступный экран
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10, // Добавьте паддинг для нижней части экрана
  },
});
