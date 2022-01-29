import React, { useState } from 'react'
import Burger from '../burger/Burger'
import Sidebar from '../sidebar/Sidebar'
import { Container, Body } from '../common/styleComponents'
import { MainSection, MainContent } from './styledMain'

const Main = () => {
	const dialogueList = [
		{ picture: './images/picture.jpeg', title: '101', message: 'hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101, hello my name is 101' },
		{ picture: '', title: '', message: '' }
	]

	const [sidebarShow, setSidebarShow] = useState(false)

	const handleClick = () => setSidebarShow(!sidebarShow)

	return (
		<MainSection className="main">
			<Container className="main__container">
				<Body className="main__body">
					<MainContent className="main__content">
						<Burger parentBlockClass="main__burger" handleClick={handleClick} />
						<Sidebar
							parentBlockClass={'main__sidebar' + `${sidebarShow ? ' --show' : ''}`}
							dialogueList={dialogueList || []}>
						</Sidebar>
					</MainContent>
				</Body>
			</Container>
		</MainSection>
	)
}

export default Main
