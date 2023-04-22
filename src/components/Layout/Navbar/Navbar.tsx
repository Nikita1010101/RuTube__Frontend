import React, { FC } from 'react'
import Logo from './Logo/Logo'
import styles from './Navbar.module.scss'
import Profile from './Profile/Profile'
import Search from './Search/Search'

const Navbar: FC = () => {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<Search />
			<Profile />
		</nav>
	)
}

export default Navbar
