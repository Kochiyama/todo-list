import { ClipboardText } from 'phosphor-react'
import { useTasks } from '../contexts/TasksContext'
import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks() {
	const { tasks } = useTasks()

	const createdTasks = tasks.length
	const completedTasks = tasks.reduce((accumulator, currentValue) => {
		if (currentValue.isCompleted) {
			return accumulator + 1
		}
		return accumulator
	}, 0)

	return (
		<main className={styles.tasks}>
			<header>
				<span className={styles.createdCounter}>
					Tarefas Criadas
					<span>{createdTasks}</span>
				</span>

				<span className={styles.doneCounter}>
					Concluídas <span>{completedTasks}</span>
				</span>
			</header>

			{tasks.length === 0 ? (
				<div className={styles.noTasks}>
					<ClipboardText size={56} />

					<p>
						<strong>Você ainda não tem tarefas cadastradas</strong>
					</p>
					<p>Crie tarefas e organize seus itens a fazer</p>
				</div>
			) : (
				<div className={styles.tasksList}>
					{tasks.map(task => (
						<Task
							key={task.uuid}
							uuid={task.uuid}
							title={task.title}
							createdAt={task.createdAt}
							isCompleted={task.isCompleted}
						/>
					))}
				</div>
			)}
		</main>
	)
}
