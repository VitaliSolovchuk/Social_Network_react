import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>add post</button>
				</div>
			</div>
			<div className={style.posts}>
				<Post message='I live with my parents.'/>
				<Post message='Tonight he’s going out with his girlfriend.'/>
				<Post message='I watch special programmes on the television and work at home.'/>
				<Post message='Hi, my name is Vitaliy and I come from Australia.'/>
			</div>
		</div>
	)
}

export default MyPosts