const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			state.posts.push({
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			})
			state.newPostText = ''
			break
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			break
		default:
			break
	}


	return state
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})