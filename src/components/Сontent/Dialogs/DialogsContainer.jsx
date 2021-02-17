import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage

	let sendMessage = () => {
		props.store.dispatch(sendMessageActionCreator())
	}
	let updateNewMessageBody = (textBody) => {
		props.store.dispatch(updateNewMessageBodyActionCreator(textBody))
	}

	return (<Dialogs dialogs={state.dialogs} messages={state.messages} newMessageBody={state.newMessageBody}
	                 sendMessage={sendMessage} updateNewMessageBody={updateNewMessageBody}/>)
}

export default DialogsContainer
