import style from './dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = props => {
	const path = `/dialogs/${props.id}`
	return (
		<div className={style.item + ' ' + style.active}>
			<NavLink to={path}>{props?.name}</NavLink>
		</div>
	)
}

const Message = props => {
	return <div className={style.message}>{props?.message}</div>
}

const Dialogs = () => {
	const users = ['Erlan', 'Daniel', 'Saken', 'Mirzat', 'Asema', 'Ceren']
	let dialogsElements = users.map((element, index) => {
		return <DialogItem name={element} id={index} />
	})
	const dataMessages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'Erlan' },
		{ id: 3, message: 'Director' },
	].map((element, index) => {
		return <Message message={element.message} />
	})

	return (
		<div className={style.dialogs}>
			<div className={style.dialogs_items}>{dialogsElements}</div>
			<div className={style.messages}>{dataMessages}</div>
		</div>
	)
}

export default Dialogs
