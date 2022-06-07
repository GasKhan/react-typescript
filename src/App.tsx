import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<TodosPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
