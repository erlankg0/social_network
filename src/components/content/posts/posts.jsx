import style from './posts.module.css'
import Post from './post/post'

function Posts() {
	const dataPost = [
		{ id: 1, messages: 'Hello first post', likeCount: 0 },
		{ id: 1, messages: 'Utopia World Hotel', likeCount: 11 },
		{ id: 1, messages: 'Ma*Me*Pa', likeCount: 15 },
	]

	let postElements = [
		<Post messages={dataPost[0].messages} likeCount={dataPost[0].likeCount} />,
		<Post messages={dataPost[1].messages} likeCount={dataPost[1].likeCount} />,
		<Post messages={dataPost[2].messages} likeCount={dataPost[2].likeCount} />,
	]
	return (
		<div>
			<h3>My Posts</h3>
			<form className={style.postForm}>
				<input
					type='text'
					className={style.inputPost}
					name='postName'
					placeholder='Post Name...'
				></input>
				<input
					type='file'
					className={style.inputImage}
					name='postImage'
				></input>
				<button className={style.btnForm}>Send</button>
			</form>
			{postElements}
			
		</div>
	)
}

export default Posts
