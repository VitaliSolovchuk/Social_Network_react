import React from "react";
import style from './ProdileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div className={style.headerImg}>
				<img src='https://apeaksolutions.com/wp-content/uploads/2018/02/header-bg.png'/>
			</div>
			<div className={style.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo