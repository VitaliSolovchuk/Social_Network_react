import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {

	let dialogs = [
		{id: 1, name: 'Dmitriy'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Romka'},
		{id: 4, name: 'Sveta'},
		{id: 5, name: 'Pete'},
	]

	let dialogsElements = dialogs
		.map(d => <DialogItem name={d.name} id={d.id}/>)

	let message = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How is your live'},
		{id: 3, message: 'way'},
		{id: 4, message: 'yo'},
		{id: 5, message: 'yo yo'},
	]

	let messageElements = message
		.map(m => <Massage massage={m.message}/>)

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItem}>
				{dialogsElements}
			</div>
			<div className={style.messages}>
				{messageElements}
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