import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = () => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts/>
		</div>
	)
}

export default Profile