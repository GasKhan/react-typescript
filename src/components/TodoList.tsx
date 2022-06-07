import { TodoInterface } from '../interfaces/interfaces';

type TodoListProps = {
  todos: TodoInterface[];
  deleteHandler: (id: number) => void;
  checkedHandler: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  checkedHandler,
  deleteHandler,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes: Array<string> = ['todo'];
        if (todo.isChecked) classes.push('todo_checked');
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => checkedHandler(todo.id)}
              />
              <span>{todo.text}</span>
              <i
                className="material-icons red-text"
                onClick={() => deleteHandler(todo.id)}
              >
                {' '}
                delete{' '}
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
