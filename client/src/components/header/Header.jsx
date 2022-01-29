import React from 'react'
import Logo from '../common/logo/Logo'
import { Container, Body } from '../common/styleComponents'
import { HeaderSection, HeaderContent } from './styledHeader'

const Header = () => {
	return (
		<HeaderSection className="header" id="header">
			<Container className="header__container">
				<Body className="header__body">
					<HeaderContent className="header__content">
						<div></div>
						<Logo parentBlockClass="header__logo" />
					</HeaderContent>
				</Body>
			</Container>
		</HeaderSection>
	)
}

export default Header
