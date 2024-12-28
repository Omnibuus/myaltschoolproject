import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TodoDetail = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todo = todos.find(t => t.id === parseInt(id));
    setTodo(todo);
  }, [id]);

  if (!todo) return <div>Todo not found</div>;

  return (
    <div>
      <h2>{todo.text}</h2>
      <p>ID: {todo.id}</p>
    </div>
  );
};

export default TodoDetail;
