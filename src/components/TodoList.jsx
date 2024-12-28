import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import Modal from "./Modal";
import "./css/TodoList.css";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [newTodo, setNewTodo] = useState("");

	useEffect(() => {
		const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
		
		setTodos(savedTodos);
	}, []);

	const addTodo = (newTodo) => {
		console.log(newTodo, "newTodo");
		if (newTodo.trim() === "") return;
		const newTodos = [...todos, { id: Date.now(), text: newTodo }];
		setTodos(newTodos);
		localStorage.setItem("todos", JSON.stringify(newTodos));
		setNewTodo("");
		setShowModal(false);
	};

	const deleteTodo = (id) => {
		const filteredTodos = todos.filter((todo) => todo.id !== id);
		setTodos(filteredTodos);
		localStorage.setItem("todos", JSON.stringify(filteredTodos));
	};

	return (
		<div className="todo-container">
			<h1 className="todo-title">My Todo List</h1>
			<button
				className="add-todo-btn"
				onClick={() => setShowModal(true)}
				aria-label="Add new todo"
			>
				Add Todo
			</button>
			{showModal && (
				<Modal
					closeModal={() => setShowModal(false)}
					onAdd={addTodo}
				/>
			)}
			<ul className="todo-list">
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onDelete={deleteTodo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
