import style from './Post.module.css'

const Post = (props) => {
	return (
		<div className={style.item}>
			<div>
				<img
					src='https://newsterra.net/upload/catalog/ru/o-chem-govorit-avatarka-profilya-obyasnyayut-psihologi_5ef1a814b8d06.jpg'/>
			</div>
			<div>
				{props.message}
			</div>
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post