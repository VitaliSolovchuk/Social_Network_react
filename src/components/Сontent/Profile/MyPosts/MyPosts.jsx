import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postElement = props.posts
		.map(e => <Post message={e.message} likesCount={e.likesCount}/>)

	let newPostElement = React.createRef()

	let addPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}


	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
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