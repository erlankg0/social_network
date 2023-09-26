import style from './posts.module.css'
import Post from './post/post'

function Posts(props) {
	let postElements = props.posts.map((value, index) => (
		<Post messages={value.messages} likeCount={value.likeCount} key={index}/>
	))
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
