import style from './user.module.css'

const UserImage = props => {
	return (
		<img className={style['user_image']}
			src='https://media.licdn.com/dms/image/D4D03AQEXXaI7KIEE9Q/profile-displayphoto-shrink_800_800/0/1666509693631?e=2147483647&v=beta&t=pbzgKZzIr-u0-Q1lSL_N9OfK7fJZ4Lb3c03nX4sMuEw'
			alt='me'
		></img>
	)
}

const UserInfo = props => {
	return (
		<div>
			<p className={style.user_name}>Erlan Abdraimov</p>
			<ul className={style['user_list']}>
				<li className={style.user_listItem}>Data of Birth: 2001-02-07</li>
				<li className={style.user_listItem}>City: Bishkek</li>
				<li className={style.user_listItem}>Education : Web Developer</li>
			</ul>
		</div>
	)
}

const User = () => {
	return <div className={style.user_description}>
		<UserImage/>
		<UserInfo/>
	</div>
}

export default User
