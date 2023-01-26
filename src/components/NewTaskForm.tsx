import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useTasks } from '../contexts/TasksContext'
import styles from './NewTaskForm.module.css'

export function NewTaskForm() {
	const [newTaskTitle, setNewTaskTitle] = useState('')

	const { createTask } = useTasks()

	function handleNewTaskTitleChange(e: ChangeEvent<HTMLInputElement>) {
		setNewTaskTitle(e.target.value)
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (newTaskTitle === '') return
		createTask(newTaskTitle)
		setNewTaskTitle('')
	}

	return (
		<form className={styles.newTaskForm} onSubmit={handleSubmit}>
			<input
				value={newTaskTitle}
				onChange={handleNewTaskTitleChange}
				placeholder='Adicione uma nova tarefa'
			/>

			<button type='submit'>
				Criar
				<PlusCircle size={16} />
			</button>
		</form>
	)
}
