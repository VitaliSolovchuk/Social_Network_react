import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {


	let dialogsElements = props.state.dialogs
		.map(d => <DialogItem name={d.name} id={d.id}/>)

	let messageElements = props.state.messages
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