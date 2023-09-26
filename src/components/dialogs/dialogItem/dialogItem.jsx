import { NavLink } from 'react-router-dom'
import style from './dialogItem.module.css'
import userLogo from './../../../images/user_logo.png'
const DialogItem = props => {
	const path = `/dialogs/${props.id}`
	return (
		<div className={style.item + ' ' + style.active}>
			<NavLink to={path} className={style.active}>
				<img src={userLogo} alt='user logo' className={style.image}></img>
				<p>{props?.name}</p>
			</NavLink>
		</div>
	)
}

export default DialogItem
