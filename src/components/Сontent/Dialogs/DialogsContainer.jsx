import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (textBody) => {
			dispatch(updateNewMessageBodyActionCreator(textBody))
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator())
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer



