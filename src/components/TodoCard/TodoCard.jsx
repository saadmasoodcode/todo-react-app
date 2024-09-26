import React from 'react';
import styles from './TodoCard.module.css';

function TodoCard({ todos, removeTodo, index, editTodo }) {
	return (
		<div className={styles.container}>
			<p>{todos}</p>
			<div className={styles.action_btns}>
				<button
					onClick={() => {
						editTodo(index);
					}}
				>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
				<button
					onClick={() => {
						removeTodo(index);
					}}
				>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</div>
	);
}

export default TodoCard;
