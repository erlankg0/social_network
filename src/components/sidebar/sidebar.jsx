import style from './sidebar.module.css';


function SideBar() {
	return (
		<nav className={style.nav}>
			<ul>
				<li className={style.item}>
					<a href='/profile'>Profile</a>
				</li>
				<li className={style.item}>
					<a href='/messages'>Messages</a>
				</li>
				<li className={style.item}>
					<a href='/image'>Images</a>
				</li>
				<li className={style.item}>
					<a href='/setting'>Setting</a>
				</li>
			</ul>
		</nav>
	)
}

export default SideBar
