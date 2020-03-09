import React from 'react';
import { View, Button, TextInput } from 'react-native';

const TodoForm = ({
  todo,
  onAdd,
  onChange
}) => (
  <View>
    <TextInput
      onChangeText={onChange}
      value={todo}
      editable
      style={{ height: 40 }}
    />
    <Button
      title="Add"
      onPress={onAdd}
    />
  </View>
);

export default TodoForm;
