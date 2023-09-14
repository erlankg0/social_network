import style from './post.module.css'

function Post(props) {
	const { messages } = props
	return (
		<div className={style.post}>
			<p className={style.title}>{messages}</p>
			<div className={style.postCart}>
				<img
					className={style.postImg}
					src='https://media.sproutsocial.com/uploads/2022/04/Best-times-to-post-2022_BTTP-Social-Media.jpg'
					alt='post images'
				></img>
			</div>
		</div>
	)
}

export default Post
