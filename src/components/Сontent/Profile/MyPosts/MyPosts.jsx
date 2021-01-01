import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postElement = props.posts
		.map(e => <Post message={e.message} likesCount={e.likesCount}/>)

	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea>Пустой</textarea>
				</div>
				<div>
					<button>add post</button>
				</div>
			</div>
			<div className={style.posts}>
				{postElement}
			</div>
		</div>
	)
}

export default MyPosts