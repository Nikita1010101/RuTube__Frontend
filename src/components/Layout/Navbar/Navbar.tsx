import React, { FC } from 'react'
import styles from './Navbar.module.scss'

import Logo from './Logo/Logo'
import Search from './Search/Search'
import Profile from './Profile/Profile'

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
