import style from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from '../friends/friends'

function SideBar(props) {
	let users = props.name.slice(0, 3)
	let friends = users.map((name, index) => (
		<NavLink to={`/dialogs/${index}`}>
			<Friends className={style.item} name={name} key={index} />
		</NavLink>
	))

	return (
		<nav className={style.nav}>
			<ul>
				<li className={style.item}>
					<NavLink to='/'>Profile</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='/dialogs'>Messages</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='/news'>News</NavLink>
				</li>
				<li className={style.item}>
					<NavLink to='/setting'>Setting</NavLink>
				</li>
			</ul>
			<div className={style.friends}>{friends}</div>
		</nav>
	)
}

export default SideBar
