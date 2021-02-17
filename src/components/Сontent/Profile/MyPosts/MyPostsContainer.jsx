import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redax/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
	let state = props.store.getState().profilePage

	let addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostActionCreator(text))
	}


	return (<MyPosts posts={state.posts} newPostText={state.newPostText}
	                 updateNewPostText={onPostChange} addPost={addPost}/>)
}

export default MyPostsContainer