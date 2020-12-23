import style from './Header.module.css'

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.headerImg}>
				<img src='https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png'/>
			</div>
		</header>
	)
}
export default Header;