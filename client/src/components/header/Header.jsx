import React from 'react'
import { Body, Container } from '../common/styleComponents'
import { Logo } from './styled'

const Header = () => {
	return (
		<header className="header">
			<Container className="header__container">
				<Body className="header__body">
					<Logo className="header__logo">logo</Logo>
				</Body>
			</Container>
		</header>
	)
}

export default Header
