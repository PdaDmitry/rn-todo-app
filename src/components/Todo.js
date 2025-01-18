import { StyleSheet, Text, View } from "react-native";

export const Todo = ({ todo, index }) => {
  return (
    <View style={styles.todo}>
      <Text>
        {index}. {todo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {},
});
