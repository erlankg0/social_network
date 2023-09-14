import style from '../content.module.css'
const User = () => {
	return (
		<div className={style.user_content}>
			<div className={style.user_description}>
				<p className={style.user_name}>Erlan Abdraimov</p>
				<ul className={style.user_list}>
					<li className={style.user_listItem}>Data of Birth: 2001-02-07</li>
					<li className={style.user_listItem}>City: Bishkek</li>
					<li className={style.user_listItem}>Education : Web Developer</li>
				</ul>
			</div>
		</div>
	)
}

export default User
