import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>add post</button>
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