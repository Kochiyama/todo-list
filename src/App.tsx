import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import { Tasks } from './components/Tasks'
import { TasksProvider } from './contexts/TasksContext'

function App() {
	return (
		<TasksProvider>
			<Header />

			<NewTaskForm />

			<Tasks />
		</TasksProvider>
	)
}

export default App
