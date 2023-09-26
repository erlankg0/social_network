import Posts from './posts/posts.jsx'
import User from './user/user.jsx'

function Content(props) {
	const { data } = props
	return (
		<div>
			<img
				src='https://www.journalofnomads.com/wp-content/uploads/2021/01/kyrgyzstanalakul-1024x768.jpg'
				alt='some img'
			></img>
			{User()}
			{<Posts posts={data} />}
		</div>
	)
}

export default Content
