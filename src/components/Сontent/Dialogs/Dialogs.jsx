import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Message/Massage";


const Dialogs = (props) => {

	let newMessageBody = props.dialogsPage.newMessageBody
	let dialogsElements = props.dialogsPage.dialogs
		.map(d => <DialogItem name={d.name} id={d.id}/>)
	let messageElements = props.dialogsPage.messages
		.map(m => <Massage massage={m.message}/>)


	let onSendMessageClick = () => {
		props.sendMessage()
	}
	let onNewMessageChange = (event) => {
		let messageBody = event.target.value
		props.updateNewMessageBody(messageBody)
	}

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={style.messages}>
				<div>{messageElements}</div>
				<div>
					<div><textarea onChange={onNewMessageChange} value={newMessageBody}
					               placeholder='Enter your message'/></div>
					<div>
						<button onClick={onSendMessageClick}>send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs




