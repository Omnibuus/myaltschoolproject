import { Link } from 'react-router-dom';
import './css/TodoItem.css';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <Link 
        to={`/todo/${todo.id}`}
        className="todo-link"
        aria-label={`View details for ${todo.text}`}
      >
        {todo.text}
      </Link>
      <button 
        className="delete-btn"
        onClick={() => onDelete(todo.id)} 
        aria-label={`Delete ${todo.text}`}
      >
        ×
      </button>
    </li>
  );
};

export default TodoItem;