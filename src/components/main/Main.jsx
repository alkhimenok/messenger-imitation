import React, { useState } from 'react'
import Burger from '../burger/Burger'
import Sidebar from '../sidebar/Sidebar'
import { BREAKPOINT_XS_MAX } from '../../constants/constants'
import { Container, Body } from '../common/styleComponents'
import { MainSection, MainContent } from './styledMain'

const Main = () => {
	const [sidebarShow, setSidebarShow] = useState(false)

	const handleClick = () => setSidebarShow(!sidebarShow)

	return (
		<MainSection className="main">
			<Container className="main__container">
				<Body className="main__body">
					<MainContent className="main__content">
						{/* {window.innerWidth <= parseInt(BREAKPOINT_XS_MAX) ? <Burger handleClick={handleClick} /> : null} */}
						<Burger parentBlockClass='main__burger' handleClick={handleClick} />
						<Sidebar parentBlockClass={'main__sidebar' + `${sidebarShow ? ' --show' : ''}`}></Sidebar>
					</MainContent>
				</Body>
			</Container>
		</MainSection>
	)
}

export default Main
