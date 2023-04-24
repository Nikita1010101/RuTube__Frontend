import { FC } from 'react'
import styles from './Navbar.module.scss'

import Logo from './Logo/Logo'
import SearchInput from './Search-input/SearchInput'
import Profile from './Profile/Profile'

const Navbar: FC = () => {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<SearchInput />
			<Profile />
		</nav>
	)
}

export default Navbar
