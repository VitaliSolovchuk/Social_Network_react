const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY'

export const dialogsReducer = (state, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			state.messages.push({
				id: 7,
				message: state.newMessageBody,
			})
			state.newMessageBody = ''
			break
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.newBody
			break
		default:
			break
	}


	return state
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (newBody) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody})