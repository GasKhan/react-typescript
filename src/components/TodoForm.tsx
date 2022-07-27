import React, { useState } from 'react';
interface TodoFormInterface {
  addTodo(text: string): void;
}

const TodoForm: React.FC<TodoFormInterface> = (props) => {
  const [todoText, setTodoText] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (todoText) {
        props.addTodo(todoText);
        setTodoText('');
      }
    }
  };

  return (
    <div className="px1">
      <form
        className="input-field custom-input-field"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          id="title"
          placeholder="What needs to be done?"
          className="custom-input"
          value={todoText}
          onChange={(e) => changeHandler(e)}
          onKeyUp={(e) => keyPressHandler(e)}
        ></input>
      </form>
    </div>
  );
};

export default TodoForm;
