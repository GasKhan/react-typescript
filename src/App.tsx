import { useState } from 'react';

import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { TodoInterface } from './interfaces/interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

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
    <div>
      <Navbar />
      <main>
        <h1>hello</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          checkedHandler={checkedHandler}
          deleteHandler={deleteHandler}
        />
      </main>
    </div>
  );
};

export default App;
