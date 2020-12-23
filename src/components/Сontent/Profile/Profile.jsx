import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<div className={style.headerImg}>
				<img src='https://apeaksolutions.com/wp-content/uploads/2018/02/header-bg.png'/>
			</div>
			<div className={style.description}>
				ava + description
			</div>
			<MyPosts/>
		</div>
	)
}

export default Profile