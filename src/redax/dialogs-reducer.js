const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'

let initState = {
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
}

export const dialogsReducer = (state = initState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.newBody
			return {
				...state,
				newMessageBody: action.newBody,
			};
		case SEND_MESSAGE:
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, {id: ++state.messages.length, message: state.newMessageBody,}]
			};
		default:
			return state
	}
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (newBody) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody})