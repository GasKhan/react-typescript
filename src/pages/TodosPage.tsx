import { useEffect, useState } from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoController from '../components/TodoController';

import { TodoInterface } from '../interfaces/interfaces';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);
  const [displayedTodos, setDisplayedTodos] = useState<TodoInterface[]>([]);

  useEffect(() => {
    const storageTodos = JSON.parse(
      localStorage.getItem('todos') || '[]'
    ) as TodoInterface[];
    if (storageTodos.length) setTodos(storageTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setDisplayedTodos(todos);
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

  const showActive = () => {
    const active = todos.filter((todo) => !todo.isChecked);
    setDisplayedTodos(active);
  };

  const showCompleted = () => {
    const completed = todos.filter((todo) => todo.isChecked);
    setDisplayedTodos(completed);
  };

  const showAll = () => {
    setDisplayedTodos(todos);
  };

  const clearCompleted = () => {
    const cleared = todos.filter((todo) => !todo.isChecked);
    setTodos(cleared);
  };

  return (
    <div className="todo__main">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={displayedTodos}
        checkedHandler={checkedHandler}
        deleteHandler={deleteHandler}
      />
      <TodoController
        todosCount={todos.filter((todo) => !todo.isChecked).length}
        allHandler={showAll}
        activeHandler={showActive}
        completedHandler={showCompleted}
        clearHandler={clearCompleted}
      />
    </div>
  );
};

export default TodosPage;
