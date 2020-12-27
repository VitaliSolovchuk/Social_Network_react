import React from "react";
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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

const Dialogs = (props) => {
	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItem}>
				<DialogItem name='Dmitriy' id='1'/>
				<DialogItem name='Andrey' id='2'/>
				<DialogItem name='Romka' id='3'/>

			</div>
			<div className={style.messages}>
				<Massage massage='Hi'/>
				<Massage massage='How is your live'/>
				<Massage massage='way?'/>
			</div>
		</div>
	)
}

export default Dialogs