import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

	let postsData = [
		{id: 1, message: 'I live with my parents.', likesCount: 3},
		{id: 2, message: 'Tonight he’s going out with his girlfriend.', likesCount: 0},
		{id: 3, message: 'I watch special programmes on the television and work at home.', likesCount: 13},
		{id: 4, message: 'Hi, my name is Vitaliy and I come from Australia.', likesCount: 1},
	]

	let postElement = postsData
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