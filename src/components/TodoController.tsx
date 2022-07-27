import { useState } from 'react';

interface IControllerProps {
  todosCount: number;
  allHandler: () => void;
  activeHandler: () => void;
  completedHandler: () => void;
  clearHandler: () => void;
}

const TodoController: React.FC<IControllerProps> = ({
  todosCount,
  allHandler,
  activeHandler,
  completedHandler,
  clearHandler,
}) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="controller px1">
      <div className="controller__counter">{todosCount} items left</div>

      <div className="controller__sort">
        <button
          className={selectedFilter === 'all' ? 'selected' : ''}
          onClick={() => {
            setSelectedFilter('all');
            allHandler();
          }}
        >
          All
        </button>
        <button
          className={selectedFilter === 'active' ? 'selected' : ''}
          onClick={() => {
            setSelectedFilter('active');
            activeHandler();
          }}
        >
          Active
        </button>
        <button
          className={selectedFilter === 'completed' ? 'selected' : ''}
          onClick={() => {
            setSelectedFilter('completed');
            completedHandler();
          }}
        >
          Completed
        </button>
      </div>

      <div className="controller__clear">
        <button onClick={clearHandler}>Clear completed</button>
      </div>
    </div>
  );
};

export default TodoController;
