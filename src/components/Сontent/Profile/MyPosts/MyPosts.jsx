import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postElement = props.posts
		.map(e => <Post message={e.message} likesCount={e.likesCount}/>)

	let newPostElement = React.createRef()

	let addPost = () => {
		let text = newPostElement.current.value
		props.addPost(text)
		newPostElement.current.value = ''
	}


	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}>Пустой</textarea>
				</div>
				<div>
					<button onClick={addPost}>add post</button>
				</div>
			</div>
			<div className={style.posts}>
				{postElement}
			</div>
		</div>
	)
}

export default MyPosts