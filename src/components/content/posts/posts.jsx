import style from './posts.module.css'
import Post from './post/post'

function Posts() {
	return (
		<div className={style.postContent}>
			MY post
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
				<Post messages='Erlan Abdraimov Post 1'/>
				<Post messages='Some Post'/>
			</div>
		</div>
	)
}

export default Posts
