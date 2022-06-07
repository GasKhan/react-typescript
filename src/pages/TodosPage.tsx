import { useEffect, useState } from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

import { TodoInterface } from '../interfaces/interfaces';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const storageTodos = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as TodoInterface[];
    if (storageTodos.length) setTodos(storageTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: TodoInterface = {
      text: text,
      id: Date.now(),
      isChecked: false,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const checkedHandler = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            text: todo.text,
            id: todo.id,
            isChecked: !todo.isChecked,
          };
        }
        return todo;
      })
    );
  };

  const deleteHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo__main">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        checkedHandler={checkedHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default TodosPage;
