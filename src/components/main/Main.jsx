import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Container, Body } from '../common/styleComponents'
import { MainSection, MainContent } from './styledMain'

const Main = () => {
	return (
		<MainSection className="main">
			<Container className="main__container">
				<Body className="main__body">
					<MainContent className="main__content">
						<Sidebar parentBlockClass="main__sidebar"></Sidebar>
					</MainContent>
				</Body>
			</Container>
		</MainSection>
	)
}

export default Main
