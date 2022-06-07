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
      props.addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <div className="px1">
      <form className="input-field" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="title"
          placeholder="Input your text"
          value={todoText}
          onChange={(e) => changeHandler(e)}
          onKeyUp={(e) => keyPressHandler(e)}
        ></input>
        <label htmlFor="title" className="active">
          Input your text
        </label>
      </form>
    </div>
  );
};

export default TodoForm;
