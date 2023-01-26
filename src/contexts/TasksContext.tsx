import { createContext, ReactNode, useContext, useState } from 'react'
import { ITask } from '../interfaces/ITask'

type TasksContextData = {
	tasks: ITask[]
	createTask: (title: string) => void
	deleteTask: (taskUuid: string) => void
	toggleTaskCompletion: (taskUuid: string) => void
}

const TasksContext = createContext({} as TasksContextData)

interface TasksProviderProps {
	children: ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
	const [tasks, setTasks] = useState<ITask[]>([])

	function createTask(title: string) {
		const newTask: ITask = {
			uuid: crypto.randomUUID(),
			title,
			isCompleted: false,
			createdAt: new Date(),
		}
		setTasks(state => [...state, newTask])
	}

	function deleteTask(taskUuid: string) {
		setTasks(state => state.filter(task => task.uuid !== taskUuid))
	}

	function toggleTaskCompletion(taskUuid: string) {
		setTasks(state =>
			state.map(task => {
				if (task.uuid !== taskUuid) return task
				return {
					...task,
					isCompleted: !task.isCompleted,
				}
			})
		)
	}

	return (
		<TasksContext.Provider
			value={{ tasks, createTask, deleteTask, toggleTaskCompletion }}
		>
			{children}
		</TasksContext.Provider>
	)
}

export const useTasks = () => useContext(TasksContext)
