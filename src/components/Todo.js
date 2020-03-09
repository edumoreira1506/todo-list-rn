import React from 'react';
import { Text, View, Button } from 'react-native';

const Todo = ({
  todo,
  onRemove,
  index
}) => (
  <View>
    <Text>
      { `# ${index} - ${todo}` }
    </Text>
    <Button
      title="Remove"
      onPress={onRemove}
    />
  </View>
);

export default Todo;
