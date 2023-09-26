import user_logo from '../../images/user_logo.png'
const Friends = props => {
	return (
		<div >
			<img src={user_logo} alt={props.name} />
			<p>{props.name}</p>
		</div>
	)
}

export default Friends
