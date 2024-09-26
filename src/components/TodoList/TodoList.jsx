import React from 'react';
import TodoCard from '../TodoCard/TodoCard';
import styles from './TodoList.module.css';

function TodoList({ todos, removeTodo, editTodo }) {
	return (
		<div>
			{todos.map((todo, todoIndex) => {
				return (
					<div key={todoIndex}>
						<TodoCard
							removeTodo={removeTodo}
							index={todoIndex}
							todos={todo}
							editTodo={editTodo}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default TodoList;
