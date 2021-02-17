import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

	let newPostText = props.profilePage.newPostText
	let postElement = props.profilePage.posts
		.map(e => <Post message={e.message} likesCount={e.likesCount}/>)


	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = (event) => {
		let text = event.target.value
		props.updateNewPostText(text)
	}


	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} value={newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>add post</button>
				</div>
			</div>
			<div className={style.posts}>
				{postElement}
			</div>
		</div>
	)
}

export default MyPosts