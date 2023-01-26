import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<img src='todo-list-logo.svg' alt='ToDo List' />
		</header>
	)
}
