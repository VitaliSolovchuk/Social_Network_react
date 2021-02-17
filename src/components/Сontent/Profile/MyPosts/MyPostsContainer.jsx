import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: (text) => {
			dispatch(updateNewPostActionCreator(text))
		},
	}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer