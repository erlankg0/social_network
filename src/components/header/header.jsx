import style from './header.module.css'
function Header() {
	return (
		<header className={style.header}>
			<img
				src='https://w7.pngwing.com/pngs/280/326/png-transparent-logo-netflix-logos-and-brands-icon-thumbnail.png'
				alt='logo'
			></img>
		</header>
	)
}

export default Header
