import './App.css';
import InputBox from './components/InputBox/InputBox';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';

function App() {
	const [todos, setTodos] = useState([]);
	const [todoValue, setTodoValue] = useState('');

	function addTodo(newTodo) {
		const newTodolist = [...todos, newTodo];
		setTodos(newTodolist);
	}

	const removeTodo = (index) => {
		const newTodolist = todos.filter((todo, todoIndex) => {
			return todoIndex !== index;
		});
		setTodos(newTodolist);
	};

	const editTodo = (index) => {
		const todoToBeEdited = todos[index];
		setTodoValue(todoToBeEdited);
		removeTodo(index);
	};

	return (
		<>
			<InputBox
				todoValue={todoValue}
				setTodoValue={setTodoValue}
				todos={todos}
				setTodos={setTodos}
				addTodo={addTodo}
			/>
			<TodoList editTodo={editTodo} todos={todos} removeTodo={removeTodo} />
		</>
	);
}

export default App;
