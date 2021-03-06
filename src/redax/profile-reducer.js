const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initState = {
	posts: [
		{id: 1, message: 'I live with my parents.', likesCount: 3},
		{id: 2, message: 'Tonight he’s going out with his girlfriend.', likesCount: 0},
		{id: 3, message: 'I watch special programmes on the television and work at home.', likesCount: 13},
		{id: 4, message: 'Hi, my name is Vitaliy and I come from Australia.', likesCount: 1},
	],
	newPostText: '',
}

export const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			};
		case ADD_POST:
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, {id: ++state.posts.length, message: state.newPostText, likesCount: 0}]
			}
		default:
			return state
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})