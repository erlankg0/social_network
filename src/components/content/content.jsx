import Posts from './posts/posts.jsx'
import User from './user/user.jsx'
import style from './content.module.css'

function Content() {
	return (
		<div className={style.content}>
			<img
				src='https://www.journalofnomads.com/wp-content/uploads/2021/01/kyrgyzstanalakul-1024x768.jpg'
				alt='some img'
			></img>
			{User()}
			{Posts()}
		</div>
	)
}

export default Content
