import React, { useState, useEffect, useCallback } from 'react'
import Burger from '../burger/Burger'
import Sidebar from '../sidebar/Sidebar'
import { Container, Body } from '../common/styleComponents'
import { MainSection, MainContent } from './styledMain'
import { addRequest } from '../../scripts/request'

const Main = () => {
	const [sidebarShow, setSidebarShow] = useState(false)
	const [dialogues, setDialogues] = useState({ dialogueList: [], isDataReceived: false })

	const handleClick = () => setSidebarShow(!sidebarShow)

	useEffect(async () => {
		const data = await addRequest('/api/dialogues')

		setDialogues({ dialogueList: data, isDataReceived: true })
	}, [])

	return (
		<MainSection className="main">
			<Container className="main__container">
				<Body className="main__body">
					<MainContent className="main__content">
						<Burger parentBlockClass="main__burger" handleClick={handleClick} />
						<Sidebar parentBlockClass={'main__sidebar' + `${sidebarShow ? ' --show' : ''}`} dialogues={dialogues}></Sidebar>
					</MainContent>
				</Body>
			</Container>
		</MainSection>
	)
}

export default Main
