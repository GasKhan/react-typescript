import TodosPage from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <h1 className="title">todos</h1>
      <TodosPage />
    </div>
  );
};

export default App;
