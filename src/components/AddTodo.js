import { Button, StyleSheet, TextInput, View } from "react-native";

export const AddTodo = ({ addTodo }) => {
  const handlePress = () => {
    addTodo("New task");
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
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
  },
  input: {
    width: "78%",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: "#3949ab",
    padding: 5,
  },
  btn: {},
});
