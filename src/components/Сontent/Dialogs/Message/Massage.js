import style from "../Dialogs.module.css";
import React from "react";

const Massage = (props) => {
	return (
		<div className={style.message}>{props.massage}</div>
	)
}

export default Massage