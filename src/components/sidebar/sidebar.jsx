import style from './sidebar.module.css';
import { NavLink } from 'react-router-dom';


function SideBar() {
	return (
		<nav className={style.nav}>
			<ul>
				<li className={style.item }>
					<NavLink to='/' activeClassName={style.active}>
						Profile
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='/dialogs' activeClassName={style.active}>
						Messages
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='/news' activeClassName={style.active}>
						News
					</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='/setting' activeClassName={style.active}>
						Setting
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default SideBar
