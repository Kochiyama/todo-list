import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useTasks } from '../contexts/TasksContext'
import { ITask } from '../interfaces/ITask'
import styles from './Task.module.css'

interface TaskProps extends ITask {}

export function Task({ uuid, title, isCompleted }: TaskProps) {
	const { deleteTask, toggleTaskCompletion } = useTasks()

	function handleToggleTaskCompletion() {
		toggleTaskCompletion(uuid)
	}

	function handleDeleteTask() {
		deleteTask(uuid)
	}

	return (
		<div className={styles.task}>
			<button
				onClick={handleToggleTaskCompletion}
				className={styles.toggleTaskCompletionButton}
			>
				{isCompleted ? (
					<CheckCircle
						className={styles.completedIcon}
						size={24}
						weight='fill'
					/>
				) : (
					<Circle className={styles.notCompletedIcon} size={24} />
				)}
			</button>

			<span
				className={isCompleted ? styles.completedText : styles.notCompletedText}
			>
				{title}
			</span>

			<button onClick={handleDeleteTask} className={styles.deleteTaskButton}>
				<Trash size={16} />
			</button>
		</div>
	)
}
