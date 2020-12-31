import style from './Post.module.css'
import React from "react";

const Post = (props) => {
	return (
		<div className={style.item}>
			<div>
				<img alt='аватарка'
					src='https://newsterra.net/upload/catalog/ru/o-chem-govorit-avatarka-profilya-obyasnyayut-psihologi_5ef1a814b8d06.jpg'/>
				{props.message}
			</div>
			<div className={style.like}>
				{props.likesCount}<span> like</span>
			</div>
		</div>
	)
}

export default Post