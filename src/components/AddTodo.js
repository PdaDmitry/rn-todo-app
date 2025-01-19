import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handlePress = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
    } else {
      Alert.alert("Enter a task name!");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChange={(e) => setValue(e.nativeEvent.text)}
        value={value}
        placeholder="Enter a task name..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button style={styles.btn} title="Add Task" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "75%",
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderColor: "#3949ab",
    padding: 5,
    fontSize: 20,
  },
  btn: {},
});
