import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

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
			newMessageBody: '',
		},
	},
	_callSubscriber() {
		console.log('state change')
	},


	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		debugger
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._callSubscriber(this._state)
	},

}


export default store