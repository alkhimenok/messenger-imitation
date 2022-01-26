import React from 'react'
import Logo from '../common/logo/Logo'
import Nav from '../common/nav/Nav'
import { Body, Container } from '../common/styleComponents'
import { HeaderSection } from './styledHeader'

const Header = () => {
	const linkList = [
		{ id: null, content: 'hellllllllllllllllllllo', href: '#' },
		{ id: null, content: 'hellllllllllllllllllllo', href: '#' },
		{ id: null, content: 'hellllllllllllllllllllo', href: '#' }
	]

	const handleClick = (e) => {
		console.log(e.target);
	}

	return (
		<HeaderSection className="header">
			<Container className="header__container">
				<Body className="header__body">
					<Logo parentBlockClass={'header__logo'} />
					<Nav parentBlockClass={'header__nav'} linkList={linkList} handleClick={handleClick} />
				</Body>
			</Container>
		</HeaderSection>
	)
}

export default Header
