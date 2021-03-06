import React, { useState, useEffect } from 'react'
import Search from '../common/search/Search'
import Nav from '../common/nav/Nav'
import Spinner from '../common/spinner/Spinner'
import Dialogue from '../dialogue/Dialogue'
import { SidebarSection, SidebarList } from './styledSidebar'
import { uid } from 'uid'
import { setSidebarHeight } from '../../scripts/sidebarHeight'

const Sidebar = ({ parentBlockClass, dialogues, handleChangeCurrentDialogue }) => {
	const [indexCurrentDialogue, setIndexCurrentDialogue] = useState(0)

	const { dialogueList, isDataReceived } = dialogues

	const linkList = [
		{ id: 'dialoguesLink', content: 'dialogues', href: 'dialogues' },
		{ id: 'communitiesLink', content: 'communities', href: 'communities' },
		{ id: 'botsLink', content: 'bots', href: 'bots' }
	]

	useEffect(() => setSidebarHeight())

	const handleNavClick = e => e.preventDefault()

	const handleDialogueSelect = e => {}

	return (
		<SidebarSection className={[parentBlockClass, 'sidebar'].join(' ')}>
			<Search parentBlockClass="sidebar__search" id="sidebarSearch" />
			<Nav parentBlockClass="sidebar__nav" id="sidebarNav" linkList={linkList} handleClick={handleNavClick} them="dark" />
			<SidebarList className="sidebar__list" id="sidebarList">
				{isDataReceived ? (
					dialogueList.length ? (
						dialogueList.map((dialogue, i) => (
							<Dialogue
								parentBlockClass={['sidebar__dialogue', indexCurrentDialogue === i ? '--selected' : ''].join(' ')}
								options={dialogue}
								handleClick={() => {
									handleDialogueSelect()
									setIndexCurrentDialogue(i)
								}}
								key={uid()}
							/>
						))
					) : (
						'Dialogue list is empty'
					)
				) : (
					<Spinner parentBlockClass="sidebar__spinner" />
				)}
			</SidebarList>
		</SidebarSection>
	)
}

export default Sidebar
