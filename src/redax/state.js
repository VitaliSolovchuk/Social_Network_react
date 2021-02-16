
let store = {
	_state : {
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

	getState(){
		return this._state
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 1,
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	_callSubscriber() {
		console.log('state change')
	},
}



export default store