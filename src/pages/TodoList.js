import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { removeTodo, validate } from '../services/Todo';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleRemoveTodo = index => {
    const newTodos = removeTodo(todos, index);

    setTodos(newTodos);
  }

  const handleAddTodo = () => {
    validate(todo, {
      onValidated: () => {
        setTodos(prevTodos => [ ...prevTodos, todo ])
        setTodo('');
      },
      onError: Alert.alert
    })
  }

  const handleChangeTodo = text => {
    setTodo(text);
  }

  return (
    <View>
      <TodoForm
        todo={todo}
        onAdd={handleAddTodo}
        onChange={text => handleChangeTodo(text)}
      />
      <Text>
        Todos:
      </Text>
      {
        todos.map((item, index) => (
          <Todo
            key={index}
            todo={item}
            index={index}
            onRemove={() => handleRemoveTodo(index)}
          />
        ))
      }
    </View>
  )
}

export default App;
