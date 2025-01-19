import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Todo = ({ todo, index, onRemove }) => {
  const handleLongPress = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log("Pressed: ", todo.id)}
      onLongPress={handleLongPress}
      // onLongPress={onRemove.bind(null, todo.id)} // можно и так!
    >
      <View style={styles.todo}>
        <Text style={styles.text}>
          {index}. {todo.title}
        </Text>
        {/* <Button title="Delete" color="#3949ab" /> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
});
