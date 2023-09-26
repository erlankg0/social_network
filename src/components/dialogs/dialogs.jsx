import style from './dialogs.module.css'
import Message from './messages/messages'
import DialogItem from './dialogItem/dialogItem'

const Dialogs = props => {
	let dialogsElements = props.data[0].map((element, index) => {
		return <DialogItem className={style.item} name={element} key={index} id={index} />
	})
	const dataMessages = props.data[1].map((element, index) => {
		return <Message message={element.message} key={index} />
	})

	return (
		<div className={style.dialogs}>
			<div className={style.dialogs_items}>{dialogsElements}</div>
			<div className={style.messages}>{dataMessages}</div>
		</div>
	)
}

export default Dialogs
