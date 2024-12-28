import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './NotFound';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
