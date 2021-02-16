import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redax/dialogs-reducer";


const Dialogs = (props) => {


	let dialogsElements = props.state.dialogs
		.map(d => <DialogItem name={d.name} id={d.id}/>)
	let messageElements = props.state.messages
		.map(m => <Massage massage={m.message}/>)
	let newMessageBody = props.state.newMessageBody

	let onSendMessageClick = () => {
		let action = sendMessageActionCreator()
		props.dispatch(action)
	}
	let onNewMessageChange = (event) => {
		let messageBody = event.target.value
		let action = updateNewMessageBodyActionCreator(messageBody)
		props.dispatch(action)
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


const DialogItem = (props) => {
	return (
		<div className={style.dialog + ' ' + style.active}>
			<NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
		</div>
	)
}

const Massage = (props) => {
	return (
		<div className={style.message}>{props.massage}</div>
	)
}