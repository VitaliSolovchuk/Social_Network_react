import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={style.navigation}>
			<div className={style.item}>
				<NavLink to='/profile' activeClassName={style.activeLinc}>Profile</NavLink>
			</div>
			<div className={style.item}>
				<NavLink to='/dialogs' activeClassName={style.activeLinc}>Massages</NavLink>
			</div>
			<div className={style.item}>
				<a>News</a>
			</div>
			<div className={style.item}>
				<a>Music</a>
			</div>
			<div className={style.item}>
				<a>Settings</a>
			</div>
		</nav>
	)
}

export default Navbar;