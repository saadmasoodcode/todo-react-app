import React, { useState } from 'react';
import styles from './InputBox.module.css';

export default function InputBox({
	todos,
	setTodos,
	addTodo,
	todoValue,
	setTodoValue,
}) {
	return (
		<div className={styles.container}>
			<input
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						addTodo(todoValue);
						setTodoValue('');
					}
				}}
				value={todoValue}
				onChange={(e) => {
					setTodoValue(e.target.value);
				}}
				type="text"
			/>
			<button
				onClick={() => {
					addTodo(todoValue);
					setTodoValue('');
				}}
			>
				Add
			</button>
		</div>
	);
}
