import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {

	let dialogsData = [
		{id: 1, name: 'Dmitriy'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Romka'},
		{id: 4, name: 'Sveta'},
		{id: 5, name: 'Pete'},
	]

	let messageData = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'How is your live'},
		{id: 3, message: 'way'},
		{id: 4, message: 'yo'},
		{id: 5, message: 'yo yo'},
	]

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItem}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
			</div>
			<div className={style.messages}>
				<Massage massage={messageData[0].message}/>
				<Massage massage={messageData[1].message}/>
				<Massage massage={messageData[2].message}/>
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
	return(
		<div className={style.message}>{props.massage}</div>
	)
}