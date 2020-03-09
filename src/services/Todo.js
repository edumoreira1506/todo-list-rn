export const removeTodo = (todos, index) => todos.filter((_, indexTodo) =>
  index !== indexTodo
);

export const validate = (todo, callback) => {
  if (isValid(todo)) {
    return callback.onValidated();
  }

  return callback.onError('Invalid todo!');
}

const isValid = Boolean;
