import React from 'react'
import Logo from '../common/logo/Logo'
import Nav from '../common/nav/Nav'
import { Container, Body } from '../common/styleComponents'
import { HeaderSection, HeaderContent } from './styledHeader'

const Header = () => {
	const linkList = [
		{ id: 'dialoguesLink', content: 'dialogues', href: 'dialogues' },
		{ id: 'communitiesLink', content: 'communities', href: 'communities' },
		{ id: 'botsLink', content: 'bots', href: 'bots' }
	]

	const handleClick = e => e.preventDefault()

	return (
		<HeaderSection className="header" id="header">
			<Container className="header__container">
				<Body className="header__body">
					<HeaderContent className="header__content">
						<div></div>
						{/* <Nav parentBlockClass="header__nav" linkList={linkList} handleClick={handleClick} them="light" /> */}
						<Logo parentBlockClass="header__logo" />
					</HeaderContent>
				</Body>
			</Container>
		</HeaderSection>
	)
}

export default Header
