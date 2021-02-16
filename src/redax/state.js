let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'I live with my parents.', likesCount: 3},
				{id: 2, message: 'Tonight he’s going out with his girlfriend.', likesCount: 0},
				{id: 3, message: 'I watch special programmes on the television and work at home.', likesCount: 13},
				{id: 4, message: 'Hi, my name is Vitaliy and I come from Australia.', likesCount: 1},
			],
			newPostText: '',
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Dmitriy'},
				{id: 2, name: 'Andrey'},
				{id: 3, name: 'Romka'},
				{id: 4, name: 'Sveta'},
				{id: 5, name: 'Pete'},
			],
			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'How is your live'},
				{id: 3, message: 'way'},
				{id: 4, message: 'yo'},
				{id: 5, message: 'yo yo'},
			],
		},
	},
	_callSubscriber() {
		console.log('state change')
	},

	_addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 1,
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		if (action.type === 'ADD_POST') {
			this._addPost()
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._updateNewPostText(action.newText)
		}
	},

}


export default store